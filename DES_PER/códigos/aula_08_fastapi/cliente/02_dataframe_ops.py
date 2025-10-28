import pandas as pd

alunos_df = pd.DataFrame(
    {
        "id": [1,2,3,4,5,6],
        "nome": ["Jefferson", "Wladimir", "Fábio", "Jefferson", "Wladimir", "Fábio"],
        "curso": ["SI", "CC", "ES", "SI", "CC", "ES"],
        "nota": [6.7, 8.3, 3.2, 6.7, 8.3, 3.2]
    }
)

#print(alunos_df)
#print("========")
#print(alunos_df.to_dict(orient="records"))
#print(alunos_df.to_dict(orient="records")[0].get("nota"))

#obtendo o aluno de id = 2
#print(type(alunos_df["id"] == 2))
#filtro = alunos_df["id"] == 2
#print(alunos_df[filtro])
#print(type(alunos_df[filtro]))
#print(alunos_df[filtro]["nome"].iloc[0])

a_idx = alunos_df.index[ alunos_df["id"] == 2 ]
#print(alunos_df[alunos_df["id"] == 2])
#print(a_idx)
#print(type(a_idx))

#alunos_df.loc[a_idx, ["nota","nome"]] = [8, "Wladimir Tavares"]
#print(alunos_df)
#print(alunos_df.loc[a_idx].to_dict(orient="records")[0])

print(alunos_df.drop(a_idx).reset_index(drop=True))