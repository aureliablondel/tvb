/* Open */
let burgerbtn = document.querySelector('.burger');
let closebtn = document.querySelector('.closebtn');
let anchor = document.querySelector('.anchor-link');
let overlaymenu = document.querySelector('.nav-container');

burgerbtn.addEventListener('click', (event) => {
    overlaymenu.style.width = "20%";
});
  
  /* Close */
  closebtn.addEventListener('click', (event) => {
    overlaymenu.style.width = "0%";
});

anchor.addEventListener('click', (event) => {
    overlaymenu.style.width = "0%";
});


//  Affichage / masquage du menu burger

// let togglemenu = document.querySelector('.fa-bars');
// let list = document.getElementById('list-menu');

// togglemenu.addEventListener('click', (event)=>{    
//     togglemenu.classList.toggle('fa-times');
    
//     if(list.style.display == 'block'){                    
//         list.style.display = 'none';           
//     }else{
//         list.style.display = 'block';        
//     }        
// });
