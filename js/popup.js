// Affichage des popups
// Saisie observations - Pictos ABC - Pictos Trames naturelles - Pictos aide

let btnPopup = document.getElementsByClassName('btnPopup');
let overlay = document.getElementsByClassName('overlay');

for (let i=0; i<btnPopup.length; i++){
	btnPopup[i].addEventListener('click', () => {
		overlay[i].style.display = 'block';
	})
};

// Fermeture des popups

let btnClosePopup = document.getElementsByClassName('btnClosePopup');

for(let i=0; i<btnClosePopup.length; i++){
	btnClosePopup[i].addEventListener('click',() => {
		overlay[i].style.display = 'none';
	})
};