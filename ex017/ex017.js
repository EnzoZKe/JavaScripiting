function gera(){
    document.getElementById("show").innerHTML = ``
    for (let lifes = 1; lifes <= document.getElementById("quant").value; lifes++) {
        document.getElementById("show").innerHTML += `<img src="https://i.gifer.com/origin/23/238a465012f48c55b9c96c351be7eadd.gif" alt="">`

        console.log(`${lifes}`);
    }
}
