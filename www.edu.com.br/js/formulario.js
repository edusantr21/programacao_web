var enviar = document.getElementById("enviar").value;

enviar.setAttribute('onclick','exibirDadosDigitados()')

function exibirDadosDigitados() {
var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var telefone = document.getElementById("telefone").value;
var mensagem = document.getElementById("mensagem").value;

alert(
    `- nome: ${nome} 
    - Email: ${email} 
    - Telefone: ${telefone} 
    - Mensagem: ${mensagem}
    `
)

}

