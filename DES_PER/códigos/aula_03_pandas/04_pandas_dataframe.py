import pandas as pd

alunos_df = pd.read_csv("./arquivos/alunos.csv")

#criar uma nova coluna chamada "Situação"
#na coluna "Situação", você deve cacular se o aluno foi aprovado
#ou não (nota > 7). Se sim, a coluna deve ter valor "Aprovado".
#Caso contrário, a coluna deve ter o valor "Reprovado"

def situacao_aluno(nota):
    if nota > 7:
        return "Aprovado"
    elif nota < 4:
        return "Reprovado"
    else:
        return "Recuperação"

alunos_df["Situação"] = alunos_df["Nota"].apply(situacao_aluno)
print(alunos_df)

#modifique a função para que agora crie:
# A situação "Aprovado", caso nota > 7
# A situação "Reprovado", caso nota < 4
# A situação "Recuperação", caso contrário
