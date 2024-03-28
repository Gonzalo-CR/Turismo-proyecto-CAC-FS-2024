let index = 0;
const slides = document.querySelectorAll('.slide');
const slides2 = document.querySelectorAll('.slide2');
const slides3 = document.querySelectorAll('.slide3');
const slides4 = document.querySelectorAll('.slide4');

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  slides[index].scrollIntoView();
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  slides[index].scrollIntoView();
});




document.getElementById('next2').addEventListener('click', () => {
  index = (index + 1) % slides2.length;
  slides2[index].scrollIntoView();
});

document.getElementById('prev2').addEventListener('click', () => {
  index = (index - 1 + slides2.length) % slides2.length;
  slides2[index].scrollIntoView();
});




document.getElementById('next3').addEventListener('click', () => {
  index = (index + 1) % slides3.length;
  slides3[index].scrollIntoView();
});

document.getElementById('prev3').addEventListener('click', () => {
  index = (index - 1 + slides3.length) % slides3.length;
  slides3[index].scrollIntoView();
});



document.getElementById('next4').addEventListener('click', () => {
  index = (index + 1) % slides4.length;
  slides4[index].scrollIntoView();
});

document.getElementById('prev4').addEventListener('click', () => {
  index = (index - 1 + slides4.length) % slides4.length;
  slides4[index].scrollIntoView();
});
