# pip install fastapi uvicorn pandas
# swagger http://127.0.0.1:8000/docs
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import time
import asyncio

# Criamos um lock global
lock = asyncio.Lock()

# iniciando o applicativo
app = FastAPI()

df = pd.DataFrame(columns=["id","nome","curso","nota"])
contador_id = 1

class Aluno(BaseModel):

    nome: str
    curso: str
    nota: float

# rota para criar o aluno
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
            "mensagem": "Aluno criado com sucesso"
            ,"aluno": novo 
        }
    
#rota para listas todos os alunos
@app.get("/alunos")
async def listar_alunos():
    await asyncio.sleep(3)
    return df.to_dict(orient="records")

