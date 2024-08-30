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