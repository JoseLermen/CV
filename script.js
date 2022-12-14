const introdu = document.getElementById("inicio");
const descricao = document.getElementById("descricao");
const educacao = document.getElementById("educacao");
const habilidades = document.getElementById("habilidades");
const experiencias = document.getElementById("experiencias");
const contato = document.getElementById("contato");

const arr = [introdu, descricao, educacao, habilidades, experiencias, contato];

function menuIntro() {
  introdu.style.display = "grid";
  descricao.style.display = "none";
  educacao.style.display = "none";
  habilidades.style.display = "none";
  experiencias.style.display = "none";
  contato.style.display = "none";
}

function menuDesc() {
  introdu.style.display = "none";
  descricao.style.display = "grid";
  educacao.style.display = "none";
  habilidades.style.display = "none";
  experiencias.style.display = "none";
  contato.style.display = "none";
}

function menuEdu() {
  introdu.style.display = "none";
  descricao.style.display = "none";
  educacao.style.display = "grid";
  habilidades.style.display = "none";
  experiencias.style.display = "none";
  contato.style.display = "none";
}

function menuHab() {
  introdu.style.display = "none";
  descricao.style.display = "none";
  educacao.style.display = "none";
  habilidades.style.display = "grid";
  experiencias.style.display = "none";
  contato.style.display = "none";
}

function menuExp() {
  introdu.style.display = "none";
  descricao.style.display = "none";
  educacao.style.display = "none";
  habilidades.style.display = "none";
  experiencias.style.display = "grid";
  contato.style.display = "none";
}

function menuCont() {
  introdu.style.display = "none";
  descricao.style.display = "none";
  educacao.style.display = "none";
  habilidades.style.display = "none";
  experiencias.style.display = "none";
  contato.style.display = "grid";
}

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const menu1 = document.getElementById("intro");
const menu2 = document.getElementById("desc");
const menu3 = document.getElementById("edu");
const menu4 = document.getElementById("habi");
const menu5 = document.getElementById("exp");
const menu6 = document.getElementById("cont");

const mobile1 = document.querySelector(".intro");
const mobile2 = document.querySelector(".desc");
const mobile3 = document.querySelector(".edu");
const mobile4 = document.querySelector(".habi");
const mobile5 = document.querySelector(".exp");
const mobile6 = document.querySelector(".cont");

menu1.addEventListener("click", menuIntro);

menu2.addEventListener("click", menuDesc);

menu3.addEventListener("click", menuEdu);

menu4.addEventListener("click", menuHab);

menu5.addEventListener("click", menuExp);

menu6.addEventListener("click", menuCont);

mobile1.addEventListener("click", menuIntro);

mobile2.addEventListener("click", menuDesc);

mobile3.addEventListener("click", menuEdu);

mobile4.addEventListener("click", menuHab);

mobile5.addEventListener("click", menuExp);

mobile6.addEventListener("click", menuCont);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1((slideIndex1 = n));
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }

  slides1[slideIndex1 - 1].style.display = "block";
}
