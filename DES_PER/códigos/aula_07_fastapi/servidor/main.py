# pip install fastapi uvicorn pandas
#para executar:
#uvicorn main:app --reload
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
#import time
#import asyncio

#inciar o aplicativo (API)
app = FastAPI()

#contador_id e alunos_df são variáveis GLOBAIS!
contador_id = 4
#alunos_df = pd.DataFrame(columns = ["id","nome","curso","IRA"])
alunos_df = pd.DataFrame(
    {
        "id": [1,2,3],
        "nome": ["Jefferson", "Wladimir", "Fábio"],
        "curso": ["SI", "CC", "ES"],
        "IRA": [6.7, 8.3, 3.2]
    }
)

#modelo para a entidade Aluno
class Aluno(BaseModel):
    nome: str
    curso: str
    IRA: float

#serviço de criação de um Aluno
@app.post("/alunos")
def criar_aluno(aluno: Aluno):
    
    #dizendo ao Python que as variáveis que serão modificadas são GLOBAIS
    global alunos_df, contador_id
    
    novo_aluno = {
        "id": contador_id,
        "nome": aluno.nome,
        "curso": aluno.curso,
        "IRA": aluno.IRA
    }
    
    #forma com o DataFrame._append
    alunos_df = alunos_df._append(novo_aluno, ignore_index = True)
    #forma com o concat
    #alunos_df = pd.concat([alunos_df, pd.DataFrame([novo_aluno])], ignore_index = True)
    contador_id = contador_id + 1
    return {
        "mensagem": "Aluno criado com sucesso!",
        "aluno": novo_aluno
    }

#serviço de listagem de TODOS os alunos
@app.get("/alunos")
def listar_alunos():
    return alunos_df.to_dict(orient = "records")

#obter aluno via id
@app.get("/alunos/{id}")
def obter_aluno(id: int):
    #não há necessidade de alunos_df ser "global" pois não é feita nenhuma modificação na variável.
    #global alunos_df
    filtro = alunos_df["id"] == id
    aluno = alunos_df[filtro]
    if aluno.empty:
        raise HTTPException(status_code=404, detail=f"Aluno id:{id}, não encontrado")
    return aluno.to_dict(orient="records")[0] 

#atualizar aluno pelo id
@app.put("/alunos/{id}")
def atualizar_aluno(id: int, aluno: Aluno):
    global alunos_df
    aluno_antigo_idx = alunos_df.index[alunos_df["id"] == id]
    if aluno_antigo_idx.empty:
        raise HTTPException(status_code=404, detail=f"Aluno id:{id}, não encontrado")
    alunos_df.loc[aluno_antigo_idx, ["nome", "curso", "IRA"]] = [aluno.nome, aluno.curso, aluno.IRA]
    return {
        "mensagem": f"Aluno {id} atualizado com sucesso!",
        #o bug estava aqui
        "aluno": alunos_df.loc[aluno_antigo_idx].to_dict(orient="records")[0]
    }

#apagar um objeto (registro) da base de dados pelo id
@app.delete("/alunos/{id}")
def apagar_aluno(id: int):
    #como eu vou modificar alunos_df, devo declarar como "global"
    global alunos_df
    aluno_apagar_idx = alunos_df.index[ alunos_df["id"] == id ]
    if aluno_apagar_idx.empty:
        raise HTTPException(status_code=404, detail=f"Aluno id:{id}, não encontrado")
    alunos_df = alunos_df.drop(aluno_apagar_idx).reset_index(drop = True)
    return { "mensagem":  f"Aluno com {id} apagado com sucesso!"}

