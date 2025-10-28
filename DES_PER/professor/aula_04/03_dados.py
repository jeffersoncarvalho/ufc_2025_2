#imprimir: 
#O texto do <title>
#O conteúdo da <meta name="description"> (atributo content)

from bs4 import BeautifulSoup

with open("03_dados.html", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

#title = soup.title.string if soup.title else ""

meta = soup.find("meta", attrs={"name": "description"})
description = meta["content"]

#description = meta["content"] if meta and meta.has_attr("content") else ""

print("Título:", soup.title)
print("Título:", soup.title.string)

print("Descrição:", description)
