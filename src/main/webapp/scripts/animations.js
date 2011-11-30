// JavaScript Document
// gestion des animations principales du site avec jQuery 1.6.1

// animation de l'image de profil du visiteur (ou celle par defaut)
var tabDefault = [-50, -25, 0];
var numEtapeDef = 0;

// tableau des valeurs pour les différentes stades d'animation des images de profils
var tabProfil = [-75, -38, 0];
// vitesse d'animation pour les images de profil
var vitesseProfil = 250;
// variable pour le setInterval des profil
var setIntProfil;

// variable pour l'animation hub photos
var margTopPhoto = 13;

// variable pour l'animation des tweets
var margTopTweet = 0;
// variable setInterval pour les tweets
var setIntTweet;

// variable setInterval pour les hotnews
var setIntHotnews;

// variable de stockages du nombre d'onglet dans le menu des sliders
var nbLigne = 0;
var ligneSlide = 0;
var marginTopSlide = 0;
var marginLeftSlide = 0;
var setIntSlide;
// variable pour déterminer si l'animation a été stoppée
var stopSlide = 0;

$(document).ready( function(){
	// on lance l'horloge microsoftmag
	setInterval("changeTime()", 60000);
	
	// masquer la zone de download office
	$("#OfficeDownload .infosContent").css("height", $("#OfficeDownload .infosContent").height() + "px");
	$("#WindowsDownload .infosContent").css("height", $("#WindowsDownload .infosContent").height() + "px");
	$("#OfficeDownload").children(".infosContent").slideUp('slow');
	$("#OfficeDownload").children(".downloadh2").children("a").css("background-position", "20px -40px");
	// masquer les tags des articles
	$(".scrollImgArticle span").hide();
	
	// animer l'avatar du profil du visiteur ou celle par défaut
	setInterval(function() {
					numEtapeDef = (numEtapeDef + 1) % 3;
	
					$(".userAvatar span").stop().animate({
											marginTop: tabDefault[numEtapeDef]+'px'
										}, vitesseProfil);
				},5000);
	
	// gérer les champs textes devant être mis à 0
	$('.clearText').focusin(function() {
		if (this.value == this.defaultValue){
			this.value = '';
		} else {
			this.select();
		}
	});
	
	$('.clearText').focusout(function() {
		if (this.value == ''){
			this.value = this.defaultValue;
		}
	});
	
	// gérer les animations de background pour les liens commentaires et lire la suite
	$(".linkMore").mouseenter( function() {
		$(this).stop().animate({
							backgroundPosition: '0 -26px'
						}, 100);
	});
	
	$(".linkMore").mouseleave( function() {
		$(this).stop().animate({
							backgroundPosition: '0 0'
						}, 100);
	});
	
	// gestion des slideUp et down pour les tags des images
	$(".scrollImgArticle").mouseenter( function() {
		$(this).children("span").stop(true, true).slideDown(vitesseProfil);
	});
	$(".scrollImgArticle").mouseleave( function() {
		$(this).children("span").stop(true, true).slideUp(vitesseProfil);
	});
	
	// gestion de l'affichage du panel de connexion
	$("#linkToConnect").click( function() {
		$(".connectPanel").stop().animate({
							marginTop: '0px'
						}, vitesseProfil);
		return false;
	});
	
	$(".closeConnect").click( function() {
		$(".connectPanel").stop().animate({
							marginTop: '-268px'
						}, vitesseProfil);
		return false;
	});
	
	$(".content").mouseenter( function() {
		$(".connectPanel").stop().animate({
							marginTop: '-268px'
						}, vitesseProfil);
	});
	
	// ----- gestion des slideup et down au click sur une zone de download ----------------------------------------------------------------------
	$(".infosBloc").children(".downloadh2").children("a").click( function() {
		var $thisParentId;
		$thisParentId = "#"+$(this).parent("h2").parent("div").attr("id");
		
		$(".infosBloc").not($thisParentId).children(".infosContent").slideUp('slow');
		$(".infosBloc").not($thisParentId).children(".downloadh2").children("a").css("background-position", "20px -40px");
		
		$(this).parent(".downloadh2").parent(".infosBloc").children(".infosContent").stop(false, true);
		
		$(this).parent(".downloadh2").parent(".infosBloc").children(".infosContent").slideToggle('slow', function(){
			if( $($thisParentId).children(".infosContent").is(":hidden") ) {
				$($thisParentId).children(".downloadh2").children("a").css("background-position", "20px -40px");
			} else {
				$($thisParentId).children(".downloadh2").children("a").css("background-position", "20px 0");
			}
		});
		
		return false;
	});
	// ----/ gestion des slideup et down au click sur une zone de download ----------------------------------------------------------------------
	
	
	// ----- gestion des hover pour les top membres avec affichage du nom -----------------------------------------------------------------------
	$(".ulTopMembre").children("li").children("a").mouseenter( function(){
		var element = this;
		
		$(this).stop().animate({
							marginTop: tabProfil[1]+'px'
						}, vitesseProfil);
		
		setIntProfil = setTimeout(function () { animProfil(element ,1); }, 1800);
	});
	
	$(".ulTopMembre").children("li").children("a").mouseleave( function(){
		//on stoppe l'animation du mouseneter
		clearTimeout(setIntProfil);
		
		$(this).delay(500).animate({
							marginTop: tabProfil[0]+'px'
						}, vitesseProfil);
	});
	// ----/ gestion des hover pour les top membres avec affichage du nom -----------------------------------------------------------------------
	
	
	// ----- gestion de l'animation du hub photos -----------------------------------------------------------------------
	setInterval(function () {
					margTopPhoto = margTopPhoto + 123;
					if( margTopPhoto >= ($(".headerPhotos").first().children("a").children("img").length * 123) ){ margTopPhoto = 13; }
										
					$(".headerPhotos").children("a").animate({
							marginTop: "-"+margTopPhoto+'px'
						}, vitesseProfil);
				}, 5000);
	// ----/ gestion de l'animation du hub photos -----------------------------------------------------------------------
	
	// ----- gestion de l'animation du hub des tweets -----------------------------------------------------------------------
	setIntTweet = setInterval("showNextTweet('+')", 15000);
	
	$("#PrevTweet").click( function(){
		clearInterval(setIntTweet);
		showNextTweet('-');
		setIntTweet = setInterval("showNextTweet('+')", 15000);
		
		return false;
	});
	
	$("#NextTweet").click( function(){
		clearInterval(setIntTweet);
		showNextTweet('+');
		setIntTweet = setInterval("showNextTweet('+')", 15000);
		
		return false;
	});
	// ----/ gestion de l'animation du hub des tweets -----------------------------------------------------------------------
	
	
	// ----- gestion de l'animation du hub hotnews -----------------------------------------------------------------------
	$("#titleNews").slideUp(vitesseProfil);
	setIntHotnews= setInterval(function () { $("#titleNews").slideToggle(vitesseProfil); }, 7500);
	
	$(".linkHotnews").mouseenter( function(){
		clearInterval(setIntHotnews);
		$("#titleNews").slideDown(vitesseProfil);
	});
	
	$(".linkHotnews").mouseleave( function(){
		setIntHotnews= setInterval(function () { $("#titleNews").slideToggle(vitesseProfil); }, 7500);
	});
	// ----/ gestion de l'animation du hub hotnews -----------------------------------------------------------------------
	
	// ----- gestion de l'animation des sliders -----------------------------------------------------------------------	
	$("#menuSlider").children("li").eq(ligneSlide).children("a").addClass("activeNews");
	nbLigne = $("#menuSlider").children("li").length;
	
	setIntSlide = setInterval("autoSlide('0')", 10000);
	
	// afficher les news de la catégorie correspondant au menu choisi
	$("#menuSlider a").click(function(){		
		if( stopSlide == 0 ) {
			// on stoppe l'animation des sliders
			clearInterval(setIntSlide);
		}
		
		$("#menuSlider").children("li").eq(ligneSlide).children("a").removeClass("activeNews");
		ligneSlide = $("#menuSlider li").index($(this).parent("li"));
		marginLeftSlide = 0;
		marginTopSlide = ligneSlide*155;
		
		$("#moveSliders").stop().animate({
							marginLeft: "-"+marginLeftSlide+'px',
							marginTop: "-"+marginTopSlide+'px'
						}, vitesseProfil);
		
		$("#menuSlider").children("li").eq(ligneSlide).children("a").addClass("activeNews");
		
		if( stopSlide == 0 ) {
			setIntSlide = setInterval("autoSlide('0')", 10000);
		}
		
		return false;
	});
	
	// click sur le bouton de pause
	$("#pauseSlide").click(function(){		
		stopSlide = (stopSlide + 1) % 2;
		
		if( stopSlide == 1 ) {
			// on stoppe l'animation des sliders
			clearInterval(setIntSlide);
			$("#pauseSlide").css("background-position", "-70px top");
		} else {
			//sinon on relance l'aniamtion car elle a ét arrêtée précédemment
			setIntSlide = setInterval("autoSlide('0')", 10000);
			$("#pauseSlide").css("background-position", "-23px top");
		}
		
		return false;
	});
	
	// clic sur le bouton précédent
	$("#prevSlide").click(function(){		
		if( stopSlide == 0 ) {
			// on stoppe l'animation des sliders
			clearInterval(setIntSlide);
		}
		
		// on envoie le signe - pour indiquer qu'on revient au précédent
		autoSlide('-');
		
		if( stopSlide == 0 ) {
			setIntSlide = setInterval("autoSlide('0')", 10000);
		}
		
		return false;
	});
	
	// clic sur le bouton suivant
	$("#nextSlide").click(function(){		
		if( stopSlide == 0 ) {
			// on stoppe l'animation des sliders
			clearInterval(setIntSlide);
		}
		
		// on envoie le signe + pour indiquer qu'on va au suivant
		autoSlide('+');
		
		if( stopSlide == 0 ) {
			setIntSlide = setInterval("autoSlide('0')", 10000);
		}
		
		return false;
	});
	// ----/ gestion de l'animation des sliders -----------------------------------------------------------------------
});


