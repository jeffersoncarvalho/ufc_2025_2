import pandas as pd

ser1 = pd.Series([1,2,3], index = ["A","B","C"])
ser2 = pd.Series([4,5,6], index = ["A","B","C"])

ser1_ser2 = ser1.add(ser2)
print(ser1_ser2)