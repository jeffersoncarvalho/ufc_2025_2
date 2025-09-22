import pandas as pd

df = pd.read_csv("./arquivos/alunos.csv")
print(df.head(2))

print(df.describe())

print("Média das notas: ", df["Nota"].mean())
print("Maior idade: ", df["Idade"].max())

aprovados = df[df["Nota"] > 7]
print("Aprovados: \n", aprovados)

print(df.sort_values("Nota", ascending=True))

#criando uma nova coluna

def situacao(nota):
    if nota > 7:
        return "Aprovado"
    else:
        return "Reprovado"

#df["Situação"] = df["Nota"].apply(lambda x: "Reprovado" if x < 7 else "Aprovado")
df["Situação"] = df["Nota"].apply(situacao)
print(df)

"""
Exercícios Práticos

Carregue o arquivo alunos.csv em um DataFrame.

Mostre apenas a coluna Nome.

Selecione todos os alunos com idade maior que 30.

Calcule a média das notas.

Crie uma nova coluna chamada "Classificação" com os valores:

"Excelente" se nota >= 9

"Boa" se 7 <= nota < 9

"Regular" caso contrário.

Salve o novo DataFrame em um arquivo resultado.csv.

"""
