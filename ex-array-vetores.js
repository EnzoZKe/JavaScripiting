var myVector = [] //* Declarando array vazio

var numbers = [1, 2, 3, 4, 5] //* Vetores com dados

var nomes = ['Ellye', 'Zek', 'Enzk', 'TNT'] //* Vetor com nomes (coloca '' para detectar como string)

var newVector = [20, 'SESI', true] //* Vetor com diferentes dados

//? Acessando os dados
console.log("---------------------------------------- ~ acessando vetores ~ --------------------------------------------------------------");
console.log(nomes [3]);
console.log(myVector);
console.log(newVector [1]);
console.log(numbers);
console.log("-----------------------------------------------------------------------------------------------------------------------------");

console.log(``);

console.log('-------------------------------------- ~ Escrevendo em sequncia ~ -----------------------------------------------------------');
//! INDICE      0         1         2         3       4
var fruits = ['Maçã', 'Laranja', 'Pera', 'Morango', 'Uva']

for (var i = 0; i < fruits.length; i++)
console.log(fruits[i])
console.log('------------------------------------------------------------------------------------------------------------------------------');

//* adicionando vetores

fruits.push ('Abacaxi')
console.log(fruits);
console.log(fruits.length);

console.log('-------------------------------------- ~ Jeitos mais faceis de usar for ~ -----------------------------------------------------');

for (i in fruits)
    console.log(i + ' - ' + fruits[i]);

console.log('------------------------------------------------ ~ For each ~ -----------------------------------------------------------------');
fruits.forEach( fruits => {
    console.log(fruits)
})

console.log('-------------------------------------------------- ~ Exemplo ~ ----------------------------------------------------------------');

//! USANDO for (i in coisa)
var treco = ['coisa 1', 'coisa 2', 'coisa 3', 'coisa 4', 'coisa 5']
for (i in treco)
    console.log(i, ' - ', treco[i]);    



    //! USANDO coisa.forEach( coisa => {})
var treco2 = ['coisa 6', 'coisa 7', 'coisa 8', 'coisa 9', 'coisa 10', ]

treco2.forEach( treco2 => {
    console.log(treco2);
})

console.log(`-------------------------------------------------- ~ forEach ~ ----------------------------------------------------------------`);

//? forEach significa cada item do vetor
//* dentro dos parenteses colocamos a variavel que irá receber o conteudo de cada linha
//* e com => {} informamos o que irá executar para cada linha
//? sintax = vetor.forEach ( item => {coloca algo aqui} )


//todo sem posição
fruits.forEach ( item => { 
    console.log(item);
 } )

 console.log(`-------------------------------------------------- ~ forEach com posição ~ -----------------------------------------------------`);

 //todo com posição
 fruits.forEach ( (item, pos) => { 
    console.log(pos ,item);
 } )