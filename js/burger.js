// Affichage du menu rideau

let burger = document.querySelector('.burger');
let togglemenu = document.querySelector('.nav-container');

burger.addEventListener('click', () => {
    togglemenu.style.width = "50%";
});
  
// Fermeture du menu rideau

let btnCloseNav = document.querySelector('.btnCloseNav');

btnCloseNav.addEventListener('click', () => {
    togglemenu.style.width = "0%";
});

// Disparition du menu lors de la sélection d'une ancre 

let anchor = document.getElementsByClassName('anchor');

for(let i=0; i<anchor.length; i++){
    anchor[i].addEventListener('click', () => {
        togglemenu.style.width = "0%";
    });
};
