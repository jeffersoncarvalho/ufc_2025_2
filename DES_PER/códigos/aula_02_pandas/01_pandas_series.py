import pandas as pd

# Série não rotulada (com labels)
#notas = pd.Series([7.5, 4.6, 9.2, 5.5])

notas = pd.Series([7.5, 4.6, 9.2, 5.5],
                  index = ["João","Marcelo","Maria","Thaís"])
#depreciado (deprecated)
#print(notas[2])
#forma atual
#print(notas.iloc[2])
#forma pelo label
try:
    print(notas["Marcelo"])
except KeyError as e:
    print("Ocorreu uma exceção: ", type(e).__name__)