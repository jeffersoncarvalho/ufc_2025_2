import requests
from bs4 import BeautifulSoup

with open("beautiful_02.html", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

#print(soup.prettify())
#print(soup.title.name)
print(soup.title.get_text())
print(soup.title.string)

print(soup.p)
print(soup.p["class"])

for link in soup.find_all("a"):
    print(link)