function pega() {
    var nam = document.getElementById("Nome").value
    var age = document.getElementById("Idade").value
    var mail = document.getElementById("Email").value
    var password = document.getElementById("Senha").value

    console.log(`seu nome é ${nam}, você tem ${age}, usou o ${mail}, e colocou ${password} de senha`)
}