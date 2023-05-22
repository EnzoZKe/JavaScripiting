var numero = document.getElementById("numero")
function calc() {
    
    document.getElementById("resu").innerHTML = "" //! COLOCA ISSO FORA DO FOR PARA NÃO FICAR COLOCANDO RESULTADO EM BAIXO DE RESULTADO
    for (let cont = 1; cont <= 10; cont++) { //*memsa coisa que o while, so que mais simples
        
        let num = Number(numero.value) //* Define variavel numero como um numero de fato
        
        let res = num * cont //* Faz a conta
        
        document.getElementById("resu").innerHTML += `${num} x ${cont} é ${res} <br>` //* Mostra o resultado  
        
        console.log(`${num} x ${cont} é ${res} <br>`)  //todo: Mostra no console
    }
}
//! EU JA TINHA FEITO COM WHILE, SO MUDEI PARA O FOR------------------------------------------------------------------------------------
