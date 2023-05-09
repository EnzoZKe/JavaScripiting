var user = document.getElementById("user")
var senha = document.getElementById("senha")

function acesso(){
    var usuario = user.value
    var pass = senha.value

    if (usuario == "adm" && pass == "forte") {
        document.getElementById("texto").innerHTML = `<b class="verde">Parabéns, você entrou</b>`
    } else{
        document.getElementById("texto").innerHTML = `<b class="vermelho">Você errou a senha</b>`
    }
}