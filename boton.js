window.onscroll = function() {
    const button = document.getElementById('back-to-top');
    if (window.pageYOffset > 1) { // Si se ha desplazado más de 1px
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  };
  
  document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  