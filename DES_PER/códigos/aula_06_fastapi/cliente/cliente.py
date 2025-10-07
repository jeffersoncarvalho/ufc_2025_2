#pip install httpx
import httpx

BASE_URL = "http://127.0.0.1:8000"

def criar_aluno():
    resp = httpx.post(
        f"{BASE_URL}/alunos",
        json = {"nome":"Beltrano","curso":"CC","IRA":7.6}
    )
    #print(resp.json()["mensagem"])
    #print(resp.json()["aluno"]["nome"])

def listar_alunos():
    resp = httpx.get(f"{BASE_URL}/alunos")
    print(resp.json())

def obter_aluno(id):
    resp = httpx.get(f"{BASE_URL}/alunos/{id}")
    #print(resp.json())
    return resp.json()
#execuçao
#criar_aluno()
#criar_aluno()
#criar_aluno()
#listar_alunos()
print(obter_aluno(2).get("nota"))
