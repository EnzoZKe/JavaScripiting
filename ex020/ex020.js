var movies = [] //! VETOR DE FILMES VAZIO
var image = [] //! VETOR DE IMAGENS VAZIO
function mostra(){
    document.getElementById("res").innerHTML = ""


    for (var i = 0; i < movies.length; i++)
    document.getElementById("res").innerHTML += `<div class="Cartaz"> ${movies[i]}<br> <img src="${image[i]}"></div>`
}


function add(){
   if (document.getElementById("texto").value != "") {
    movies.push(document.getElementById("texto").value)
    image.push(document.getElementById("link").value)
   }
}


function limpa(){
    document.getElementById("res").innerHTML = ""
}

function rando(){
    var i = parseInt(Math.random() * movies.length) //* gera um numero aleatorio e multiplica pelo tamanho da lista de filmes
    document.getElementById("filme_random").innerHTML = `<div class="Cartaz"> ${movies[i]}<br> <img src="${image[i]}"></div>`
    console.log(i);
}