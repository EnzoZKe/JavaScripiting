var ate = document.getElementById("nu1")

var til = document.getElementById("nu2")

function calc() {
    document.getElementById("show").innerHTML = ""
    for (let attempt = Number(ate.value) ; attempt <= Number(til.value); attempt++) {
        if (attempt % 2 == 1) {
            document.getElementById("show").innerHTML += `${attempt} <br>`
        }
    }
}