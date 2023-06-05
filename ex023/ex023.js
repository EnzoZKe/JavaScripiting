
var dados = []

dados = JSON.parse(localStorage.getItem('dodosLogin'))
if (dados == null) {
    dados = []
}
mostraDados()


//console.log(dados);
//console.log(localStorage.getItem('dodosLogin'));


function Regs() {
    // PEGA AS INFORMAÇÕES DA PESSOA
    var nome = document.getElementById("nome").value
    var email = document.getElementById("Mail").value
    var senha = document.getElementById("Senha").value
    var confSenha = document.getElementById("senhaConfirma").value

    //console.log(nome, email, senha, confSenha);

    if (nome, email, senha, confSenha == "") {
        console.log("");
        alert("Tem coisa faltando ai")
 
        return false
    }
    
    //todo TRANSFORMA AS INFOS EM OBJETOS
    var data = {
        'Name': nome,
        'Email': email,
        'Passcode': senha
        //'confPasscode': confSenha
    }

    dados.push(data) //* Manda as coisas da data para dados (que é uma lista)

    localStorage.setItem('dodosLogin', JSON.stringify(dados)) //* Guarda os dados como JSON no navegador
    
    mostraDados() //* Chama a função

    alert("Pode entrar na sua conta irmão") //* Alerta pra avisar que pode entrar na sua conta
    window.location="Acessar.html" //* Aparece uma janela com um OK para vc ir para a proxima pagina
}

function mostraDados() {

    document.getElementById("logou").innerHTML = ""


    //for (var i in dados) {

    dados.forEach ((item, pos) => {
        document.getElementById("logou").innerHTML +=
        `<div>
            <p> olá ${item.Name}, você criou sua conta, clique a baixo para acessa-lá</p>
            <img src="https://www.svgrepo.com/download/78963/rubbish-bin.svg" class="trem" onclick="limparUser(${pos})">
        </div>`

    })

}

//console.log(dados);

function logar(){

    var veriNome = document.getElementById("confirmarNome").value
    var veriSenha = document.getElementById("validarSenhar").value

    dados.forEach (item => {
        if (veriNome != item.Name) {
            
            alert("Tem coisa errada!");
        } else if (veriSenha != item.Passcode) {

            alert("Senha errada")
        } else {
            alert("Entrou!!!")
        }
    })

    }


function clean(){
    dados = []
    localStorage.setItem('dodosLogin', JSON.stringify(dados))
    document.getElementById("logou").innerHTML = ""
}

function limparUser(pos){
    if(confirm('Deseja deletar tua conta?')){
        dados.splice(pos, 1)
        localStorage.setItem('dodosLogin', JSON.stringify(dados))
        mostraDados()
    }

}