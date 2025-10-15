#uvicorn main_sinc_assinc:app --reload
from fastapi import FastAPI
import time
import asyncio

app = FastAPI()

@app.get("/sinc")
# trabalhar com dados em memória/arquivo, cálculos grandes, ou bases de dados blocantes, use 
# rotas sincronas
def rota_sincrona():
    # operação blocante
    time.sleep(2)
    return {"tipo": "SÍNCRONA"}

# trabalhar com chamadas assíncronas dentro da API, como por exempo, httpx,
# acessar uma base de dados com asyncpg ou simulando com o asyncio
@app.get("/assinc")
async def rota_assincrona():
    # simulando uma chamada assincrona!
    await asyncio.sleep(2) 
    return {"tipo": "ASSÍNCRONA"}