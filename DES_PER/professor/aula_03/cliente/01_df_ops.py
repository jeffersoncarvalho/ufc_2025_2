import pandas as pd

df = pd.DataFrame({
    "id": [1,2,3],
    "nome": ["Clara", "Ana", "Bela"],
    "nota": [4.5, 8.9, 7.8]
})

#=== para retornar 'json'
#print(df)
#df = df[df["id"] == 3]
#dic = df.to_dict(orient = "records")
#print(dic)

#=== testando conseguir um objeto via id
#cria um filtro
#print(df["id"] == 3)
#print(type(df["id"] == 3))
#retorna um DataFrame que representa a linha cujo id = 3
#print(df[df["id"] == 3])
#retorna uma Series apenas com a coluna "nome" e id=3 
#print((df[df["id"] == 3])["nome"])
#retorna apenas a string nome
#print(((df[df["id"] == 3])["nome"]).iloc[0])

#outras formas:

#com query
#print(df.query("id == 3")["nome"].iloc[0])

#com loc
#print(df.loc[df["id"] == 3, "nome"].iloc[0])

## === teste de atualização
#aluno_idx = df.index[df["id"] == 1]
#print(aluno_idx)
#print(type(aluno_idx))
#print(aluno_idx[0])
#print(type(df.loc[ aluno_idx, ["nome", "nota"]]))
#print(df.loc[ aluno_idx, ["nome", "nota"]])

#df.loc[ aluno_idx, ["nome", "nota"]] = ["TESTE TESTE", 10.0]
#print(df)
#print(df.loc[aluno_idx].to_dict(orient = "records")[0])

aluno_idx = df.index[df["id"] == 1]
print(df.drop(aluno_idx).reset_index(drop=True))