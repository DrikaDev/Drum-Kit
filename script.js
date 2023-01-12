'use strict';

const teclas = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

function criarDiv (texto){
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

function exibir(teclas){
    Object.keys(teclas).forEach(criarDiv)
}


function tocarSom (letra){
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

function adicionarEfeito (letra){
    document.getElementById(letra).classList.add('active')
}

function removerEfeito (letra){
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

function ativarSom (evento){
    let letra = ''
    if(evento.type == 'click'){
        letra = evento.target.id;
    }else{
        letra = evento.key.toUpperCase();
    }
    //ou pode usar ternário:
    //const letra = evento.type == "click" ? evento.target.id : evento.key.toUpperCase();
    
    const letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida){
        adicionarEfeito(letra)
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibir(teclas);
document.getElementById('container').addEventListener('click', ativarSom);

window.addEventListener('keydown', ativarSom)
