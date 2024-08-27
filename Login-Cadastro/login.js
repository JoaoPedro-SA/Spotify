document.addEventListener('DOMContentLoaded', () => {
contas = JSON.parse(localStorage.getItem('contas'));
console.log(contas);


let acesso = false;
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const button = document.querySelector('.corpo_button');
const erro = document.querySelector('.erro');
button.addEventListener('click',() =>{    
     for(let i = 0; i < contas.length ; i++){
          if (email.value === contas[i].email && 
               senha.value === contas[i].senha ) {
                    console.log('acesso permitido');
                    acesso = true;
          }
     }
     if (acesso){
          location.href = '/Projeto Spotfy (Finalizado)/Pagina_musica/music.html';
     }
     else {
          erro.style.display = "block";
          erro.textContent = "Erro no login"
     }

})

});