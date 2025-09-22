"""
Exercício 2: Operações Matemáticas
Crie uma Series com as notas de um aluno em três disciplinas:

Matemática: 8.5

Física: 7.0

Química: 9.2

Em seguida, adicione 0.5 a todas as notas e imprima a nova Series.

"""
import pandas as pd

notas = pd.Series([8.5, 7, 9.2], index = ["Matemática", "Física", "Química"])
notas = notas.add([0.5, 0.5, 0.5])
#notas = notas.add(0.5)
print(notas)