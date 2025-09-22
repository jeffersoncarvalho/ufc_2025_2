import pandas as pd
#pip install numpy
import numpy as np

np_array = np.array([10,20,30])
#print(np_array[2])
series = pd.Series(np_array, index = ["A","B","C"])
print(series["B"])