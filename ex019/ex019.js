var movies = ['Sherk', 
                'Bee Movie', 
                'Herobrine a lenda', 
                'The dirt',
                'Bohemian Rhapsody']

function mostra(){
    for (var i = 0; i < movies.length; i++)
    document.getElementById("res").innerHTML += `<p> posição no vetor ${i} - Filme ${movies[i]} </p>`
    console.log(i);
}