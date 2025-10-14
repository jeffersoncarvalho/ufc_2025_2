# pip install fastapi uvicorn pandas
# swagger http://127.0.0.1:8000/docs
# uvicorn main:app --reload
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import time
import asyncio

# Criamos um lock global
lock = asyncio.Lock()

# iniciando o applicativo
app = FastAPI()

#df = pd.DataFrame(columns=["id","nome","curso","nota"])
df = pd.DataFrame(
    {
        "id" : [1,2,3,4],
        "nome" : ["Jefferson", "Fábio", "Wladimir", "Marcelo"],
        "curso" : ["SI", "DD", "ES", "SI"],
        "nota" : [5.4, 6.7, 8.1, 9.7] 
    }
)
contador_id = 1

class Aluno(BaseModel):

    nome: str
    curso: str
    nota: float

# rota para criar o aluno
# cria um lock para ser acessado por uma única thread por vez
# sleep para simular tempo computacional
@app.post("/alunos")
async def criar_aluno(aluno: Aluno):
    async with lock:
        #time.sleep(3) 
        await asyncio.sleep(3)
        global df, contador_id
        novo = {
            "id": contador_id,
            "nome": aluno.nome,
            "curso": aluno.curso,
            "nota": aluno.nota
        }
        df = pd.concat(
            [df, pd.DataFrame([novo])],
            ignore_index = True
        )
        contador_id += 1
        return {
            "mensagem": "Aluno criado com sucesso",
            "aluno": novo 
        }
    
#rota para listas todos os alunos
@app.get("/alunos")
async def listar_alunos():
    await asyncio.sleep(3)
    return df.to_dict(orient="records")

#rota para obter aluno por id
@app.get("/alunos/{id}")
def obter_aluno(id: int):
    global df
    aluno =  df[df["id"]==id]
    if aluno.empty:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    return aluno.to_dict(orient = "records")[0]

#rota para atualizar um aluno por id
@app.put("/alunos/{id}")
def atualizar_aluno(id: int, aluno: Aluno):
    global df
    aluno_antigo_idx = df.index[df["id"] == id]
    if aluno_antigo_idx.empty:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    df.loc[aluno_antigo_idx, ["nome", "curso", "nota"]] = [aluno.nome, aluno.curso, aluno.nota]
    return {
        "mensagem": f"Aluno id {id} atualizado com sucesso!",
        "aluno": df.loc[aluno_antigo_idx].to_dict(orient="records")[0]
    }

#rota para apagar o aluno via id
@app.delete("/alunos/{id}")
def apagar_aluno(id: int):
    global df
    aluno_antigo_idx = df.index[df["id"] == id]
    if aluno_antigo_idx.empty:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    df = df.drop(aluno_antigo_idx).reset_index(drop=True)
    return {"mensagem": f"Aluno com id {id} apagado com sucesso"}


