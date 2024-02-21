function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Pega o valor do email
    var email = document.getElementById('email').value;

    // Verifica se o email é válido
    if (validateEmail(email)) {
      // Mostra a mensagem de sucesso
      document.getElementById('successMessage').style.display = 'block';
      //Esconde container-formulario
      document.getElementById('container-formulario').style.display = 'none';
      // Atualiza o email exibido na mensagem de sucesso
      document.getElementById('emailDisplay').textContent = email;
    } else {
      // Caso o email não seja válido, alerta o usuário
      alert('Por favor, insira um endereço de email válido.');
    }
  });

  document.getElementById('dismissBtn').addEventListener('click', function () {
    // Esconde a mensagem de sucesso ao clicar no botão "Dispensar mensagem"
    document.getElementById('successMessage').style.display = 'none';
    //Mostra o container-formulario
    document.getElementById('container-formulario').style.display = 'flex';
  });