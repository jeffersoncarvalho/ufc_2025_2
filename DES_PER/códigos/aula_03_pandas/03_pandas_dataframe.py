import pandas as pd

df = pd.read_csv("./arquivos/alunos.csv")
#print(df)
#print(df.describe())
#print(df.head(2))

#retorne um dataframe apenas com os alunos cuja nota > 7
series_bool_aprovados = df["Nota"] > 7
aprovados = df[series_bool_aprovados]
#print(aprovados)

notas_organizadas = df.sort_values("Nota", ascending=False)
#print(notas_organizadas)

