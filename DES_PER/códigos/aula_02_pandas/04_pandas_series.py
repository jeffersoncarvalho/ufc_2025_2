"""
Exercício 01

Crie uma Series chamada preco_frutas com o preço de três frutas:

Maça: 2.50
Banana: 5.60
Abacate: 6.30

Imprima o preço da Banana usando a chave. 
Depois, imprima o mesmo preço, usando o series.iloc[pos] 

"""

import pandas as pd

preco_frutas = pd.Series([2.5, 5.6, 6.3], index = ["Maça","Banana","Abacate"])
print(preco_frutas["Banana"])
print(preco_frutas.iloc[1])
