# calcular a média dos preços

from bs4 import BeautifulSoup

with open("06_dados.html", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

divs = soup.find_all("div")

soma = 0
contador = 0

for div in divs:
    preco = div.select_one(".price").get_text()
    soma = soma + float(preco)
    contador = contador + 1

media = soma / contador
print("Média: ",media)
