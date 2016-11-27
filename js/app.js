$('ul.switcher a').click(function(e){
    // Cancel the default action
    e.preventDefault();
});

$('.switcherH1 a.georgia').click(function(){
   $('div.target h1').css("font-family", "Georgia"); 
});

$('.switcherH1 a.helvetica').click(function(){
   $('div.target h1').css("font-family", "Helvetica"); 
});

$('.switcherH1 a.lato').click(function(){ 
    if( !$("link[href='https://fonts.googleapis.com/css?family=Lato']").length ){
        $('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>");
    }
   $('div.target h1').css("font-family", "Lato"); 
});

$('.switcherH1 a.playfair').click(function(){ 
    if( !$("link[href='https://fonts.googleapis.com/css?family=Playfair+Display']").length ){
        $('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet'>");
    }
   $('div.target h1').css("font-family", "Playfair Display"); 
});

$('.switcherH2 a.georgia').click(function(){
   $('div.target h2').css("font-family", "Georgia"); 
});

$('.switcherH2 a.helvetica').click(function(){
   $('div.target h2').css("font-family", "Helvetica"); 
});

$('.switcherH2 a.lato').click(function(){ 
    if( !$("link[href='https://fonts.googleapis.com/css?family=Lato']").length ){
        $('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>");
    }
   $('div.target h2').css("font-family", "Lato"); 
});

$('.switcherH2 a.playfair').click(function(){ 
    if( !$("link[href='https://fonts.googleapis.com/css?family=Playfair+Display']").length ){
        $('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet'>");
    }
   $('div.target h2').css("font-family", "Playfair Display"); 
});

$('.switcherP a.georgia').click(function(){
   $('div.target p').css("font-family", "Georgia"); 
});

$('.switcherP a.helvetica').click(function(){
   $('div.target p').css("font-family", "Helvetica"); 
});

$('.switcherP a.lato').click(function(){ 
    if( !$("link[href='https://fonts.googleapis.com/css?family=Lato']").length ){
        $('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>");
    }
   $('div.target p').css("font-family", "Lato"); 
});

$('.switcherP a.playfair').click(function(){ 
    if( !$("link[href='https://fonts.googleapis.com/css?family=Playfair+Display']").length ){
        $('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet'>");
    }
   $('div.target P').css("font-family", "Playfair Display"); 
});

$("#headline").keyup(function(){
    var content = $('#headline').val();
    $("div.target h1").html(content);
});

$("#subhead").keyup(function(){
    var content = $('#subhead').val();
    $("div.target h2").html(content);
});

$('.switcherh1 a.weight').click(function(){
    if( $('div.target h1').hasClass('bold')){
        $('div.target h1').css("font-weight", "normal").removeClass('bold'); 
        $(this).html('Bold');
    } else {
        $('div.target h1').css("font-weight", "bold").addClass('bold'); 
        $(this).html('Unbold');
    }
});

$('.switcherh1 a.style').click(function(){
    if( $('div.target h1').hasClass('italic')){
        $('div.target h1').css("font-style", "normal").removeClass('italic'); 
        $(this).html('Italicise');
    } else {
        $('div.target h1').css("font-style", "italic").addClass('italic'); 
        $(this).html('Unitalicise');
    }
});

$('.switcherh1 a.caps').click(function(){
    if( $('div.target h1').hasClass('allcaps')){
        $('div.target h1').css("text-transform", "none").removeClass('allcaps'); 
        $(this).html('Make All Caps');
    } else {
        $('div.target h1').css("text-transform", "uppercase").addClass('allcaps'); 
        $(this).html('Remove All Caps');
    }
});

$('.switcherh2 a.weight').click(function(){
    if( $('div.target h2').hasClass('bold')){
        $('div.target h2').css("font-weight", "normal").removeClass('bold'); 
        $(this).html('Bold');
    } else {
        $('div.target h2').css("font-weight", "bold").addClass('bold'); 
        $(this).html('Unbold');
    }
});

$('.switcherh2 a.style').click(function(){
    if( $('div.target h2').hasClass('italic')){
        $('div.target h2').css("font-style", "normal").removeClass('italic'); 
        $(this).html('Italicise');
    } else {
        $('div.target h2').css("font-style", "italic").addClass('italic'); 
        $(this).html('Unitalicise');
    }
});

$('.switcherh2 a.caps').click(function(){
    if( $('div.target h2').hasClass('allcaps')){
        $('div.target h2').css("text-transform", "none").removeClass('allcaps'); 
        $(this).html('Make All Caps');
    } else {
        $('div.target h2').css("text-transform", "uppercase").addClass('allcaps'); 
        $(this).html('Remove All Caps');
    }
});
