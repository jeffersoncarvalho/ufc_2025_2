#pip install pandas pyarrow
import pandas as pd

# Criando o DataFrame
dados = {
    "nome": ["Ana", "Bruno", "Carla"],
    "curso": ["Matemática", "História", "Física"],
    "nota": [8.5, 7.0, 9.2]
}

df = pd.DataFrame(dados)

# --- Salvando em CSV ---
df.to_csv("alunos.csv", index=False)

# --- Salvando em Parquet ---
df.to_parquet("alunos.parquet", index=False)

# --- Lendo os arquivos ---
df_csv = pd.read_csv("alunos.csv")
df_parquet = pd.read_parquet("alunos.parquet")

print("CSV:")
print(df_csv)

print("\nParquet:")
print(df_parquet)
