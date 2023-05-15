
//calcular dobro e metade de numeros:
var resultados = document.getElementById("resultado")
var Input = document.getElementById("numCalc")

function calcular() {
    var valor = Number(Input.value)

    var dobro = valor * 2
    var metade = valor / 2

    resultados.innerHTML += `o dobro de ${valor} é <strong>${dobro}</strong> e a metade é <strong>${metade}</strong><br>`
}

function resetNum() {
    document.getElementById("myReset").reset();
}
console.log("//--------------------------------------------------------------------------------------------------------//")

//mudar cor de fundo com botão:
function Botao1() {
    alert("voce clicou em mim")
    document.body.style.backgroundColor = "blue"
}

function Botao2() {
    alert("ta bom, vc ja clicou em mim")
    document.body.style.backgroundColor = "pink"
}

function Botao3() {
    alert("PARA DE CLICAR EM MIM MDS")
    console.log("anotado isso")
    document.body.style.backgroundColor = "red"
}

function Bot() {
    document.body.style.backgroundColor = "green"
}

function Bot2() {
    document.body.style.backgroundColor = "white"

}
console.log("//--------------------------------------------------------------------------------------------------------//")

//mostrar pergunta:
function botaoNome() {
    var nome = prompt('qual é o seu nome')
    alert(`ola ${nome} sinta-se a vontade em nosso site. Agradecemos sua presença!`)
}
console.log("//--------------------------------------------------------------------------------------------------------//")

//soma de numeros:
function sum() {
    var num1 = prompt('escolhe o numero man')
    var num2 = prompt('escolhe outro agora')
    var soma = Number(num1) + Number(num2)
    console.log(`${num1} + ${num2} = ${soma}`);
}
console.log("//--------------------------------------------------------------------------------------------------------//")

//escrever em sequencia:
function botaoClique() {
    var nome = prompt('oioi, qual seu nome')
    alert(`agradecemos a sua presença ${nome}`)
    document.getElementById("passou").innerHTML += `&#x1F596 acabei de cadastrar <strong> ${nome} </strong> no site <br>`
}
console.log("//--------------------------------------------------------------------------------------------------------//")

//operadores aritméticos (basicamente PEMDAS)

var opSoma = 5 + 2 //Operador de soma +
console.log(opSoma)

var opSubtracao = 5 - 2 //Operdador de subtração -
console.log(opSubtracao);

var opMultiplicacao = 5 * 2 //Operador de multiplicação *
console.log(opMultiplicacao);

var opDivisao = 4 / 2 // Operdador de divisão /
console.log(opDivisao);

var opExponenciacao = 5 ** 2 //Operdador de exponenciação **
console.log(opExponenciacao)

var opResto = 5 % 2 //Operdador de resto %
console.log(opResto)

//Ordem segue basicamente o PEMDAS (parenteses, exponenciação, multiplicação, divisão, adição e subtração)

var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1);

var ordemParenteses2 = (5 + 3) / 2
console.log(ordemParenteses2);

/*
1- ()
2- **
3- * ou /
4- %
5- + ou -

console.log("//--------------------------------------------------------------------------------------------------------//")

//coisas do teoria kkkkkkkkk
        /*comentario em multiplas linhas*/
//comentario em linha unica


//alert("Hello World")//um pop-up em janela
//console.log ("Olar mundor") //console, usamos pra programar o JS


