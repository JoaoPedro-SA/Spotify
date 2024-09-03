const controleEsquerdo44 = document.getElementById("controleEsquerdo4");
const controleDireito44 = document.getElementById("controleDireito4");
const elementoAudio44 = document.querySelector(".music_ordem4");



function deslocarParaEsquerda() {
  clearInterval(tempo);
  tempo = setInterval(() => {
    localizacao -= passo;
    if (localizacao < -elementoAudio44.offsetWidth) { // se o elemento saiu do limite esquerdo
      localizacao = window.innerWidth; // move o elemento para o limite direito
    }
    elementoAudio44.style.left = localizacao + "px";
  }, 20);
}

function deslocarParaDireita() {
  clearInterval(tempo);
  tempo = setInterval(() => {
    localizacao += passo;
    if (localizacao > window.innerWidth) { // se o elemento saiu do limite direito
      localizacao = -elementoAudio44.offsetWidth; // move o elemento para o limite esquerdo
    }
    elementoAudio44.style.left = localizacao + "px";
  }, 20);
}

function pararDeslocamento() {
  clearInterval(tempo);
}

controleEsquerdo44.addEventListener("mousedown", deslocarParaEsquerda);
controleEsquerdo44.addEventListener("mouseup", pararDeslocamento);
controleDireito44.addEventListener("mousedown", deslocarParaDireita);
controleDireito44.addEventListener("mouseup", pararDeslocamento);

controleEsquerdo44.addEventListener("touchstart", deslocarParaEsquerda);
controleEsquerdo44.addEventListener("touchend",pararDeslocamento);
controleDireito44.addEventListener("touchstart", deslocarParaDireita);
controleDireito44.addEventListener("touchend", pararDeslocamento);


function modo_arasto4(buttonE, buttonD, cards) {
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
  
  modo_arasto4(controleEsquerdo44,controleDireito44,elementoAudio44);