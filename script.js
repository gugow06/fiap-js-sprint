// Pegando os inputs do HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Fazendo o botao criar os eventos
 botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        DesativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagem(indice);
    })
 })

 // Função para mostrar a imagem
function mostrarImagem(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

// Função para mudar o botão selecionado
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

// Função para esconder a imagem que era a ativa
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

// Função para mudar o botão selecionado
function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function validarFormulario() {
    // Obter valores dos campos do formulário
    var nome = document.getElementById("nome").value.trim();
    var telefone = document.getElementById("foneid").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();
  
    // Validar campo nome
    if (nome == "") {
      alert("Por favor, preencha o campo Nome");
      return false;
    }
  
    // Validar campo telefone
    if (telefone == "") {
      alert("Por favor, preencha o campo Telefone");
      return false;
    }
  
    // Validar campo email
    if (email == "") {
      alert("Por favor, preencha o campo E-mail");
      return false;
    } else if (!validarEmail(email)) {
      alert("Por favor, insira um endereço de e-mail válido");
      return false;
    }
  
    // Validar campo mensagem
    if (mensagem == "") {
      alert("Por favor, preencha o campo Mensagem");
      return false;
    }
  
    // Se todos os campos forem válidos, permitir o envio do formulário
    return true;
  }
  
  // Função para validar o formato de e-mail
  function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }