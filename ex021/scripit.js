
var mediaa = 0



function media() {
    //debugger

    var nom = document.getElementById("nome").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var n1 = Number(nota1)
    var n2 = Number(nota2)

    if (n1 == '' || n2 == '') {
        alert("ei, algo está errado, coloque um valor na nota")
    }

    if (calcular(n1, n2) == true) {
        alert("passou")
        document.getElementById("results").innerHTML = `Parabens ${nom} passou com nota ${mediaa}`
    } else {
        alert("burroooooooooooooooo")
        document.getElementById("results").innerHTML = `Tu repetiu ${nom}`
    }



}


function calcular(n1, n2) {
    mediaa = (n1 + n2) / 2
    if (mediaa >= 7) {
        return true
    } else {
        return false
    }
}

