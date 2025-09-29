# pip install fastapi uvicorn pandas
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
#import time
#import asyncio

contador_id = 1
alunos_df = pd.DataFrame([])

class Aluno(BaseModel):
    nome: str
    curso: str
    IRA: float

def criar_aluno(aluno: Aluno):
    novo = {
        "id": contador_id
        "nome": aluno.nome,
        "curso": aluno.curso,
        "IRA": aluno.IRA
    }
