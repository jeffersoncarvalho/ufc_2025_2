import numpy as np
import pandas as pd

np_array = np.array([10,20,30,40,50])
series = pd.Series(np_array, index = ["A","B","C","D","E"])

print(series)