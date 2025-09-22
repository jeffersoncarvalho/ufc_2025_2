import pandas as pd 

series1 = pd.Series([1,2,3])
series2 = pd.Series([4,5,6])

soma_series = series1.add(series2)
print(soma_series)
