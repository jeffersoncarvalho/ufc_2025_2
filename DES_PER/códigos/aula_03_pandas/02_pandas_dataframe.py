import pandas as pd

dados = {
    "Nome": ["Ana","Bruno","Carlos","Diana"],
    "Idade": [23,35,45,29],
    "Cidade": ["São Paulo","Fortaleza","Rio de Janeiro","Cuiabá"]
}

#criando series a partir de um dicionário
#print(dados["Nome"])
#nome_series = pd.Series(dados["Nome"]) 
#print(nome_series)

#criando o dataframe
df = pd.DataFrame(dados)
#print(df)
#print(type(df))
#print(type(df).__name__)

#criando uma series a partir de uma coluna do dataframe
series = pd.Series(df["Idade"])
print(series)
print("Maior idade: ", df["Idade"].max())
print("Menor idade: ", df["Idade"].min())