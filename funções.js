calcularDobro(99) //* Numero que eu quero multiplicar 

function calcularDobro(nr){ //* Pega o numero que eu quero multiplicar, no caso 99
    var dobro = nr * 2 //* Cria uma variavel dobro e faz ela calcular o dobro do nr
    console.log(dobro); //* Mostra o dobro
}

RicardoCalculaATabuadaPraMimPorFavor(16)

function RicardoCalculaATabuadaPraMimPorFavor(nr){
    for (let i = 1; i <= 20; i++ ){
        console.log(`${nr} x ${i} = ${nr*i}`);
    }

}


var resultado = 0
resultado = calcudobor(32502)
function calcudobor(nr){
    var double = nr * 2
    return double
}



var res = 0
res = mat(3)
console.log(res)

function mat(nr){
    var dobro = nr / 2
    return dobro
}



function media(n1, n2){
    var n1 = 3
    var n2 = 3
    var soma = n1 + n2
    var mediaa = soma / 2
    
    return mediaa
    console.log(mediaa);
}

var login = 'adm'
var senha = '123'
var possoAcessar = validarLogin(login, senha)

if (possoAcessar == true) {
    console.log("podes entrar meu mestre");
} else {
    console.log("sai daqui bixo, todo dia isso");
}

function validarLogin(login, senha){
    if (login == "" || senha == "") { //* se login ou senha estiverem vazias, retorne falso
        return false
    }

    if (login == "adm" && senha == "123") { //* se login e senha estiverem certas, retorne verdadeiro
        return true
    } else {
        return false //* se não, retorne falso
    }
}