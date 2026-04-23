console.log("Funcionou?")

function enviarWhatsApp() {
  const telefone = "551156664996"; 
  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const projeto = document.getElementById('projeto').value;

  if (nome === "" || email === "" || projeto === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const mensagem = `Olá! Tenho interesse em criar minha própria marca.%0A%0A` +
                   `*Nome:* ${nome}%0A` +
                   `*E-mail:* ${email}%0A` +
                   `*Projeto:* ${projeto}`;

  const url = `https://wa.me/${telefone}?text=${mensagem}`;
  
  window.open(url, '_blank');
}

function enviarRepresentante() {
  const telefone = "551156664996"; 
  
  const nome = document.getElementById('rep-nome').value;
  const email = document.getElementById('rep-email').value;
  const experiencia = document.getElementById('rep-experiencia').value;

  if (!nome || !email || !experiencia) {
    alert("Por favor, preencha todos os campos para se candidatar.");
    return;
  }

  const mensagem = `Olá! Gostaria de me candidatar como representante do GrupoTuguir.%0A%0A` +
                   `*Nome/Razão Social:* ${nome}%0A` +
                   `*E-mail:* ${email}%0A` +
                   `*Experiência:* ${experiencia}`;

  const url = `https://wa.me/${telefone}?text=${mensagem}`;
  
  window.open(url, '_blank');
}

// Seleciona todos os links do menu que começam com "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Esta linha é a mágica: bloqueia a # de ir para a URL
        e.preventDefault();

        // Pega o ID da seção de destino clicada
        const targetId = this.getAttribute('href');

        // Ignora se o link for apenas um "#" vazio
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        // Faz a rolagem suave até a seção correspondente
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

