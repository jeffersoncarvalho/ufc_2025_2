#pip install httpx
import httpx

BASE_URL = "http://127.0.0.1:8000"

def criar_aluno(aluno):
    resp = httpx.post(
        f"{BASE_URL}/alunos",
        json = {"nome":aluno.get("nome"),"curso":aluno.get("curso"),"IRA":aluno.get("IRA")}
    )
    return resp
    #print(resp.json()["mensagem"])
    #print(resp.json()["aluno"]["nome"])

def listar_alunos():
    resp = httpx.get(f"{BASE_URL}/alunos")
    print(resp.json())

def obter_aluno(id):
    resp = httpx.get(f"{BASE_URL}/alunos/{id}")
    #print(resp.json())
    return resp.json()

def atualizar_aluno(id, aluno):
    resp = httpx.put(
        f"{BASE_URL}/alunos/{id}",
        json = {"nome": aluno.get("nome"), "curso": aluno.get("curso"), "IRA": aluno.get("IRA")}
    )
    print(resp.json())

def apagar_aluno(id):
    resp = httpx.delete(f"{BASE_URL}/alunos/{id}")
    return resp.json()

#execuçao
#criar_aluno()
#criar_aluno()
#criar_aluno()
#listar_alunos()
#print(obter_aluno(2))
#print(criar_aluno({"nome":"Sicrano", "curso": "Curso Teste", "IRA": 10}))
#listar_alunos()
#atualizar_aluno(2, {"nome":"Sicrano", "curso": "Curso Teste", "IRA": 10})
#print(r.get)
#listar_alunos
apagar_aluno(2)
print("----------")
listar_alunos()