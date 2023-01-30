let menuVisible = false;



function efectohabilitades() {
    var cursos = document.getElementById("cursos");
    var distancia_cursos =window.innerHeight - cursos.getBoundingClientRect ().top;
    if(distancia_cursos >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("diseñoux");
        habilidades[3].classList.add("photoshop");
        habilidades[4].classList.add("aftereffects");
        habilidades[5].classList.add("ilustrator");
        
        
    }
}

window.onscroll = function() {
    efectohabilitades();
}