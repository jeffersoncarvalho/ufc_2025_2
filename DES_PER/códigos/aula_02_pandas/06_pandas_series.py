"""
Filtragem de dados

Use a mesma Series do 05_pandas_series.py, imprimindo apenas as notas que
são maiores que 7.0

Dica: para filtrar uma Series use: "nome_series <operador> valor" como 
índice do colchetes da series original (nome_series)

"""
import pandas as pd
notas = pd.Series([9.3, 7.4, 5.6], index=["Matemática", "Biologia", "Geografia"]) 
notas = notas[notas > 7]
print(notas)