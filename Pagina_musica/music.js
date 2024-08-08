const bsCollapse = new bootstrap.Collapse('#collapseOne', {
  toggle: false
})
const collapseElementList = document.querySelectorAll('#collapseOne')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))


const buttonll = document.getElementById('corpo_button_pesquisa');
const input = document.querySelector('.nav_input');

buttonll.addEventListener('click', () => {
    input.focus();
    input.style.border = '3px solid rgb(0, 255, 115)';


});



// ratrear uma palavra




// Selecionar os elementos
const botaoMenu = document.querySelector('.activ_menu');
const menu2 = document.querySelector('.menu');
const conteudo2 = document.querySelector('.contain');
const botaoMenuL = document.querySelector('.activ_menu2');

// Variável para controlar o estado (menu ou conteúdo)
let mostrarMenu = false;

// Função para alternar entre menu e conteúdo
// function alternarMenuConteudo() {
//   if (mostrarMenu) {
//     // Esconder o menu e mostrar o conteúdo
//     menu2.style.display = 'none';
//     conteudo2.style.display = 'block';
//     conteudo2.style.gridTemplateColumns = '1fr'; // Definir layout em grid para o conteúdo
//     mostrarMenu = false;
//   } else {
//     // Mostrar o menu e esconder o conteúdo
//     menu2.style.display = 'block';
//     conteudo2.style.cssText = `
//     display: grid;
//     grid-template-columns: 18em auto;
//     grid-template-rows: 100vh;  /* Ajustado para 100% da altura da viewport */
//     grid-template-areas: 
//       "menu1 music";
//     gap: 1em;
//     width: 100%;
//     height: 100%;
//     background-color: rgb(0, 0, 0);
//   `;
//     mostrarMenu = true;
//   }
// }
botaoMenu.style.display = ''
botaoMenu.addEventListener('click', () => {
  if (mostrarMenu) {
    // Esconder o menu e mostrar o conteúdo
    menu2.style.display = 'none';
    conteudo2.style.display = 'block';
    conteudo2.style.gridTemplateColumns = '1fr'; // Definir layout em grid para o conteúdo
    mostrarMenu = false;
  } else {
    // Mostrar o menu e esconder o conteúdo
    menu2.style.display = 'block';
    conteudo2.style.cssText = `
    display: grid;
    grid-template-columns: 18em auto;
    grid-template-rows: 100vh;  /* Ajustado para 100% da altura da viewport */
    grid-template-areas: 
      "menu1 music";
    gap: 1em;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
  `;
    mostrarMenu = true;
  }

}
);
botaoMenuL.style.display = ''
botaoMenuL.addEventListener('click', () => {
  if (mostrarMenu) {
    // Esconder o menu e mostrar o conteúdo
    menu2.style.display = 'none';
    conteudo2.style.display = 'block';
    conteudo2.style.gridTemplateColumns = '1fr'; // Definir layout em grid para o conteúdo
    mostrarMenu = false;
  } else {
    // Mostrar o menu e esconder o conteúdo
    menu2.style.display = 'block';
    conteudo2.style.cssText = `
    display: grid;
    grid-template-columns: 18em auto;
    grid-template-rows: 100vh;  /* Ajustado para 100% da altura da viewport */
    grid-template-areas: 
      "menu1 music";
    gap: 1em;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);wa
  `;
    mostrarMenu = true;
  }
}
);



// botaopreto.addEventListener('click', function() {
//   linkEstilo.href = (linkEstilo.href.includes('menu')) ? 'musicBrank.css' : 'music.css';
// });





function adicionarConteudo() {
  var conteudo = document.getElementById('conteudo');
  let button_M = document.querySelector('.button_M')
  var novoHtml = `
  <div class="musica_nova"> <button  class="musica_nova_button"  onclick="removerConteudo()" >Remover lista</button> <br>
  <button   class="musica_nova_button" onclick="adicionarMusica()"> adicionar Musica+</button>
  <button  class="musica_nova_button"  onclick="removerMusica()"> Remover Musica</button>

  <div class="resposta"></div>

</div>
  `;
  conteudo.innerHTML += novoHtml;
  button_M.style.display = 'none'
}
function removerConteudo() {
  var conteudo = document.getElementById('conteudo');
  let resp = confirm('Voce quer mesmo deletar sua playlist')
  let button_M = document.querySelector('.button_M')
  console.log(resp)
  let novoHtml = ''
  if (resp === true){
  conteudo.innerHTML -= novoHtml;
  button_M.style.display = 'block'
  }
}

function adicionarMusica() {
  var conteudo = document.querySelector('.resposta');
  let musica = prompt('mande o link da musica')
  let nome_musica = prompt('qual o nome da musica?')
  var novoHtml = ` <a class='link_navb' href="${musica}">${nome_musica} <a>`;
  if (novoHtml != null) {
    conteudo.innerHTML += novoHtml;
  }
  
}

function removerMusica() {
  var conteudo = document.querySelector('.resposta');
  let resp = confirm('Voce quer mesmo deletar sua musica')
  console.log(resp)
  if (resp === true){
    if (conteudo ==="" && conteudo === NaN){
        conteudo.innerHTML = "";}
        else{
          conteudo.innerHTML = ''
        
        }

  }
}





