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