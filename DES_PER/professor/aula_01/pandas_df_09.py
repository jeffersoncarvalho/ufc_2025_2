# DataFrame → Uma tabela (tipo uma planilha do Excel).
import pandas as pd

dados = {
    "Nome": ["Ana", "Bruno", "Carlos", "Diana"],
    "Idade": [23, 35, 45, 29],
    "Cidade": ["São Paulo", "Rio", "Belo Horizonte", "Curitiba"]
}

nomes = pd.Series(dados["Nome"])
print(nomes)

df = pd.DataFrame(dados)
print(df)
nomes = pd.Series(df["Nome"])
print(nomes)
print(df[["Nome","Idade"]])
