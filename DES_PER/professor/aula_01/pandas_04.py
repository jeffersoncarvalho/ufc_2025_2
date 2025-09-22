# O pandas.Series é uma estrutura de dados de uma dimensão muito poderosa, 
#semelhante a um array, mas com um índice associado. 
#Ele é fundamental para a manipulação de dados em Python.

"""
Exercício 1: Criação e Acesso
Crie uma Series chamada precos_frutas com os preços de três frutas:

Maçã: 2.50

Banana: 1.80

Laranja: 3.20

Depois, imprima o preço da laranja usando a chave (o nome da fruta) e a posição.

"""

import pandas as pd

precos_frutas = pd.Series([2.5,1.8,3.2], index = ["Maça", "Banana", "Laranja"])
print(precos_frutas["Laranja"])
print(precos_frutas[2])