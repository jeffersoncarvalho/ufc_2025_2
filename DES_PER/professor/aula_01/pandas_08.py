"""
Exercício 5: Conversão de Tipos
Crie uma Series com os seguintes dados: ['10', '20', '30', '40']. Os elementos estão como strings.

Converta o tipo de dado da Series para numérico (inteiro ou float) e calcule a média dos valores.

Dica: O método .astype() é muito útil para a conversão de tipos de dados.

"""
import pandas as pd

series = pd.Series(['10', '20', '30', '40'])
series = series.astype("int64")
print(series.mean())


