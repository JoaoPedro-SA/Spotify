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

//############################### BOTOES DE MENUS LATERAIS DOS 2 NAV #################################################################

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
botaoMenu.addEventListener('click', fecharMenu = () => {
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

fecharMenu();

botaoMenuL.style.display = ''
botaoMenuL.addEventListener('click', fecharMenu2 = () => {
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

fecharMenu2();
//################################################################################################


// botaopreto.addEventListener('click', function() {
//   linkEstilo.href = (linkEstilo.href.includes('menu')) ? 'musicBrank.css' : 'music.css';
// });



// ############# CRIADOR DA LISTA DE MUSICA DA BIBLIOTECA ################################################

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
  if (resp === true) {
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
  if (resp === true) {
    if (conteudo === "" && conteudo === NaN) {
      conteudo.innerHTML = "";
    }
    else {
      conteudo.innerHTML = ''

    }

  }
}

// ##############################################################################################################


//######################## Localizar musicas pelo input #################################################################


// Função para buscar uma palavra específica na página e selecioná-la
function buscarPalavra() {
  // Obter a palavra a ser pesquisada
  var palavra = document.getElementById('palavra').value;
  var palavra2 = document.getElementById('palavra');

  // Definir a área de busca (limitar a pesquisa ao elemento com classe "music2")
  let area_de_busca = document.querySelector('.music2');
  palavra2.style.display = 'none';
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
  palavra2.style.display = '';
  palavra2.style.border = 'none';
  scrollIntoView(palavra);
  indexOf(palavra2);

}

// ####################################################################################################


// ######################### BOTÃO DE TROCA COR DA PAGINA ############################################

const botaopreto = document.querySelector('.button_preto_branco');
const linkEstilo = document.querySelector('link[rel="stylesheet"]'); // Seleciona o link do CSS atual

botaopreto.addEventListener('click', function () {
  linkEstilo.href = (linkEstilo.href.includes('Pagina_musica/music.css')) ? 'Pagina_musica/musicBrank.css' : 'Pagina_musica/music.css';
});

//###################################################################################################

// ########################### FUNCIONAMENTO DAS MUSICAS ###########################################



const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    console.log(this); // Exibe o botão clicado no console
    var DivPai = this.parentElement;
    console.log(DivPai); // Exibe a div pai no console
    var elementoDentroDaDivPai = DivPai.querySelector('.CaixaDeMusica');
    console.log(elementoDentroDaDivPai); // Exibe o elemento dentro da div pai no console
    if (elementoDentroDaDivPai.style.display === "none"){
      elementoDentroDaDivPai.style.display = "block";
    }
    else{
      elementoDentroDaDivPai.style.display = "none";
    }
  });
});



