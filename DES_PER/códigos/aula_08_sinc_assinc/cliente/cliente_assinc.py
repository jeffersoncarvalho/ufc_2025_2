import httpx
import time
import asyncio

URL = "http://127.0.0.1:8000"

async def chamar_rota():

    inicio = time.time()
    async with httpx.AsyncClient() as cliente:
        r1, r2 = await asyncio.gather(
            cliente.get(f"{URL}/sinc"),
            cliente.get(f"{URL}/sinc")
        )
        print("Resp r1: ", r1.json())
        print("Resp r2: ", r2.json())
        
    fim = time.time()
    print(f"Tempo total: {fim-inicio:.2f} segundos")


if __name__ == "__main__":
   asyncio.run(chamar_rota())