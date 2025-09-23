"""
Fazendo uso do arquivo alunos.csv como um Dataframe, faça:

1 - Descubra a nota máxima e quem (print) é o aluno com a nota máxima.
2 - Descubra a média das notas e imprima apenas os alunos acima da média

"""

import pandas as pd

alunos_df = pd.read_csv("./arquivos/alunos.csv")

#ALUNO COM A NOTA MÁXIMA

nota_maxima = alunos_df["Nota"].max()
print("Nota máxima: ", nota_maxima)

#print(alunos_df["Nota"] == nota_maxima)
alunos_nota_maxima = alunos_df[alunos_df["Nota"] == nota_maxima]
print(alunos_nota_maxima["Nome"])

#ALUNOS ACIMA DA MÉDIA
print("###########################################")
media_notas = round(alunos_df["Nota"].mean(), 2)
print("Média geral: ", media_notas)

#print(alunos_df["Nota"] > media_notas)
print(alunos_df[alunos_df["Nota"] > media_notas])


