import requests
from bs4 import BeautifulSoup

# URL da página que queremos fazer o scraping
#url = "https://www.exemplo.com/artigos"

# Fazer a requisição HTTP para obter o conteúdo da página
#response = requests.get(url)

# Verificar se a requisição foi bem-sucedida
#if response.status_code == 200:
    # Criar o objeto BeautifulSoup para parsear o HTML
 #   soup = BeautifulSoup(response.content, 'html.parser')

with open("01_dados.html") as file:
    soup = BeautifulSoup(file,"html.parser")

# Encontrar todos os elementos que contêm os títulos dos artigos
# Supondo que cada título de artigo está em uma tag <h2> com a classe "title"
titles = soup.find_all('h2', class_='title')

# Iterar sobre cada título e exibir o texto
for title in titles:
    print(title.get_text())
