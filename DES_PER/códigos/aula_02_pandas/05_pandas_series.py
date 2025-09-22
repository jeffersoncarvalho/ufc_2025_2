"""

Crie uma Series com as seguintes notas do aluno:

Matemática: 9.3
Biologia: 7.4
Geografia: 5.6

Em seguida, você deve ADICIONAR 0.5 a TODAS as notas de um única vez.
Imprima a nova Series.

Dica: para somar numa Series, use a função Series.add(valor).
Lembre-se: essa operação NÃO modifica a Series original e sim
gera uma nova.

"""
import pandas as pd

notas = pd.Series([9.3, 7.4, 5.6], index=["Matemática", "Biologia", "Geografia"])
#notas = notas.add([0.5, 0.1, 0.4])
notas = notas.add(0.5)
print(notas)
