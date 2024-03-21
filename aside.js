var aside = document.getElementById('menu');
var button = document.getElementById('toggle-menu');

button.onclick = function() {
  if (aside.classList.contains('escondido')) {
    aside.classList.remove('escondido');
    button.innerHTML = '<';
  } else {
    aside.classList.add('escondido');
    button.innerHTML = '>';
  }
};

button.onmouseover = function() {
  if (aside.classList.contains('escondido')) {
    button.innerHTML = 'Despliegue';
  }
};

button.onmouseout = function() {
  if (aside.classList.contains('escondido')) {
    button.innerHTML = '>';
  } else {
    button.innerHTML = '<';
  }
};
