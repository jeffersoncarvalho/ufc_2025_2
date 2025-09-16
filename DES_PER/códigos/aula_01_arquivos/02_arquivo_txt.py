with open("./arquivos/02_alunos.txt","r") as file:
    linha = file.readline()
    #print(linha)
    while(linha):
        #strip() apara as arestas da string 'linha'
        print(linha.strip())
        linha = file.readline()