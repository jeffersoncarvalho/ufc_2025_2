import httpx
import time

BASE_URL = "http://127.0.0.1:8000"

def criar_aluno():
    resp = httpx.post(f"{BASE_URL}/alunos", json={"nome": "Ana", "curso": "Engenharia", "nota": 8.7})
    print(resp.json())

def listar_alunos():
    resp = httpx.get(f"{BASE_URL}/alunos")
    print(resp.json())

def obter_aluno(id):
    resp = httpx.get(f"{BASE_URL}/alunos/{id}")
    print(resp.json())

def atualizar_aluno(id, aluno):
    resp = httpx.put(
            f"{BASE_URL}/alunos/{id}",
            json={"nome": aluno.get("nome"), "curso": aluno.get("curso"), "nota": aluno.get("nota")}
        )
    print(resp.json().get("aluno"))

def apagar_aluno(id):
    resp = httpx.delete(f"{BASE_URL}/alunos/{id}")
    print(resp.json())

#obter_aluno(2)
#atualizar_aluno(1, {"nome": "TESTE", "curso": "TESTE CURSO", "nota": 0})
apagar_aluno(2)

#inicio = time.time()
#criar_aluno()
#criar_aluno()
#listar_alunos()
#fim = time.time()
#print("Diferença: ", (fim - inicio))