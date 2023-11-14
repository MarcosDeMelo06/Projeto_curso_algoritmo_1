/*
valor01, valor02, resultado: real
operacao: caractere

inicio
// Seção de comandos, procedimento, funções, operadores, etc...
// Escreva("A proposta desse programa é calcular dois valores baseado na operação da sua escolha") 
escreva("A proposta desse programa é calcular dois valores")
escreva("Digite o primeiro valor: ")
leia(valor01)
escreva("Digite a operação: Ex: + , - , * , /")
leia(operacao)
escreva("Digite o segundo valor: ")
leia(valor02)

se operacao = "+" entao
resultado := valor01 + valor02
senao
se operacao = "-" entao
resultado := valor01 - valor02
senao
se operacao = "*" valor01 * valor02
resultado := valor01 * valor02
senao
se operacao = "/" entao
resultado := valor01 / valor02
fimse
fimse
fimse
escreva("Resultado do calculo é: ", resultado)
*/

function acaoBotao() {
var valor01, valor02, resultado, operacao
valor01 = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite a operação: Ex: + , - , * , /")
valor02 = prompt("Digite o segundo valor: ") 
switch (operacao) {
    case "+":
        resultado = parseInt( valor01 ) + parseInt( valor02 )
        break;
    case "-":
        resultado = parseInt( valor01 ) - parseInt( valor02 )
        break;
    case "*":
        resultado = parseInt( valor01 ) * parseInt( valor02 )
         break;
    case "/":
        resultado = parseInt( valor01 ) / parseInt( valor02 )
        break;

}

if ( operacao == "+" ){
    resultado = parseInt ( valor01 ) + parseInt( valor02 )
}else if (operacao == "-"){
    resultado = parseInt ( valor01 ) - parseInt( valor02 )
}else if (operacao == "*"){
    resultado = parseInt ( valor01 ) * parseInt( valor02 )
}else if (operacao == "/"){
    resultado = parseInt ( valor01 ) / parseInt( valor02 )
}
document.getElementById("paragrafo").innerText = resultado
}
