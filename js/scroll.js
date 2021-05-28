// Affichage bouton "retour en haut de page"
// A partir de 500 px

let btnreturn = document.getElementById('button-return');

window.addEventListener('scroll', () => {    
    if(window.scrollY > 500){
        btnreturn.className = "button-return";
    }else{
        btnreturn.className = "";
    }    
});
