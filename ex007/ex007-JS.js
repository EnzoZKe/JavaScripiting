var result = document.getElementById("score")
var ponto_pega = 0

var result2 = document.getElementById("score2")
var ponto_pega2 = 0

function clica(valor) {
    ponto_pega += valor
    result.innerHTML = ponto_pega
}


function clica2(valor) {
    ponto_pega2 += valor
    result2.innerHTML = ponto_pega2
}
