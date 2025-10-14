from fastapi import FastAPI
import time
import asyncio

app = FastAPI()

# Função síncrona — boa para código bloqueante
# Você não precisa do async pois está fazendo apenas um cálculo interno, nada externo
# Quando você chama código bloqueante, como I/O de disco, bibliotecas não assíncronas (ex.: requests, pandas, sqlite3)
@app.get("/sync")
def rota_sincrona():
    time.sleep(2)
    return {"tipo": "síncrona", "mensagem": "esperou 2 segundos"}

# Função assíncrona — boa para I/O não bloqueante
# Você DEVE usar caso o seu código faça alguma chamada assíncrona (algo que precisa do await)
# Quando você faz operações assíncronas, como acessar banco via asyncpg, httpx, ou await asyncio.sleep()
@app.get("/async")
async def rota_assincrona():
    await asyncio.sleep(2)
    return {"tipo": "assíncrona", "mensagem": "esperou 2 segundos"}
