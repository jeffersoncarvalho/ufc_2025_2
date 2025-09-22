#pip install pandas pyarrow
#importando o pandas como 'pd'
import pandas as pd 

#criar o dataframe
dados = {
    "nome": ["Ana","Bruno","Carla"],
    "curso": ["Matemática","História","Física"],
    "nota": [8.5, 7, 9.2]
}

#gerando o dataframe
alunos_df = pd.DataFrame(dados)

#print(alunos_df["nota"].mean())
#print(alunos_df[alunos_df["nota"] > 8])

alunos_df.to_csv("./arquivos/alunos.csv")
alunos_df.to_parquet("./arquivos/alunos.parquet")
