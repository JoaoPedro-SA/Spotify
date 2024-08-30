let controleEsquerdo33 = document.getElementById("controleEsquerdo3");
let controleDireito33 = document.getElementById("controleDireito3");
let elementoAudio33 = document.querySelector(".music_ordem3");



function deslocarParaEsquerda() {
  clearInterval(tempo);
  tempo = setInterval(() => {
    localizacao -= passo;
    if (localizacao < -elementoAudio33.offsetWidth) { // se o elemento saiu do limite esquerdo
      localizacao = window.innerWidth; // move o elemento para o limite direito
    }
    elementoAudio33.style.left = localizacao + "px";
  }, 20);
}

function deslocarParaDireita() {
  clearInterval(tempo);
  tempo = setInterval(() => {
    localizacao += passo;
    if (localizacao > window.innerWidth) { // se o elemento saiu do limite direito
      localizacao = -elementoAudio33.offsetWidth; // move o elemento para o limite esquerdo
    }
    elementoAudio33.style.left = localizacao + "px";
  }, 20);
}

function pararDeslocamento() {
  clearInterval(tempo);
}

controleEsquerdo33.addEventListener("mousedown", deslocarParaEsquerda);
controleEsquerdo33.addEventListener("mouseup", pararDeslocamento);
controleDireito33.addEventListener("mousedown", deslocarParaDireita);
controleDireito33.addEventListener("mouseup", pararDeslocamento);

controleEsquerdo33.addEventListener("touchstart", deslocarParaEsquerda);
controleEsquerdo33.addEventListener("touchend",pararDeslocamento);
controleDireito33.addEventListener("touchstart", deslocarParaDireita);
controleDireito33.addEventListener("touchend", pararDeslocamento);