import pandas as pd

dados = {
    "nome": ["Ana", "Bruno", "Carla", "Daniel"],
    "curso": ["Matemática", "História", "Física", "Matemática"],
    "nota": [8.5, 7.0, 9.2, 6.8]
}

df = pd.DataFrame(dados)
print(df[df["nota"] > 8])
print(df.groupby("curso")["nota"].mean())
