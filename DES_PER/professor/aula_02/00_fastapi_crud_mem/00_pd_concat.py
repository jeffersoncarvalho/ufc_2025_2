import pandas as pd

#FORMA 01
#aluno = {"nome": ["Teste Jeff"], "curso": ["Curso Jeff"], "IRA": [9.5]}
#df = pd.DataFrame(aluno)

#banco_df = pd.read_csv("alunos.csv")
#banco_df = pd.concat([banco_df, df], ignore_index = True)
#banco_df.to_csv("alunos.csv", index = False)

#FORMA 02
#aluno = {"nome": "Teste Jeff", "curso": "Curso Jeff", "IRA": 9.5}
#df = pd.DataFrame([aluno])

#banco_df = pd.read_csv("alunos.csv")
#banco_df = pd.concat([banco_df, df], ignore_index = True)
#banco_df.to_csv("alunos.csv", index = False)

#FORMA 03
aluno = {"nome": "Teste Jeff", "curso": "Curso Jeff", "IRA": 9.5}
banco_df = pd.read_csv("alunos.csv")
banco_df = banco_df._append(aluno, ignore_index = True)
banco_df.to_csv("alunos.csv", index = False)

