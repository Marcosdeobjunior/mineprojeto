// Carrega o menu em todas as páginas
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;

    // Adiciona funcionalidade ao submenu Biblioteca
    const bibliotecaBtn = document.getElementById('bibliotecaBtn');
    const bibliotecaMenu = document.getElementById('bibliotecaMenu');

    bibliotecaBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Previne o fechamento imediato
      bibliotecaMenu.classList.toggle('hidden');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (!bibliotecaMenu.contains(e.target) && !bibliotecaBtn.contains(e.target)) {
        bibliotecaMenu.classList.add('hidden');
      }
    });
  });

