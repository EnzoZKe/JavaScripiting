var resultados = document.getElementById("resultado")
var Input = document.getElementById("numCalc")

function calcular() {
    var valor = Number(Input.value)

    var dobro = valor * 2
    var metade = valor / 2

    resultados.innerHTML += `o dobro de ${valor} é <strong>${dobro}</strong> e a metade é <strong>${metade}</strong><br>`
}

function resetNum() {
    document.getElementById("myReset").reset();
}