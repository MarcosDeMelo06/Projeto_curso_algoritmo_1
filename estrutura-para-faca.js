/*
// seção de Declarações das variavéis
   numero, fatorial, contador: inteiro

inicio
// Seção de comandos, procediment, funções, operadores, etc...
   escreva("Digite o numero para calcular o fatorial.")
   leia(numero)
   fatorial := 1
   para contador de 1 ate numero faca
      fatorial := fatorial * contador 
   fimpara 
   escreva("O fatorial de ", numero, " é ", fatorial)
   */

function acaoBotao() {
    var numero, fatorial, contador
    numero = prompt("Digite o numero para calcular o fatorial.")
    fatorial = 1  
    for (contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
    }