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

// Removemos o DOMContentLoaded. Agora o documento inteiro fica "vigiando" o clique o tempo todo.
document.addEventListener('click', function(e) {
    
    // Procura o link com # mais próximo de onde o mouse clicou
    const link = e.target.closest('a[href^="#"]');
    
    if (!link) return;

    const href = link.getAttribute('href');
    if (href === '#') return;

    // A JOGADA DE MESTRE: Removemos a # do texto e buscamos direto pelo ID
    // Isso impede que o "ç" de "lançamentos" quebre o código!
    const idDestino = href.substring(1); 
    const secaoDestino = document.getElementById(idDestino);

    if (secaoDestino) {
        e.preventDefault(); // <-- O bloqueio definitivo da hashtag na URL
        
        secaoDestino.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

