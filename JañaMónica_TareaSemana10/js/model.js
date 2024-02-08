//declarar variables

description1=document.getElementById("description1");
description2=document.getElementById("description2");
description3=document.getElementById("description3");
//funciones
function mostrar_description1(){
    description1.style.display="flex";
}

function mostrar_description2(){
    description2.style.display="flex";
}

function mostrar_description3(){
    description3.style.display="flex";
}

function cerrar_description1(){
    description1.style.display="none";
}

function cerrar_description2(){
    description2.style.display="none";
}
function cerrar_description3(){
    description3.style.display="none";
}

document.getElementById("img1").addEventListener("click",mostrar_description1);
document.getElementById("img2").addEventListener("click",mostrar_description2);
document.getElementById("img3").addEventListener("click",mostrar_description3);


document.getElementById("cerrar1").addEventListener("click",cerrar_description1);
document.getElementById("cerrar2").addEventListener("click",cerrar_description2);
document.getElementById("cerrar3").addEventListener("click",cerrar_description3);