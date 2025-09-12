import sys

with open("./arquivos/03_teclado_saida.txt","w") as file:
    for linha in sys.stdin:
        file.write(linha)