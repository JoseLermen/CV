const introdu = document.getElementById("inicio");
const descricao = document.getElementById("descricao");
const educacao = document.getElementById("educacao");
const habilidades = document.getElementById("habilidades");
const experiencias = document.getElementById("experiencias");
const contato = document.getElementById("contato");

const arr = [introdu, descricao, educacao, habilidades, experiencias, contato];



function menuIntro(){
    introdu.style.display = 'grid';
    descricao.style.display = "none";
    educacao.style.display = "none";
    habilidades.style.display = "none";
    experiencias.style.display = "none";
    contato.style.display = "none";
}


function menuDesc(){
    introdu.style.display = "none";
    descricao.style.display = "grid";
    educacao.style.display = "none";
    habilidades.style.display = "none";
    experiencias.style.display = "none";
    contato.style.display = "none";
}

function menuEdu(){
    introdu.style.display = "none";
    descricao.style.display = "none";
    educacao.style.display = "grid";
    habilidades.style.display = "none";
    experiencias.style.display = "none";
    contato.style.display = "none";
}

function menuHab(){
    introdu.style.display = "none";
    descricao.style.display = "none";
    educacao.style.display = "none";
    habilidades.style.display = "grid";
    experiencias.style.display = "none";
    contato.style.display = "none";
}

function menuExp(){
    introdu.style.display = "none";
    descricao.style.display = "none";
    educacao.style.display = "none";
    habilidades.style.display = "none";
    experiencias.style.display = "grid";
    contato.style.display = "none";
}

function menuCont(){
    introdu.style.display = "none";
    descricao.style.display = "none";
    educacao.style.display = "none";
    habilidades.style.display = "none";
    experiencias.style.display = "none";
    contato.style.display = "grid";
}


const menu1 = document.getElementById("intro");
const menu2 = document.getElementById("desc");
const menu3 = document.getElementById("edu");
const menu4 = document.getElementById("habi");
const menu5 = document.getElementById("exp");
const menu6 = document.getElementById("cont");


menu1.addEventListener("click", menuIntro);

menu2.addEventListener("click", menuDesc);

menu3.addEventListener("click", menuEdu);

menu4.addEventListener("click", menuHab);

menu5.addEventListener("click", menuExp);

menu6.addEventListener("click", menuCont);