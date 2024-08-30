
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



// PESADELO FOI ISSO AQUI ☝

