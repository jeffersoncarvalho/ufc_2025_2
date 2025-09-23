"""
Conversão de tipos

Crie uma Series com os seguintes dados:

["10","20","30","40","50"]

Converta o tipo de dado da Series para numérico (int32).
Calcule a média dos valores.

Dica: use o método Series.astype("int32") para converter todos os elementos.

"""
import pandas as pd

series = pd.Series(["10","20","30","40","50"])
#print(type(series))
series = series.astype("int32")
media = series.mean()
print("Média: ", media)