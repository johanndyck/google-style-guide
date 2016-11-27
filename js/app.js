$('ul.switcher a').click(function(e){
    // Cancel the default action
    e.preventDefault();
});

$('a.georgia').click(function(){
   $('div.target').css("font-family", "Georgia"); 
});

$('a.helvetica').click(function(){
   $('div.target').css("font-family", "Helvetica"); 
});

$('a.lato').click(function(){ 
    if( !$("link[href='https://fonts.googleapis.com/css?family=Lato']").length ){
        $('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>");
    }
   $('div.target').css("font-family", "Lato"); 
});

$('a.playfair').click(function(){ 
    if( !$("link[href='https://fonts.googleapis.com/css?family=Playfair+Display']").length ){
        $('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet'>");
    }
   $('div.target').css("font-family", "Playfair Display"); 
});