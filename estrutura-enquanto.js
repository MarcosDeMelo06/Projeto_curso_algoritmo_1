/*
nome: caractere
idade, limite, contador: inteiro

inico
// Seçao de Comaandos, procedimento, funções, operadores, etc...
escreva("Digite a quantidade de vezes que vai ser verificado a idade: ")
leia( limite)
contador := 0
enquanto contador < limite faca
escreva("Digite o nome da pessoa: ")
leia(nome)
escreva("Digite a idade do ", nome, ": ")
leia(idade)
se idade > 18 entao
    escreval(nome, " voce é maior de idade!")
senao
    escreval(nome, " voce é menor de idade!")
    fimse
    contador := contador + 1
    fimenquanto
    */

    
function acaoBotao() {
var nome, idade, limite, contador 
limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
contador = 0
while(contador < limite){
     nome = prompt("Digite o nome da pessoa: ")
     idade = prompt("Digite a idade do " + nome)
     if ( idade > 18 )
        document.getElementById("paragrafo").innerText = nome + " você é maior de idade!"
        document.getElementById("paragrafo").innerText = nome + " você é menor de idade!"
    contador++
    }
}    