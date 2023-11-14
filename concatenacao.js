/*
// Seção de Declarações das variáveis
   nome: caractere
   numero: real

inicio
// Seção de Comandos, procedimentos, funções, operadores, etc...
   escreval("digite o nome: ")
   leia(nome)
   escreval("Digite o número: ")
   leia(numero)
   
   escreval(nome, " : ", numero, 15)
   */
  var nome, numero

  nome = prompt("Digite o seu nome: ")
  numero = ("digite o seu numero: ")

  document.getElementById("paragrafo").innerText = nome + " : " + numero 