const navbar = document.querySelector(".header__navbar");

function animateBars() {
  document.querySelector("#bars1").classList.toggle("animate__line1");
  document.querySelector("#bars2").classList.toggle("animate__line2");
  document.querySelector("#bars3").classList.toggle("animate__line3");
  navbar.classList.toggle("header__navbar--show");
}

document
  .querySelector(".header__container--menuBurguer")
  .addEventListener("click", animateBars);

navbar.addEventListener("click", () => {
  animateBars();
});

// logica carrousel de reseñas

let slideIndex = 1;
showSlides(slideIndex);

//Si desean cambiar el tiempo de transicion de las reseñas, cambien el 7000ms por el tiempo que deseen
setInterval(() => {
  plusSlides(1);
}, 7000);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlice");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// Logica carrousel cards

let cardIndex = 1;
showCard(cardIndex);

setInterval(() => {
  plusCard(1);
}, 7000);

function plusCard(n) {
  showCard((cardIndex += n));
}

function currentCard(n) {
  showCard((cardIndex = n));
}

function showCard(n) {
  let i;
  let cards = document.getElementsByClassName("card");
  let dots = document.getElementsByClassName("dotCard");

  console.log(cards);
  if (n > cards.length) {
    cardIndex = 1;
  }
  if (n < 1) {
    cardIndex = cards.length;
  }
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("activeCard");
  }
  cards[cardIndex - 1].style.display = "flex";
  dots[cardIndex - 1].classList.add("activeCard");
}
