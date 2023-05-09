var nome = document.getElementById("texto")
var idade = document.getElementById("age")

function Poder(){
    var age = Number(idade.value)
    var nom = (nome.value)

    if (age >= 18) {
        document.getElementById("mostra").innerHTML = `${nom} você pode tirar sua CNH <br>`
        document.getElementById("toma").innerHTML = `<img src=https://clubedetran.com.br/wp-content/uploads/2019/07/CNH-Perguntas-e-Respostas-Frequentes.jpg><br>`
    } else{
        document.getElementById("mostra").innerHTML = `${nom} você não pode tirar sua CNH <br>`
        document.getElementById("toma").innerHTML = `<img src= img/was.png><br>`
    }

    if (age >=100) {
        document.getElementById("mostra").innerHTML = `${nom} ta louco? mais de 100 anos e querendo dirigir? <br>`
        document.getElementById("toma").innerHTML = `<img src= img/was.png><br>`
    }

    if (age >=150) {
        document.getElementById("mostra").innerHTML = `${nom} para de mentir meu fi, eu sei que você não tem tudo isso de idade <br>`
        document.getElementById("toma").innerHTML = ""
    }
}