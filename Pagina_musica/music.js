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


function modo_arasto2(buttonE, buttonD, cards) {
  document.addEventListener("DOMContentLoaded", () => {
    const controleEsquerdo = buttonE;
    const controleDireito = buttonD;
    const elementoAudio = cards;
    let tempo;
    let localizacao = 0; // posição inicial
    const passo = 20; // pixels por intervalo
    const limiteExtra = 1000; // espaço extra para deslocamento
  
    function atualizarPosicao(novaPosicao) {
        localizacao = novaPosicao;
        elementoAudio.style.left = `${localizacao}px`;
    }
  
    function deslocar(direcao) {
        clearInterval(tempo);
        tempo = setInterval(() => {
            localizacao += direcao * passo;
            if (localizacao < -elementoAudio.offsetWidth - limiteExtra) {
                localizacao = window.innerWidth + limiteExtra;
            } else if (localizacao > window.innerWidth + limiteExtra) {
                localizacao = -elementoAudio.offsetWidth - limiteExtra;
            }
            atualizarPosicao(localizacao);
        }, 20);
    }
  
    function pararDeslocamento() {
        clearInterval(tempo);
    }
  
    function iniciarArrasto(event) {
        const touch = event.touches ? event.touches[0] : event;
        elementoAudio.dataset.inicialX = touch.clientX;
        elementoAudio.dataset.localizacaoInicial = localizacao;
        document.addEventListener("mousemove", arrastar);
        document.addEventListener("touchmove", arrastar);
        document.addEventListener("mouseup", pararArrasto);
        document.addEventListener("touchend", pararArrasto);
    }
  
    function arrastar(event) {
        const touch = event.touches ? event.touches[0] : event;
        const movimento = touch.clientX - elementoAudio.dataset.inicialX;
        atualizarPosicao(parseFloat(elementoAudio.dataset.localizacaoInicial) + movimento);
    }
  
    function pararArrasto() {
        document.removeEventListener("mousemove", arrastar);
        document.removeEventListener("touchmove", arrastar);
        document.removeEventListener("mouseup", pararArrasto);
        document.removeEventListener("touchend", pararArrasto);
    }
  
    controleEsquerdo.addEventListener("mousedown", () => deslocar(-1));
    controleEsquerdo.addEventListener("mouseup", pararDeslocamento);
    controleDireito.addEventListener("mousedown", () => deslocar(1));
    controleDireito.addEventListener("mouseup", pararDeslocamento);
  
    // Adicionando eventos de toque para controles
    controleEsquerdo.addEventListener("touchstart", () => deslocar(-1));
    controleEsquerdo.addEventListener("touchend", pararDeslocamento);
    controleDireito.addEventListener("touchstart", () => deslocar(1));
    controleDireito.addEventListener("touchend", pararDeslocamento);
  
    // Adicionando eventos de arrasto para dispositivos móveis
    elementoAudio.addEventListener("mousedown", iniciarArrasto);
    elementoAudio.addEventListener("touchstart", iniciarArrasto);
  });
  
  }

modo_arasto2(botaoEsquerda, botaoDireita,elemento);


// PESADELO FOI ISSO AQUI ☝