// ----- fonction de gestion de l'animation pour les images de profil ---------------------------------------------------------------------------
function animProfil (myElement, numEtape) {
	numEtape = (numEtape + 1) % 3;
	
	$(myElement).stop().animate({
							marginTop: tabProfil[numEtape]+'px'
						}, vitesseProfil);
	
	setIntProfil = setTimeout(function () { animProfil(myElement ,numEtape); }, 1500);
}

// ----- fonction de gestion des tweets ---------------------------------------------------------------------------
function showNextTweet(signe) {
	if( signe == '-' ) {
		margTopTweet = margTopTweet - 162;
		if( margTopTweet < 0 ) { margTopTweet = 162*4; }
	} else {
		margTopTweet = margTopTweet+ 162;
		if( margTopTweet > (162*4) ) { margTopTweet = 0; }
	}
	
	$(".tweetList").animate({
		marginLeft: "-"+margTopTweet+'px'
	}, vitesseProfil);
}

// ----- fonction de gestion des slides ---------------------------------------------------------------------------
// valeurs possible pour la variable signe : - = precedent; + = suivant; 0 = processus normal
function autoSlide(signe) {
	var widthCol = 475;
	var heightCol = 155;
	var nbCol = $("#moveSliders").children("ul").eq(ligneSlide).children("li").length;
	var maxWidth = nbCol*widthCol;
	var maxHeight = nbLigne*heightCol;
	
	if( !(signe == "+") && !(signe == "-") && !(signe == "0") ) { signe = "0"; }
	
	if( signe == "-" ) {
		// clic sur le bouton précédent, on revient donc en arrière
		marginLeftSlide = marginLeftSlide - 950;
		
		if( marginLeftSlide < 0 ) {
			// si margin left est inférieur à 0 on retourne aux dernières news de la ligne en cours
			if( (nbCol % 2) == 0 ) {
				// nombre pair de news dans la ligne, on retourne aux 2 dernières news
				nbCol = nbCol - 2;
			} else {
				// nombre impair de news dans la ligne, on retourne à la dernière news uniquement
				nbCol = nbCol - 1;
			}
			marginLeftSlide = nbCol*widthCol;
		}
	} else {
		// processus normal ou clic sur le bouton suivant
		marginLeftSlide = marginLeftSlide + 950;
		
		if( marginLeftSlide >= maxWidth ) {
			// on se retrouve plus loin les dernières news
			marginLeftSlide = 0;
			if( signe == "0" ) {
				// processus d'animation normal, on se dirige vers la ligne suivante
				// on désactive le menu de l'ancienne ligne
				$("#menuSlider").children("li").eq(ligneSlide).children("a").removeClass("activeNews");
				ligneSlide = ligneSlide + 1;
				if( ligneSlide == nbLigne ) {
					ligneSlide = 0;
					marginTopSlide = 0;
				} else {
					marginTopSlide = marginTopSlide + heightCol;
				}
				
				// on active le menu de la nouvelle ligne
				$("#menuSlider").children("li").eq(ligneSlide).children("a").addClass("activeNews");
			}
		}
	}
	
	$("#moveSliders").stop().animate({
							marginLeft: "-"+marginLeftSlide+'px',
							marginTop: "-"+marginTopSlide+'px'
						}, vitesseProfil);
}

function changeTime(){
	// on récupère l'heure affichée sur le panel de connexion
	var stringTime = $(".actualTime:first").text().replace(" ", "");
	// on sépare les heures des minutes dans un tableau
	var tableTime = stringTime.split(":");
	var minutes = parseInt(tableTime[1], 10);
	var hours = parseInt(tableTime[0], 10);
	
	// on ajoute une minutes
	minutes = (minutes + 1) % 60;
	// si les minutes passent à 0, on passe à l'heure suivante
	if( minutes == 0 ){
		hours = (hours + 1) % 24;
	}
	
	// on ajoute un 0 pour des heures et minutes à 2 chiffres
	minutes = "0" + minutes;
	minutes = minutes.substr(-2);
	hours = "0" + hours;
	hours = hours.substr(-2);
	
	stringTime = hours + ":" + minutes;
	$(".actualTime").html(stringTime);
}