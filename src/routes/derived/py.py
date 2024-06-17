## INSTALAÇÃO DE PACOTES
# pip install pandas
# pip install matplotlib
#####

## IMPORTAÇÃO DE PACOTES
import os
import pandas
import matplotlib.pyplot as pyplot
#####

pasta = os.path.dirname(__file__)  ## PASTA ATUAL

dados = pandas.read_csv(pasta + "/csv.csv", sep=";")  ## LEITURA DOS DADOS

## FUNÇÃO PARA EXIBIR OS RÓTULOS DENTRO DAS BARRAS
def rotulos(parX, parY):
    for i in range(len(parX)):
        pyplot.text(
            parY[i] / 2,
            parX[i],
            parY[i],
            fontsize=12,
            color="white",
            weight="bold",
            ha="center",
            va="center",
        )
#####

## MONTAGEM DO GRÁFICO
pyplot.style.use("ggplot")  ## print(pyplot.style.available)
pyplot.figure(figsize=(9, 3))
pyplot.barh(y=dados["produto"], width=dados["comercializacao"])
rotulos(dados["produto"], dados["comercializacao"])
pyplot.title("GRÁFICO DE BARRAS HORIZONTAIS:", fontsize=13, weight="bold", pad=10)
pyplot.xticks(fontsize=13)
pyplot.yticks(fontsize=13)
pyplot.ylabel("PRODUTO", fontsize=13, weight="bold")
pyplot.xlabel("VALOR (EM BILHÕES DE DÓLARES)", fontsize=13, weight="bold")
pyplot.tight_layout()
#####

pyplot.savefig(pasta + "/image.png", transparent=True)  ## SALVA O GRÁFICO EM UM ARQUIVO
pyplot.show()  ## EXIBE O GRÁFICO NA TELA
