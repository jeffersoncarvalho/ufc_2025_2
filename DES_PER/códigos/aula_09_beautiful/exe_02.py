# contar quais sãos os links absolutos (começam com http...)
# contar quais são os relativos (internos inclusos)

from bs4 import BeautifulSoup

with open("exe_02.html", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

links = soup.find_all("a")
absoluto = relativo = 0

for link in links:
    #print(type(link["href"]))
    if link["href"].startswith("http") or link["href"].startswith("https"):
        absoluto += 1
    else:
        relativo += 1

print(f"Absolutos: {absoluto}, Relativo: {relativo}")
    