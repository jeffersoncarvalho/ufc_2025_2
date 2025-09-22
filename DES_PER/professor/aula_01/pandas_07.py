"""
Exercício 4: Adicionando e Removendo Elementos
Crie uma Series com a população de três cidades:

São Paulo: 12.3 milhões

Rio de Janeiro: 6.7 milhões

Salvador: 2.9 milhões

Adicione a cidade de Belo Horizonte com 2.5 milhões de habitantes e remova a cidade de Salvador. Imprima a Series final.

Dica: Você pode usar o método .loc ou simplesmente atribuir um novo valor a uma nova chave para adicionar um item. Para remover, use o método .drop().

"""
import pandas as pd

cidades = pd.Series([12.3, 6.7, 2.9], index = ["São Paulo", "Rio de Janeiro", "Salvador"])
print(cidades)
nova_cidades = cidades.drop("Salvador")
print(nova_cidades)
#nova_cidades["Belo Horizonte"] = 2.5
#print(nova_cidades)
nova_cidades.loc["Belo Horizonte"] = 2.5
print(nova_cidades)
