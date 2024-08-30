
const botaoEsquerda = document.getElementById("direita1");
const botaoDireita = document.getElementById("esquerda1");
const elemento = document.querySelector(".music_ordem");
let intervalo;

let posicao = 0; // posição inicial
const velocidade = 25; // pixels por intervalo

function moverEsquerda() {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    posicao -= velocidade;
    if (posicao < -elemento.offsetWidth) { // se o elemento saiu do limite esquerdo
      posicao = window.innerWidth; // move o elemento para o limite direito
    }
    elemento.style.left = posicao + "px";
  }, 20);
}

function moverDireita() {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    posicao += velocidade;
    if (posicao > window.innerWidth) { // se o elemento saiu do limite direito
      posicao = -elemento.offsetWidth; // move o elemento para o limite esquerdo
    }
    elemento.style.left = posicao + "px";
  }, 20);


}

function pararMovimento() {
  clearInterval(intervalo);
}

botaoEsquerda.addEventListener("mousedown", moverEsquerda);
botaoEsquerda.addEventListener("mouseup", pararMovimento);
botaoDireita.addEventListener("mousedown", moverDireita);
botaoDireita.addEventListener("mouseup", pararMovimento);


botaoEsquerda.addEventListener("touchstart",  moverEsquerda);
botaoEsquerda.addEventListener("touchend", pararMovimento);
botaoDireita.addEventListener("touchstart", moverDireita);
botaoDireita.addEventListener("touchend", pararMovimento);


const controleEsquerdo = document.getElementById("controleEsquerdo");
const controleDireito = document.getElementById("controleDireito");
const elementoAudio = document.querySelector(".music_ordem1");
let tempo;

let localizacao = 0; // posição inicial
const passo = 25; // pixels por intervalo

function deslocarParaEsquerda() {
  clearInterval(tempo);
  tempo = setInterval(() => {
    localizacao -= passo;
    if (localizacao < -elementoAudio.offsetWidth) { // se o elemento saiu do limite esquerdo
      localizacao = window.innerWidth; // move o elemento para o limite direito
    }
    elementoAudio.style.left = localizacao + "px";
  }, 20);
}

function deslocarParaDireita() {
  clearInterval(tempo);
  tempo = setInterval(() => {
    localizacao += passo;
    if (localizacao > window.innerWidth) { // se o elemento saiu do limite direito
      localizacao = -elementoAudio.offsetWidth; // move o elemento para o limite esquerdo
    }
    elementoAudio.style.left = localizacao + "px";
  }, 20);
}

function pararDeslocamento() {
  clearInterval(tempo);
}

controleEsquerdo.addEventListener("mousedown", deslocarParaEsquerda);
controleEsquerdo.addEventListener("mouseup", pararDeslocamento);
controleDireito.addEventListener("mousedown", deslocarParaDireita);
controleDireito.addEventListener("mouseup", pararDeslocamento);



// PESADELO FOI ISSO AQUI ☝

