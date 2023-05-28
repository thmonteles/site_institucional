function updateButtonVisibility() {
    var cards = document.querySelectorAll('.card');
    var showMoreButton = document.getElementById('show-more');
    var showLessButton = document.getElementById('show-less');
    var icone = document.querySelector('.icone');
  
    // Verifica quantos cards estão sendo exibidos
    var numVisibleCards = 0;
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].style.display !== 'none') {
        numVisibleCards++;
      }
    }
  
    // Exibe ou oculta o botão "Ver menos" conforme necessário
    if (numVisibleCards === cards.length) {
      showMoreButton.style.display = 'none';
      showLessButton.style.display = 'block';
      icone.style.display = 'none';
    } else {
      showMoreButton.style.display = 'block';
      showLessButton.style.display = 'none';
      icone.style.display = 'block';
    }
  }
  
  function showCards(qtdCards) {
    var cards = document.querySelectorAll('.card');
  
    for (var i = 0; i < cards.length; i++) {
      if (i < qtdCards) {
        cards[i].style.display = 'block';
      } else {
        cards[i].style.display = 'none';
      }
    }
    updateButtonVisibility();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Mostra os primeiros 3 cards por padrão
    showCards(3);
  
    // Define o evento de clique para o botão "Ver mais"
    document.getElementById('show-more').addEventListener('click', function() {
      showCards(9); // Mostra mais 2 cards
    });
  
    // Define o evento de clique para o botão "Ver menos"
    document.getElementById('show-less').addEventListener('click', function() {
      showCards(3); // Mostra apenas os primeiros 3 cards
    });
  });
  