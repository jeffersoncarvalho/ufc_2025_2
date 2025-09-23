"""
Crie um DataFrame com os seguintes dados:

Nome	Idade	Cidade
Ana	    23	    São Paulo
Bruno	30	    Rio de Janeiro
Carlos	27	    Curitiba
Diana	22	    Belo Horizonte

- Exibir apenas a coluna "Nome"
- Exibir as colunas "Nome" e "Cidade"

"""
import pandas as pd

pessoas_df = pd.read_csv("./arquivos/pessoas.csv")
print(type(pessoas_df[["Nome"]]))
print(type(pessoas_df[["Nome","Cidade"]]))
#print(pessoas_df)
