

// Carrossel de imagens por galeria

function iniciarCarrossel(galeriaId) {
  const galeria = document.getElementById(galeriaId);
  const imagens = galeria.querySelectorAll('.galeria-img');
  let index = 0;

  function mostrarImagem(i) {
    imagens.forEach(img => img.classList.remove('active'));
    imagens[i].classList.add('active');
  }

  function avancar(n) {
    index = (index + n + imagens.length) % imagens.length;
    mostrarImagem(index);
  }

  // Exposição automática
  setInterval(() => {
    avancar(1);
  }, 4000);

  // Expor funções globais para botões
  window.trocarImagem = (n, galeriaId) => {
    if (galeriaId === galeria.id) {
      avancar(n);
    }
  };
}

iniciarCarrossel('galeria-casa1');
