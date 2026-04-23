console.log("Meu JS Está vinculado");

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
};

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
};

  // Pega TODOS os links da página que começam com #
  document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
          
          e.preventDefault(); // Trava primária

          const href = this.getAttribute('href');
          if (href === '#') return;

          // Lê o destino considerando o 'ç'
          const idDestino = decodeURIComponent(href.substring(1));
          const secaoDestino = document.getElementById(idDestino);

          if (secaoDestino) {
              secaoDestino.scrollIntoView({
                  behavior: 'smooth'
              });

              // Limpa a URL na mesma hora
              history.replaceState(null, null, window.location.pathname);
          }
      });
  });


