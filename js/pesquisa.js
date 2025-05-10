// Salva o termo de pesquisa e redireciona para pesquisa.html
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        localStorage.setItem('termoPesquisa', searchInput.value);
        window.location.href = 'pesquisa.html';
      }
    });
  }
});

