function sort() {
    document.getElementById("res").innerHTML = ""
    var sorteado = 0
    while (sorteado < 6) {
        sorteado++
        document.getElementById("res").innerHTML += ` ${parseInt(Math.random() * 60) + 1}  `

    }
}

function resta() {
    document.getElementById("res").innerHTML = ""
}


var numero = 2**2

function calc() {
    var times = 0
    while (times < 10) {
        times++
        console.log(numero ** 2);
    }
}