document.addEventListener('DOMContentLoaded', () => {
  const cadastro = document.querySelector('#buttonCadastro');
  const nomeU = document.querySelector('#nomeU');
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  const revisarSenha = document.querySelector('#revisarSenha');
  const erroLog = document.querySelector('.erro');

  let contas = JSON.parse(localStorage.getItem('contas')) || [];

  const contaJaCadastrada = (emailx, senhax) => {
    return contas.some(conta => conta.email === emailx && conta.senha === senhax);
  };

  function abri_login() {
    setTimeout(() => {
      window.open('login.html');
      location.href = 'login.html';
    }, 1000);
  }

  cadastro.addEventListener('click', () => {
    try {
      if (email.value === '' || senha.value === '') {
        erroLog.style.display = 'block';
        erroLog.textContent = 'Preencha todos os campos';
      } else if (contaJaCadastrada(email.value, senha.value)) {
        erroLog.style.display = 'block';
        erroLog.textContent = 'Essa conta já existe';
      } else {
        contas.push({ email: email.value, senha: senha.value });
        localStorage.setItem('contas', JSON.stringify(contas));
        console.log(contas);
        abri_login();
      }
    } catch (error) {
      console.error(error);
      erroLog.style.display = 'block';
      erroLog.textContent = 'Erro ao cadastrar';
    }
  });
});
