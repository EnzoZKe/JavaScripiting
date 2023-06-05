
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
    for (var i in dados) {

        document.getElementById("logou").innerHTML +=
        `<div>
            <p> olá ${dados[i].Name}, você criou sua conta, clique a baixo para acessa-lá</p>
        </div>`

    }

}

//console.log(dados);

function logar(){

    var veriNome = document.getElementById("confirmarNome").value
    var veriSenha = document.getElementById("validarSenhar").value

    for (var i in dados){
        if (veriNome != dados[i].Name) {
            
            alert("Tem coisa errada!");
        } else if (veriSenha != dados[i].Passcode) {

            alert("Senha errada")
        } else {
            alert("Entrou!!!")
        }
    }
}

function clean(){
    dados = []
    document.getElementById("logou").innerHTML = ""
}
