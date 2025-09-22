"""
Exercício 3: Filtragem de Dados
Usando a Series de notas do exercício anterior, filtre e imprima apenas as notas que são maiores que 8.0.

Dica: A filtragem é feita usando uma condição booleana, como minha_series > 8.0.

"""

import pandas as pd

notas = pd.Series([8.5, 7, 9.2], index = ["Matemática", "Física", "Química"])
notas_maior_que_8 = notas[notas > 8]
#notas = notas.add(0.5)
print(notas_maior_que_8)