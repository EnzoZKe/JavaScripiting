var rando = parseInt(Math.random()*100)
var attempts = 0

console.log(rando)

function verifica(){
    var random = rando
    var nume = document.getElementById("numero").value

    if (nume == random){
        document.getElementById("show").innerHTML+=`YAY você precisou de ${attempts} tentativas`
    } else if (nume < random) {
        document.getElementById("show").innerHTML+=`ele é maior que ${nume} <br>`
    } else if (nume > random) {
        document.getElementById("show").innerHTML+=`ele é menor que ${nume} <br>`
    } else if (nume == "URSS") {
        document.getElementById("show").innerHTML+=`<a href="https://music.youtube.com/watch?v=qigIYJWsyWE&list=RDAMVMr94rA-ZRMos">Clica aqui vai</a><br>`
    }

    if (attempts > 5) {
        alert(`TU PERDEU OTARIOOOOOOOOOOOOOO!!!!!!!, A RESPOSTA ERA ${rando}`)
        document.getElementById("show").innerHTML=`<b>HA, TU É MUITO RUIM KKKKKKKKKKK<b>`
    }

    attempts ++
    console.log(attempts)
}