
const palavras = ['oi', 'sumido', 'tudo', 'bem', 'Saudades']

let mensagem = ''


function imprimirMensagem(array) {

    for (let palavra of array ) {
        mensagem += palavra + ' '
     ///   console.log(frase)
      
    }

    console.log(mensagem)
    }

    //imprimirMensagem(mensagem)


imprimirMensagem(palavras)


///for (let numero of numeros ) {
///    console.log(numero)