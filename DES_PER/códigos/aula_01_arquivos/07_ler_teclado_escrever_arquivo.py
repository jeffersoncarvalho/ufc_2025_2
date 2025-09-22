#leia do teclado e escreva cada linha em arquivo de saída

with open("./arquivos/07_saida_teclado.txt","a",encoding="utf-8") as file:
    linha = input("Digite algo: ")
    while linha:
        file.write(linha.strip() + "\n")
        linha = input("Digite algo: ")
