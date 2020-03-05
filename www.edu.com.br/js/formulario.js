// var enviar = document.getElementById("enviar")
// enviar.setAttribute('onclick', 'exibirDadosDigitados()')
// // enviar.onclick = function () {
// //     exibirDadosDigitados()
// // }

// function exibirDadosDigitados() {
//     var nome = document.getElementById("nome").value
//     var email = document.getElementById("email").value
//     var telefone = document.getElementById("telefone").value
//     var mensagem = document.getElementById("mensagem").value
//     alert(
//         `- nome: ${nome} 
//           - Email: ${email} 
//           - Telefone: ${telefone} 
//           - Mensagem: ${mensagem}
//           `
//     )


// }



var btenviar = document.getElementById("enviar")
btenviar.onclick = function () {
    exibirdados()
}

function exibirdados() {
    var inpNome = document.getElementById("nome").value
    var inpEmail = document.getElementById("email").value
    var inpTelefone = document.getElementById("telefone").value
    var inpMensagem = document.getElementById("mensagem").value
    alert(

        `
        Nome: ${inpNome}
        Email: ${inpEmail}
        Telefone: ${inpTelefone}
        Mensagem: ${inpMensagem}
        `
    )
}