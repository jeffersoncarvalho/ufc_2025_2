# pip install fastapi uvicorn pandas
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
#import time
#import asyncio

class Aluno(BaseModel):
    nome: str
    curso: str
    IRA: float