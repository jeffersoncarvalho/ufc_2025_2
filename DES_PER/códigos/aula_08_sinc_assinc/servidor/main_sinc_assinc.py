#uvicorn main_sinc_assinc:app --reload
from fastapi import FastAPI

app = FastAPI()

@app.get("/sinc")
def rota_sincrona():
    return {"tipo": "SÍNCRONA"}