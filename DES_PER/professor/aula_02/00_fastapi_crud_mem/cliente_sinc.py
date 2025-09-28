import httpx
import time

BASE_URL = "http://127.0.0.1:8000"

def criar_aluno():
    resp = httpx.post(f"{BASE_URL}/alunos", json={"nome": "Ana", "curso": "Engenharia", "nota": 8.7})
    print(resp.json())

def listar_alunos():
    resp = httpx.get(f"{BASE_URL}/alunos")
    print(resp.json())

inicio = time.time()
criar_aluno()
criar_aluno()
listar_alunos()
fim = time.time()
print("Diferença: ", (fim - inicio))