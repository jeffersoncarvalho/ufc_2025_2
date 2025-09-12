with open("./arquivos/00_arquivo.txt", encoding="utf-8") as file:
#with open("./arquivos/00_arquivo.txt", encoding="utf-8") as file:
    linha = file.readline()

    while(linha):
        print(linha.strip())
        linha = file.readline()