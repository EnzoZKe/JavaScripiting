var Aluno = document.getElementById("texto")   //pega o nome do aluno
var Nota1 = document.getElementById("texto2")  //pega a nota 1
var Nota2 = document.getElementById("texto3")  //peha a nota 2

function Resultado() {
    debugger
    var nom = (Aluno.value)         
    var n1 = Number(Nota1.value)    //transforma a nota 1 em numero
    var n2 = Number(Nota2.value)    //transforma a nota 2 em numero

    var calc = (n1 + n2) / 2  //calcula a média

    //IF's

    if (nom == "") {
        alert(`Coloque um nome`)
    }
    
    
    if (calc >= 7) {
        document.getElementById("texto5").innerHTML = `&#128293 Passou de Ano &#127881;`
        document.getElementById("texto4").innerHTML += `Aluno ${nom} tirou notas ${n1}, ${n2} e sua média foi ${calc} <strong class="apr">Passou</strong><br>`
    } else { 
        document.getElementById("texto5").innerHTML = `&#10060 Repetiu de Ano &#128543`
        document.getElementById("texto4").innerHTML += `Aluno ${nom} tirou notas ${n1}, ${n2} e sua média foi ${calc} <strong class="rep">Repetiu</strong><br>`
    }
    
    
    if (n1 > 10) {
        alert(`VOCÊ COLOCOU A NOTA 1 ERRADA, as notas não podem ser maiores que 10`)
    }

    if (n2 > 10) {
        alert(`VOCÊ COLOCOU A NOTA 2 ERRADA, as notas não podem ser maiores que 10`)
    }

    if (calc > 10) {
        res = document.getElementById("texto4").innerHTML = "NÃO ACEITAMOS NOTAS MAIORES QUE 10"
        res = document.getElementById("texto5").innerHTML = "NÃO ACEITAMOS NOTAS MAIORES QUE 10"
    }
}

