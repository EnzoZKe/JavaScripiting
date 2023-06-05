var movies = []                                                                                                                
function mostra(){
    document.getElementById("res").innerHTML = ""
    for (var i = 0; i < movies.length; i++)
    document.getElementById("res").innerHTML += `Filme ${movies[i]} </p>`
    console.log(i);
}

function add(){
   if (document.getElementById("texto").value != "") {
    movies.push(document.getElementById("texto").value)
   }
}

function limpa(){
    document.getElementById("res").innerHTML = ""
}