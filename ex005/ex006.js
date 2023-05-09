
//setar variaveis
var valor1_take = document.getElementById("va1")
var valor2_take = document.getElementById("va2")
var result = document.getElementById("resultados")


//função da variavel
function Calcu() {
    var valor1 = Number(valor1_take.value)
    var valor2 = Number(valor2_take.value)

    var soma = valor1 + valor2
    var Subtracao = valor1 - valor2
    var Multiplicacao = valor1 * valor2
    var Divisao = valor1 / valor2
    var Resto = valor1 % valor2
    var Exponenciacao = valor1 ** valor2


//resultados
    result.innerHTML = `
    
    ${valor1} + ${valor2} = ${soma} <br>
    ${valor1} - ${valor2} = ${Subtracao} <br>
    ${valor1} * ${valor2} = ${Multiplicacao} <br>
    ${valor1} / ${valor2} = ${Divisao} <br>
    ${valor1} % ${valor2} = ${Resto} <br>
    ${valor1} ** ${valor2} = ${Exponenciacao} <br>`

}
