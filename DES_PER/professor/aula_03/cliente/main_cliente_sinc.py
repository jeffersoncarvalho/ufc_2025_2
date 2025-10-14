# cliente_sync.py
import httpx
import time

URL = "http://127.0.0.1:8000"

def chamar_rotas():
    inicio = time.time()

    print("Chamando /sync ...")
    # r1 = httpx.requests(f"{URL}/sync")
    r1 = httpx.get(f"{URL}/sync")
    print("Resposta 1:", r1.json())

    print("Chamando /async ...")
    r2 = httpx.get(f"{URL}/async")
    print("Resposta 2:", r2.json())

    fim = time.time()
    print(f"Tempo total: {fim - inicio:.2f} segundos")

# apenas para evitar ser chamado quando importado por outras bibliotecas.
# o if garante que o chamar_rotas() só será executado se o arquivo for chamado diretamente
if __name__ == "__main__":
    chamar_rotas()
