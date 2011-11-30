/*!
 * jQuery Sander popup windows
 * http://nfhelp.ru/
 * Copyright 2010, Sander
 */

$(document).ready(function(){
	yOffset=20;
	$(".stip").unbind().live('mouseover',function(e){
		var t=$(this).attr('spopup');
		$('div#stip').remove();
		$('body').append('<div id="stip">'+t+'</div>');
		width=$("div#stip").width();
		height=$("div#stip").height();
		wwidth=(window.innerWidth)?window.innerWidth:((document.all)?document.documentElement.offsetWidth:null);
		wheight=(window.innerHeight)?window.innerHeight:((document.all)?document.documentElement.offsetHeight:null);
		wscroll=(document.documentElement.scrollTop)?document.documentElement.scrollTop:document.body.scrollTop;
		if(wheight+wscroll-30>e.pageY+height){
			this.top=(e.pageY+yOffset);
			xOffset=20;
		}else{
			this.top=(wheight-height+wscroll-yOffset);
			xOffset=40;
		}
		if(e.pageX>(wwidth/2)) this.left=(e.pageX-width-xOffset)
		else this.left=(e.pageX+xOffset)
		$('div#stip').css("top",this.top+"px").css("left",this.left+"px").fadeIn(700);
	}).live('mouseout',function(){
		$("div#stip").fadeOut(200)
	}).mousemove(function(e){
		if(wheight+wscroll-30>e.pageY+height){
			this.top=(e.pageY+yOffset);
			xOffset=20;
		}else{
			this.top=(wheight-height+wscroll-yOffset);
			xOffset=40;
		}
		if(e.pageX>(wwidth/2)) this.left=(e.pageX-width-xOffset)
		else this.left=(e.pageX+xOffset)
		$("div#stip").css("top",this.top+"px").css("left",this.left+"px")
	});
});

function s_page(title, page, category){$(document).ready(function(){$("div#sblocks_"+title+" table").animate({opacity: 0.01}, 500, function(){});});var ajax=new dle_ajax();var varsString="";ajax.setVar("title",title);ajax.setVar("sstart",page);ajax.setVar("skin", dle_skin);ajax.setVar("category",category);ajax.onShow('');ajax.requestFile=dle_root+"engine/ajax/sblocks.php";ajax.method='POST';ajax.element='sblocks_'+title;ajax.sendAJAX(varsString);return false;};
