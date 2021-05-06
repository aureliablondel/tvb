var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
// :Récupérer l'id de l'élément btnClose.
btnClose.addEventListener('click',closeModal);
// :récupèrer l'évenement clic et déclenche la fonction closeModal
function closeModal() {
overlay.style.display='none';
}
// : définit la fonction qui ferme la popup en rendant invisible l'élément overlay;

let imgBlock = document.getElementsByClassName('display-container');
let textBlock = document.getElementsByClassName('hover-container');

for(let i=0 ; i<imgBlock.length ; i++){
    imgBlock[i].addEventListener('mouseenter', (event)=>{
        
        if(textBlock[i].style.display == 'block'){
            textBlock[i].style.display ='none';		
            imgBlock[i].style.display = 'block';
            
        }else{
            textBlock[i].style.display ='block';		
            imgBlock[i].style.display = 'none';
        }
    })
    
    
    imgBlock[i].addEventListener('mouseout', (event)=>{
        
        if(textBlock[i].style.display == 'block'){
            textBlock[i].style.display ='none';
            imgBlock[i].style.display = 'block';
            
        }else{
            textBlock[i].style.display ='block';
            imgBlock[i].style.display = 'none';
        }
    });
    };
    
   
 