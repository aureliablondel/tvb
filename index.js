// $('.slide img').slice(0).hide();
//     setInterval(function(){
//       $('.slide > :first-child').fadeOut(1500).next('img').fadeIn(1500).end().appendTo('.slide');
//       },2000);

function slider(n){

	let header = document.querySelector('.index-header');
	let slider = document.querySelector('.slider-block');
	let credits = ['','Carte : OpenStreetMap', 'Photo : ', 'Photo : ', 'Photo : '];
	let colorCredits = ['','#000', '#c6c6c6', '#c6c6c6', '#c6c6c6'];
	let imgUrl = "images/fond-" + n + ".jpg";

	if(n == 5){
		n = 1
	};

	
	// if($(window).width() < 781){
	// 	_taille = "-s";
	// }
	// else{
	// 	_taille = "";
	// }
	
	
	 
	if(n%2 == 0){
	 			header.style("background-image", "url(" + imgUrl + ")");
			header.style("background-size", "cover");
	 			header.style("background-position", "left center");
	 			slider.fadeOut(1000);
	 		 }
	 		 else{
	 			slider.style("background", "url(" + imgUrl + ")");
	 			slider.style("background-size", "cover");
	 			slider.style("background-position", "left center");
	 			slider.fadeIn(1000);
	// 		 }
	// 		 $("#credit").html(credits[n]);
	// 		 $("#credit").css("color", color_credits[n]);
	 n++;
	//  setTimeout(slider, 5000, n);
	
}};
document.addEventListener('load', (event)=>{
	setInterval('slider(n)', 5000);
});

// $(window).on('load', function(){
// 	setTimeout(slider, 5000, 2);
// 	if($(window).height() < 650){
// 		$("#pnrgm").css({"top":"10%"});
// 		$("#btn-saisir").css({"bottom":"calc(12% + 190px)"});
// 	}
// });


// recouvrement des images par article

let imgBlock = document.getElementsByClassName('display-container');
let textBlock = document.getElementsByClassName('hover-container');



// imgBlock.addEventListener('mouseenter', (event)=>{
// 	imgBlock.classList.toggle('hover-container');
// 	textBlock.style.display = 'block';

// });

// textBlock.addEventListener('mouseout', (event)=>{
// 	textBlock.classList.toggle('display-container');
// 	imgBlock.style.display = 'block';
// 	textBlock.style.display = 'none';
// // 	if(textBlock[i].style.display == 'block'){
// // 		imgBlock[i].style.display = 'none';
// // 	}else{
// // 		imgBlock[i].style.display = 'block';
// // 	}
// // });
// });

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





	
