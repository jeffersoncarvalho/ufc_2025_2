# Extrair a tabela #alunos e gerar uma lista de dicionários:

#import csv
from bs4 import BeautifulSoup

with open("05_dados.html", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

table = soup.find("table", attrs={"id": "alunos"})
#table = soup.find("table", id="alunos")
#print(table)

rows = table.find_all("tr")
media = 0.0
contador = 0

for row in rows:
    tds = row.find_all("td")
    for td in tds:
        if td.attrs.get("class") and td.attrs.get("class")[0] == "nota":
            print(float(td.get_text()))
            media = media + float(td.get_text())
            contador = contador + 1

media = media / contador
print("Média: ", media)