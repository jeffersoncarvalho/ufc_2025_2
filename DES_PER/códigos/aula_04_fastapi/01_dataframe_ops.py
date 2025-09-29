import pandas as pd

#caso 1 - erro na formatação esperada!
#alunos_dic = {
#    "nome" : "Jefferson",
#    "curso" : "SI",
#    "IRA" : 4.5
#}

#Isso gera um erro, pois alunos_dic não está formatado como esperado!
#alunos_df = pd.DataFrame(alunos_dic)
#print(alunos_df)

#caso 2 - formatando o objeto de entrada
#problema: o dev terá que alterar dos dados diretamente!
#alunos_dic = {
#    "nome" : ["Jefferson"],
#    "curso" : ["SI"],
#    "IRA" : [4.5]
#}
#alunos_df = pd.DataFrame(alunos_dic)
#print(alunos_df)

#caso 3 - alterando todo o objeto de uma vez!
alunos_dic = {
    "nome" : "Wladimir Tavares",
    "curso" : "CC",
    "IRA" : 7.8
}

# alunos_dic "transformado" em Dataframe
#alunos_df = pd.DataFrame([alunos_dic])
#print(alunos_df)

##================================================
#persistindo a bade de dados
#alunos_csv = pd.read_csv("alunos.csv")
#print(alunos_csv)

#Problema: persistir o alunos_dic em alunos_csv

#solução 1 - concatenando dois DataFrames!

#concat recebe uma lista de DataFrames!
#alunos_csv = pd.concat([alunos_csv, alunos_df], ignore_index = True)
#print(alunos_csv)
#alunos_csv.to_csv("alunos.csv", index = False)
##================================================
## outra solução para persistir em csv
alunos_csv = pd.read_csv("alunos.csv")
#print(alunos_csv)

#Problema: persistir o alunos_dic em alunos_csv

#solução 2 - "apendando" o objeto no Dataframe!

#append um novo objeto (linha) ao Dataframe original!
alunos_csv = alunos_csv._append(alunos_dic, ignore_index = True)
print(alunos_csv)
alunos_csv.to_csv("alunos.csv", index = False)