/*function botaoTeste() {
    alert("vc clicou em mim")
}*/
/* tem muita coisa aqui!!!!!!!!!!!!!!!!!!!
        //mensagens de exibição do console
        console.error("esta é uma mensagem de erro")
        console.warn("mensagem de alerta")
        console.info("mensagem de informações") 

        //variaveis
        var a1 = 0  //var deixa o valor mudar
        let a2 = 0
        const a3 = 0    //const não deixa o valor mudar

        //string (usa pra letras + numeros)
        var coisa1 = "hi"
        var coisa2 = 'hi'
        var coisa3 = `hi`

        //number (usa pra numeros)
        var zero = 0
        var um = 1
        var dois = 2

        //boolean (verdadeiro e falso)
        var boolean_true = true
        var boolean_false = false

        //integer

        //float

        //decimal

        //doube

        //short (reserva um espaço menor na memoria)

        //long (reserva um espaço grande na memoria)

        let array = [1, 2]

        let result = array.reduce((a, b) => {
            return a + b;
        });

        console.log(result);

        //conjunto de caracteres tem q colocar "" ou ''
        var nome = "Enzo"
        var sobrenome = "Sarante"
/*
        //numeros não precisa de "" ou ''
        var idade = 16

        //boolen usa so true ou false
/*
        var aprovado = true

        console.log(typeof nome); //typeof mostra o tipo de dado (string, number ou boolean)
        console.log(typeof sobrenome);
        console.log(typeof idade);
        console.log(typeof aprovado);

        console.log(nome + ' ' + sobrenome); //conecta o strings com +, se for com numeros, eles somam

        var n1 = 10
        var n2 = 25
        console.log(n1 + n2);

        var n3 = "10"
        var n4 = "25"
        console.log(n3 + n4); //eles se juntam, mas não se somam
/*
        n1 = n2 //uma var pode receber o valor de outra var
        console.log("n1 = " + n1 + ' e o n2 = ' + n2);

        var salario = 1200.90 //usa . pra colocar os centavos
        salario = salario + 200 //da pra somar variavel com variavel
        console.log(salario);
        salario += 200 //simplificação disso  (salario = salario + 200)
        console.log(salario);

        //pior jeito de juntar textos
        /*
        console.log('olá ' + nome + ', você tem ' + idade + ' anos e recebe R$ ' + salario);

        //jeito mais eficiente
        /*
        console.log(`ola ${nome}, você tem ${idade} anos e recebe R$ ${salario}`); //precisa de `` (crase) pra fazer isso

        //Função do botão nome
        /*
        function botaoNome() {
            var nome = prompt('qual é o seu nome')
            alert(`ola ${nome}`)
            alert(`${nome} qual seu cpf?`)
            var cpf = prompt('qual seu CPF?')
            confirm(`olá ${nome} tem certeza que quer enviar esses dados?`)
            confirm(`tem certeza absoluta?`)
            confirm(`absoluta msm?`)
            alert(`ta bom ent`)
            alert(`parabens ${nome}, estamos enviando seus dados para واو ، لقد ضيعت الوقت في ترجمة هذه الضحك بصوتعال`)
        }

        function ExibirCidade() {
            var nomeCidade = document.getElementById("cidade").value
            document.getElementById("resultadoCidade").innerHTML = nomeCidade
        }



        //Função do botão soma
        /*
        function botaoSum() {
            var num1 = prompt(`digite um numero`) //valor 1
            var num2 = prompt(`digite outro numero`) //valor 2

            var soma = parseFloat(num1) + parseFloat(num2) //fazer a soma

            //alert(` ${num1} + ${num2} = ${soma}`) //mostrar o resultado

            document.getElementById("resultadoSoma").innerHTML = `${num1} + ${num2} = ${soma}`

        }

        /* function botaoTimes() {
             var num1 = prompt(`digite um numero`)
             var num2 = prompt(`digite outro numero`)
 
             var soma = parseFloat(num1) * parseFloat(num2)
 
             //alert(` ${num1} * ${num2} = ${soma}`)
 
             document.getElementById("resultadoMulti").innerHTML = `${num1} * ${num2} = ${soma}`
         }
 
         function botaoDiv() {
             var num1 = prompt(`digite um numero`)
             var num2 = prompt(`digite outro numero`)
 
             var soma = parseFloat(num1) / parseFloat(num2)
 
             //alert(` ${num1} / ${num2} = ${soma}`)
 
             document.getElementById("resultadoDiv").innerHTML = `${num1} / ${num2} = ${soma}`
         }
 
         function botaoSub() {
             var num1 = prompt(`digite um numero`)
             var num2 = prompt(`digite outro numero`)
 
             var soma = parseFloat(num1) - parseFloat(num2)
 
             //alert(` ${num1} - ${num2} = ${soma}`)
 
             document.getElementById("resultadoSub").innerHTML = `${num1} - ${num2} = ${soma}`
         } */

//constantes 
const pi = 3.14159265358979
console.log(pi);

//constantes são dados que não podem ser mudados!!!!!!!!!!!!!!!
//se o valor for alterado, ele da erro no JS

var a = 5 + 3
console.log(a)
var b = a % 5
console.log(b)
var c = 5 * b ** 2
console.log(c)
var d = 10 - a / 2
console.log(d)
var e = 6 * 2 / d
console.log(e)
var f = b % e + 4 / e
console.log(f);

console.log("//--------------------------------------------------------------------------------------------------------//")

//Condição

var idade = 10
if (idade >= 16) {
    console.log(`você pode votar, porque você tem ${idade} anos`)
}
else {
    console.log(`você não pode votar, porque você tem ${idade} anos`);
}

//auto atribuição

var n = 3
n = n + 3 //Variavel que recebe ele mesmo + 3
n += 3 //Igual a esse ^^^^^^^^

n++ //Pra adicionar +1 pra var
n-- //Para tirar 1 da var

//operadores Relacionais

var n1 = 5
var n2 = 6
console.log(n1 > n2); //Maior q
console.log(n1 < n2); //Menor q
console.log(n1 >= n2); //Maior ou igual q
console.log(n1 <= n2); //Menor ou igual q
console.log(n1 == n2); //Igual a
console.log(n1 != n2); //Diferente de

//Mais estrutura condicional

if (n1 > n2) {
    console.log("o n1 é maior que o n2"); //condicional caso n1 seja maior que n2
} else {
    console.log("o n2 é maior que o n1"); //condicional caso n2 seja maior que n1
}

console.log("//--------------------------------------------------------------------------------------------------------//")

//Operadores Lógicos 
// && representa E
var user = document.getElementById("user")
var senha = document.getElementById("senha")

function acesso() {
    var usuario = user.value
    var pass = senha.value

    if (usuario == "adm" && pass == "forte") {
        document.getElementById("texto").innerHTML = `<b class="verde">Parabéns, você entrou</b>`
    } else {
        document.getElementById("texto").innerHTML = `<b class="vermelho">Você errou a senha</b>`
    }
}

// || representa ou (pipe)
//Para condição true, uma das opções deve ser verdadeira

if (medida == 6 || medida == 5) {
    //executa o bloco quando pelo menos uma condição é true pelo menos
} else {
    //aqui se todas forem falsas
}

//estruturas condicionais encadeadas
if (media >= 7) {
    console.log("aprovado")
    //aprovado
} else if (media >= 5) {
    console.log("recuperação")
    //recuperação
} else if (media < 5) {
    console.log("reprovado")
    //reprovado
}

//debugger para debugar o codigo (ver erros)

//exite


//matematica YAY
//math.random gera um numero aleatorio menor q 1
var numSort = parseInt(Math.random() * 100) + 1
console.log(numSort)


//switch é como um if, so que mais simples
var diaWeek = 1
switch (diaWeek) {
    case 1:
        console.log("Hoje é domingo")
        break;

    case 2:
        console.log("Hoje é segunda")
        break;

    case 3:
        console.log("Hoje é terça")
        break;

    case 4:
        console.log("Hoje é quarta")
        break;

    default: console.log("Hoje é quinta"); //tipo um else
        break;
}