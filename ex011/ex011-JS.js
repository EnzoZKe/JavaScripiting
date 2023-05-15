var user = document.getElementById("user")
var cpf = document.getElementById("cpf")

function acesso(){
    var usuario = user.value
    var num = Number(cpf.value)

    if (usuario >= 18 && usuario <= 65) {
        document.getElementById("texto").innerHTML += `<b id="Cor3"> Deve votar </b> <br>`
    }else if (usuario < 16){
        document.getElementById("texto").innerHTML += `<b id="Cor4"> Não pode votar </b> <br>`
    } else{
        document.getElementById("texto").innerHTML += `<b id="Cor5"> Não é obrigado votar </b> <br>`
    }

    if (usuario > 100) {
        document.getElementById("texto").innerHTML += `<b id="Cor6"> ta vivo meu amigo? </b> <br>`
    }

    if (num == "12345678910") {
        document.getElementById("texto2").innerHTML += `<b id="Cor1">CPF ta certo</b> <br>`
    }else {
        document.getElementById("texto2").innerHTML += `<b id="Cor2"> CPF ta errado</b> <br>`
    }
}
