# Mostrar todos os links com texto e href.
# Contar quantos são links absolutos (começam com http/https) e quantos são relativos.

from bs4 import BeautifulSoup

with open("04_dados.html", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

links = soup.find_all("a")
absolutos = relativos = 0

for a in links:
    href = a.get("href")
    print(a.get_text())
    print(href)
    if href.startswith("http://") or href.startswith("https://"):
        absolutos += 1
    else:
        relativos += 1

print("Absolutos:", absolutos)
print("Relativos:", relativos)