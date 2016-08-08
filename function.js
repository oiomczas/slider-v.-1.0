

(function () {
  'use strict';

  var images = [
    {src: "images/jeden.jpg", desc: "Palmy i molo"},
    {src: "images/dwa.jpg", desc: "Drzewa"},
    {src: "images/trzy.jpg", desc: "Dmuchawce"},
    {src: "images/cztery.jpg", desc: "Drzewko wiosna"},
    {src: "images/piec.jpg", desc: "Drzewko nad woda"}
  ],
    index = 0,
    image = document.querySelector('.img'),
    description = document.querySelector('figcaption'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    timerImages = setInterval(updateIMG, 2000),
    timerDesc = setInterval(updateFigcaption, 2000);
    
  function updateFigcaption() {  //podmienia podpis obrazka
    description.innerHTML = images[index].desc;
  }
  
  function stopStart() {  //zatrzymuje i wznawia interwal
    clearInterval(timerImages);
    timerImages = setInterval(updateIMG, 2000);
    timerDesc = setInterval(updateFigcaption, 2000);
  }
  
  function prevImg() {   //ustawia poprrzedni obrazek
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    image.src = images[index].src;
    updateFigcaption();
    stopStart();
  }
  
  
  function updateIMG() {  //ustawia nastepny obrazek
    index++;
    if (index > images.length) {
      index = 0;
    }
    image.src = images[index].src;
    
  }
  
  
  function stopInt() {   //zatrzymuje interwa;
    clearInterval(timerImages);
  }
  
  
  image.addEventListener('mouseover', stopInt);
  image.addEventListener('mouseout', stopStart);
  prev.addEventListener('click', prevImg);
  
  next.addEventListener('click', function () {
    updateIMG();
    updateFigcaption();
    stopStart();
  });
  
  
  
})();


  
