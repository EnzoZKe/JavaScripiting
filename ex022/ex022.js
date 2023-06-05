
/*var listaMovies = []

function add() {
    var movies = document.getElementById("texto").value
    var pic = document.getElementById("link").value

    var filme = movies
    var foto = pic

    var objFilme = { nome: filme, link: foto }

    listaMovies.push(objFilme)


    for (var i in listaMovies) {
        document.getElementById("res").innerHTML += `${listaMovies[i].nome} ${listaMovies[i].foto}`
    }

} */

var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))

if (listaFilmes == null){
    listaFilmes=[]
}
showMovies()

function add(){
    var filme = document.getElementById("texto").value
    var foto = document.getElementById("link").value

    var filmeData = {
        nome: filme,
        imagem: foto
    }

    listaFilmes.push(filmeData)

    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes)) //armazena os dados
    
    
    
    showMovies()

    console.log(listaFilmes);

}

function rando(){
    console.log(listaFilmes);

    var i = parseInt(Math.random() * listaFilmes.length)

    document.getElementById("filme_random").innerHTML =
        `<div>
            <p>${listaFilmes[i].nome}</p>
            <img src="${listaFilmes[i].imagem}" class="image">
        </div>`
        
}

function showMovies(){
    document.getElementById("res").innerHTML = ""


    for (i in listaFilmes){
        document.getElementById("res").innerHTML +=
        `<div>
            <p>${listaFilmes[i].nome}</p>
            <img src="${listaFilmes[i].imagem}" class="image">
        </div>`
    }
}

function clean(){
    listaFilmes = []
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
    document.getElementById("res").innerHTML = ""
}


