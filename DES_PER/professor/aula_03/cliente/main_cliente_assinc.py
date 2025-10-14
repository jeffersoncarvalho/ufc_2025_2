# cliente_async.py
import asyncio
import httpx
import time

URL = "http://127.0.0.1:8000"

#criando uma corotina
async def chamar_rotas():
    inicio = time.time()
    async with httpx.AsyncClient() as client:
        print("Chamando /sync e /async em paralelo...")

        # Executa as duas chamadas simultaneamente
        resposta_sync, resposta_async = await asyncio.gather(
            client.get(f"{URL}/sync"),
            client.get(f"{URL}/sync")
        )

        print("Resposta /sync:", resposta_sync.json())
        print("Resposta /sync:", resposta_async.json())

    fim = time.time()
    print(f"Tempo total: {fim - inicio:.2f} segundos")

if __name__ == "__main__":
    asyncio.run(chamar_rotas())