// Função para buscar uma palavra específica na página e selecioná-la
function buscarPalavra() {
  // Obter a palavra a ser pesquisada
  var palavra = document.getElementById('palavra').value;
  var palavra2 = document.getElementById('palavra');

  // Definir a área de busca (limitar a pesquisa ao elemento com classe "music2")
  let area_de_busca = document.querySelector('.music2');
  palavra2.style.display ='none';
  if (palavra === "") {
    alert('Por favor, insira uma palavra para pesquisar.');
  }
  // Limpar a seleção anterior (se houver)
  // Verificar o método de seleção de texto disponível no navegador
  if (window.getSelection) {
    // Chrome
    if (window.getSelection().empty) {
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    // IE?
    document.selection.empty();
  }




  // Buscar a palavra na página
  // Utilizar o método window.find() para buscar a palavra 'palavra' dentro do conteúdo da página
  var encontrou = window.find(palavra);
  var encontrou3 = window.find(palavra);
  // Verificar se a palavra está presente no texto da variável 'area_de_busca'
  var encontrou2 = area_de_busca.textContent.includes(palavra);

  // Armazenar a palavra a ser pesquisada em uma variávelz
  var busca = palavra;

  // Verificar se a palavra foi encontrada em alguma das pesquisas
  if (!encontrou && !encontrou2 || encontrou3) {
    // Se a palavra não foi encontrada, exibir um alerta informando ao usuário
    alert('A palavra "' + palavra + '" não foi encontrada na página.');
  }
  palavra2.style.display ='';
  palavra2.style.border = 'none';
  scrollIntoView(palavra);
  indexOf(palavra2);

}






const botaopreto = document.querySelector('.button_preto_branco');
const linkEstilo = document.querySelector('link[rel="stylesheet"]'); // Seleciona o link do CSS atual

botaopreto.addEventListener('click', function() {
  linkEstilo.href = (linkEstilo.href.includes('music.css')) ? 'musicBrank.css' : 'music.css';
});

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


main = () => {


let botao = document.querySelector(".button");
let codigoMusica = document.getElementById("codigoMusica");

botao.addEventListener("click", function() {
  if (codigoMusica.style.display === "none") {
    codigoMusica.style.display = "block";
  } else {
    codigoMusica.style.display = "none";
  }
});




botao = document.querySelector("#button1",);
let codigoMusica1 = document.getElementById("codigoMusica1");

botao.addEventListener("click", function() {
  if (codigoMusica1.style.display === "none") {
    codigoMusica1.style.display = "block";
  } else {
    codigoMusica1.style.display = "none";
  }
});

botao = document.querySelector("#button2");
let codigoMusica2 = document.getElementById("codigoMusica2");

botao.addEventListener("click", function() {
  if (codigoMusica2.style.display === "none") {
    codigoMusica2.style.display = "block";
  } else {
    codigoMusica2.style.display = "none";
  }
});
 
botao = document.querySelector("#button3");
let codigoMusica3 = document.getElementById("codigoMusica3");

botao.addEventListener("click", function() {
  if (codigoMusica3.style.display === "none") {
    codigoMusica3.style.display = "block";
  } else {
    codigoMusica3.style.display = "none";
  }
});

botao = document.querySelector("#button4");
let codigoMusica4 = document.getElementById("codigoMusica4");

botao.addEventListener("click", function() {
  if (codigoMusica4.style.display === "none") {
    codigoMusica4.style.display = "block";
  } else {
    codigoMusica4.style.display = "none";
  }
});

botao = document.querySelector("#button5");
let codigoMusica5 = document.getElementById("codigoMusica5");

botao.addEventListener("click", function() {
  if (codigoMusica5.style.display === "none") {
    codigoMusica5.style.display = "block";
  } else {
    codigoMusica5.style.display = "none";
  }
});

botao = document.querySelector("#button6");
let codigoMusica6 = document.getElementById("codigoMusica6");

botao.addEventListener("click", function() {
  if (codigoMusica6.style.display === "none") {
    codigoMusica6.style.display = "block";
  } else {
    codigoMusica6.style.display = "none";
  }
});

botao = document.querySelector("#button7");
let codigoMusica7 = document.getElementById("codigoMusica7");

botao.addEventListener("click", function() {
  if (codigoMusica7.style.display === "none") {
    codigoMusica7.style.display = "block";
  } else {
    codigoMusica7.style.display = "none";
  }
});

botao = document.querySelector("#button8");
let codigoMusica8 = document.getElementById("codigoMusica8");

botao.addEventListener("click", function() {
  if (codigoMusica8.style.display === "none") {
    codigoMusica8.style.display = "block";
  } else {
    codigoMusica8.style.display = "none";
  }
});

botao = document.querySelector("#button9");
let codigoMusica9 = document.getElementById("codigoMusica9");

botao.addEventListener("click", function() {
  if (codigoMusica9.style.display === "none") {
    codigoMusica9.style.display = "block";
  } else {
    codigoMusica9.style.display = "none";
  }
});





// LINHA 2 ROCK

botaoR1 = document.querySelector("#buttonR1");
let codigoMusicaR1 = document.getElementById("codigoMusicaR1");

botao.addEventListener("click", function() {
  if (codigoMusicaR1.style.display === "none") {
    codigoMusicaR1.style.display = "block";
  } else {
    codigoMusicaR1.style.display = "none";
  }
});


const button = document.querySelector(".button");

button.addEventListener("click", function() {
  // Altera a cor do elemento quando ele é clicado
  button.classList.add("focus");
});

button.addEventListener("select", function() {
  // Altera a cor do elemento quando ele é selecionado
  button.classList.add("selected");
});

}

main();