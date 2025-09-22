#Series -> uma coluna (array rotulado)
import pandas as pd

s = pd.Series([10,20,30,40,50], index=["A","B","C","D","E"])
#s = pd.Series([10,20,30,40,50])
print(s)
print(s["A"])
print(s.mean())

try:
    print(s["AB"])
except Exception as e:
    print("Você entrou com um índice inválido!")
    print("Exception: ", type(e).__name__)
