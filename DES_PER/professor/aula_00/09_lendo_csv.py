import pandas as pd

# Lendo o arquivo CSV
df = pd.read_csv("./arquivos/alunos.csv")

# Mostrando o conteúdo do DataFrame
print("Conteúdo do CSV:")
print(df)

# Acessando apenas a coluna "nota"
print("\nNotas:")
print(df["nota"])

# Calculando a média das notas
media = df["nota"].mean()
print("\nMédia das notas:", media)

#exercícios:
#1. Ler o arquivo e exibir apenas a coluna nome.

#👉 Dica: use df["nome"].

#2. Mostrar apenas os alunos com nota maior ou igual a 8.0.

#👉 Dica: use um filtro df[df["nota"] >= 8].

#3. Calcular a média das notas de todos os alunos.

#👉 Dica: df["nota"].mean().

#4. Exibir apenas os alunos do curso Matemática.

#👉 Dica: df[df["curso"] == "Matemática"]
