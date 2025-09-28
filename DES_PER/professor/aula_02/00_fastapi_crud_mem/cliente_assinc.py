import httpx
import asyncio
import time

BASE_URL = "http://127.0.0.1:8000"

async def criar_aluno(client):
    resp = await client.post(f"{BASE_URL}/alunos", json={"nome": "Ana", "curso": "Engenharia", "nota": 8.7}, timeout=None)
    print("Criar:", resp.json())

async def listar_alunos(client):
    resp = await client.get(f"{BASE_URL}/alunos", timeout=None)
    print("Listar:", resp.json())

async def excutar_em_paralelo():
    async with httpx.AsyncClient() as client:
        await asyncio.gather(criar_aluno(client), criar_aluno(client), listar_alunos(client))



inicio = time.time()
asyncio.run(excutar_em_paralelo())
fim = time.time()
print("Diferença: ", (fim - inicio))


