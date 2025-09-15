import pandas as pd

df = pd.read_csv("C:\CSV\international-trade-june-2025-quarter\output_csv_full.csv")
#print(df["value"].mean())
df.to_parquet("C:\CSV\international-trade-june-2025-quarter\output_csv_full.parquet", index=False)