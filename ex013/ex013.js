

var nome = document.getElementById("txt")

function when() {

var mes = parseInt(Math.random() * 24) + 1
console.log(mes);


    var nom = nome.value

    switch (mes) {
        case 1:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM JANEIRO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 2:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM FEVEREIRO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 3:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM MARÇO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 4:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM ABRIL!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 5:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM MAIO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 6:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM JUNHO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 7:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM JULHO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 8:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM AGOSTO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 9:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM SETEMBRO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 10:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM OUTUBRO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 11:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM NOVEMBRO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;
        case 12:
            document.getElementById("casa").innerHTML = `${nom} VAI CASAR EM DEZEMBRO!! <img src="https://i.pinimg.com/originals/9c/97/32/9c9732f58f86108ca5e8200ef802f5df.gif" alt="">`
            break;

        default:
            document.getElementById("casa").innerHTML = `${nom} NÃO VAI CASAR!! <img src ="https://i.pinimg.com/564x/2b/e4/24/2be4247d144d12dffe1e9f399ae5f824.jpg">`
            break;
    }
}