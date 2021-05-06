function slider(n){
	if(n == 5){n = 1;}
	if($(window).width() < 781){
		_taille = "-s";
	}
	else{
		_taille = "";
	}
	var credits = ['','Carte : OpenStreetMap', 'Photo : ', 'Photo : ', 'Photo : '];
	var color_credits = ['','#000', '#c6c6c6', '#c6c6c6', '#c6c6c6'];
	var imageUrl = "images/fond-" + n + _taille + ".jpg"; 
		if(n%2 == 0){
				$("#haut").css("background", "url(" + imageUrl + ")");
				$("#haut").css("background-size", "cover");
				$("#haut").css("background-position", "left center");
				$("#background").fadeOut(1000);
			 }
			 else{
				$("#background").css("background", "url(" + imageUrl + ")");
				$("#background").css("background-size", "cover");
				$("#background").css("background-position", "left center");
				$("#background").fadeIn(1000);
			 }
			 $("#credit").html(credits[n]);
			 $("#credit").css("color", color_credits[n]);
	n++;
	setTimeout(slider, 5000, n);
}
$(window).on('load', function(){
	setTimeout(slider, 5000, 2);
	if($(window).height() < 650){
		$("#pnrgm").css({"top":"10%"});
		$("#btn-saisir").css({"bottom":"calc(12% + 190px)"});
	}
});