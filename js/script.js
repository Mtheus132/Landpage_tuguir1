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

document.addEventListener('DOMContentLoaded', function() {
    // Fica "escutando" qualquer clique no corpo do site
    document.body.addEventListener('click', function(e) {
        
        // Verifica se o que foi clicado (ou o pai do elemento clicado) é um link com #
        const link = e.target.closest('a[href^="#"]');
        
        // Se não for um link de âncora, ignora e deixa o site seguir a vida
        if (!link) return;

        const destinoTag = link.getAttribute('href');
        
        // Se for só um "#" vazio, ignora
        if (destinoTag === '#') return;

        const secaoDestino = document.querySelector(destinoTag);

        // Se a seção existir no site, ele bloqueia a URL e rola suave
        if (secaoDestino) {
            e.preventDefault(); // <-- O bloqueio da hashtag
            
            secaoDestino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

