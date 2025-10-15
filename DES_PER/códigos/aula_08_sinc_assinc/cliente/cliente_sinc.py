import httpx
import time

URL = "http://127.0.0.1:8000"

def chamar_rota():

    inicio = time.time()
    
    resp_sinc = httpx.get(f"{URL}/sinc")
    print("RESP SINC: ", resp_sinc.json())

    resp_assinc = httpx.get(f"{URL}/assinc")
    print("RESP SINC: ", resp_assinc.json())

    fim = time.time()

    print(f"Tempo total: {fim-inicio:.2f} segundos")
if __name__ == "__main__":
    chamar_rota()