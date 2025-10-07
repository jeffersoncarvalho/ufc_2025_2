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
contador_id = 1
#alunos_df = pd.DataFrame(columns = ["id","nome","curso","IRA"])
alunos_df = pd.DataFrame(
    {
        "id": [1,2,3],
        "nome": ["Jefferson", "Wladimir", "Fábio"],
        "curso": ["SI", "CC", "ES"],
        "nota": [6.7, 8.3, 3.2]
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
    global alunos_df
    filtro = alunos_df["id"] == id
    aluno = alunos_df[filtro]
    if aluno.empty:
        raise HTTPException(status_code=404, detail=f"Aluno id:{id}, não encontrado")
    return aluno.to_dict(orient="records")[0] 



