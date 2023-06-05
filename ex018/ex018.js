var lifes = 0

function add(value){

    document.getElementById("life").innerHTML = ""

    lifes += value

    for (let index = 0; index <= lifes; index++) {
        document.getElementById("life").innerHTML += `<img src="https://i.gifer.com/origin/23/238a465012f48c55b9c96c351be7eadd.gif" alt="" class="star">`
    }

    if (lifes < 0) {
        document.getElementById("mauro").innerHTML = `<img src="game.gif" alt="">`
    } else {
        document.getElementById("mauro").innerHTML = `<img src="https://ukikipedia.net/mediawiki/images/8/88/Xiah_LBLJ.gif" alt="" >`
    }

    if (lifes >= 120) {
        document.getElementById("mauro").innerHTML = `<img src="https://64.media.tumblr.com/6ceeb19521b065b6066fb4b5a59490c0/tumblr_ptnh4t93EO1xq97yeo1_400.gif" alt="" >`
    }
    console.log(`${lifes}`);
}