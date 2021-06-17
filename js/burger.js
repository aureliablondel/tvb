// Affichage du menu rideau

let burger = document.querySelector('.burger');
let togglemenu = document.querySelector('.nav-container');

burger.addEventListener('click', () => {      
    if(window.screen.width < 768){
        togglemenu.style.width = "50%";
    }
    else{
        togglemenu.style.width = "30%";
    }  
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

// Affichage politique confidentialité

let polconf = document.querySelector('.btn-polconf');
let togglepolconf = document.querySelector('.text-polconf');

polconf.addEventListener('click', () => {
    togglepolconf.style.height = '100%';    
});

// Fermeture politique confidentialité

let btnClose = document.querySelector('.btnClose-polconf');

btnClose.addEventListener('click', () => {
    togglepolconf.style.height = "0%";
});
