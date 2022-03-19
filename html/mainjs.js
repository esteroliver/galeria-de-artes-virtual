const slideshow = document.querySelectorAll(".intro .slide");

const proximoslidedelay = 3000;
let contador = 0;

slideshow[contador].style.opacity = 1;

setInterval(proximoslide, proximoslidedelay)

function proximoslide(){
    slideshow[contador].style.opacity = 0;
    contador = (contador + 1) % slideshow.length;
    slideshow[contador].style.opacity = 1;

 
}