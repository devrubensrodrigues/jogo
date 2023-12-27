let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibeTextoNaTela('h1', 'Acertou!!');
        let pluralTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        exibeTextoNaTela('p', `Você descobriu o numero secreto com ${tentativas} ${pluralTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){ 
            exibeTextoNaTela('p', 'O numero secreto é menor.');
        } else {
            exibeTextoNaTela('p', 'O número secreto é maior.');
        }
    }
    tentativas++;
    limparCampo();
}
mensagemInicioal();
function mensagemInicioal() {
    exibeTextoNaTela('h1', 'Game of secret number');
    exibeTextoNaTela('p', 'Enter a number between 1 and 10');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); 
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicioal();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}