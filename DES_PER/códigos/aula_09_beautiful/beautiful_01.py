#pip install bs4
import requests
from bs4 import BeautifulSoup

with open("beautiful_01.html", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

#response = requests.get("https://beautiful-soup-4.readthedocs.io/en/latest/#quick-start")
#soup = BeautifulSoup(response.content, "html.parser")

#print("Title: ", soup.title)
#print("Title: ", soup.title.get_text())

headers = soup.find_all("h2", {"class":"teste","id":"01"})
for h in headers:
    print(h.get_text())
#print(headers)