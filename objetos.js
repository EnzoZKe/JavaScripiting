
var carro = { //*faz isso virar meio que um dicionario
    ano: '1968',
    modelo: 'Opala',
    marca: 'GM'
}

var carro2 = {
    ano: '2022',
    modelo: 'Onix',
    marca: 'GM'
}

var carro3 = {
    ano: '1989',
    modelo: 'Miata',
    marca: 'Mazda'
}

var ListaCarro = []

console.log(carro.ano + ' - ' + carro.modelo);
//ou
console.log(`${carro.ano} - ${carro.modelo}`); //? forma mais facil segue o modelo: (`${algo.atributo} - ${algo2.atributo}`)

//add obj carro ao vetor listaCarros
ListaCarro.push(carro)
console.log(ListaCarro.length); //so tem um carro
//console.log(ListaCarro);

ListaCarro.push(carro2)
console.log(ListaCarro.length);
console.log(ListaCarro);

ListaCarro.push(carro3)
console.log(ListaCarro.length);
console.log(ListaCarro);

//* Mostrar so a marca

for (let andar in ListaCarro){
    console.log(`${ListaCarro[andar].modelo}`);
}
