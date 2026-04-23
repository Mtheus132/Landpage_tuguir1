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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Remove o foco do link para evitar saltos visuais
            this.blur();
        }
    });
});