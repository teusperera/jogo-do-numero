let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto); 
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'JOGO DO NUMERO SECRETO!';
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Portuguese Female',{rate:1.7});
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do Numero Secreto!');
    exibirTextoNaTela ('p', 'Escolha um numero entre 1 e 10:');
}

exibirMensagemInicial();

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10:';

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabens, meu consagrado! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor, burro!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior, animal!');
        }
        tentativas++
        limparCampo();
    }
}

if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela ('p', 'Parabéns arrombado!');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }                                                                   //length = tamanho da lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {            //push = adiciona item ao final da lista      
        return gerarNumeroAleatorio();                                  //Para remover o último elemento, você pode usar o método pop.
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }


}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

                                                    //length = tamanho da lista
                                                    //push = adiciona item ao final da lista


//function soma(a, b) {
//    return a + b;
//}

//let resultado = soma(5, 3); // Chama a função "soma" com os parametros 5 e 3
//console.log(resultado); // Saída: 8

//function saudacao(nome) {
//    console.log(`Ola ${nome}!`);
//}
//saudacao("João"); // Saída: Olá, João!
