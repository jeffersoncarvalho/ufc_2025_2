import httpx

URL = "http://127.0.0.1:8000"

def chamar_rota():

    resp_sinc = httpx.get(f"{URL}/sinc")
    print("RESP SINC: ", resp_sinc.json())

chamar_rota()