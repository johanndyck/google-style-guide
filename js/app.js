// Cancel the default action of links
// Will probably make these things buttons and drop downs and remove this
$('ul.switcher a').click(function (e) {
	e.preventDefault();
});

// Links for changing the font on the Headline
$('.switcherH1 a.georgia').click(function () {
	$('div.target h1').css("font-family", "Georgia");
});

$('.switcherH1 a.helvetica').click(function () {
	$('div.target h1').css("font-family", "Helvetica");
});

$('.switcherH1 a.lato').click(function () {
	if (!$("link[href='https://fonts.googleapis.com/css?family=Lato']").length) {
		$('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>");
	}
	$('div.target h1').css("font-family", "Lato");
});

$('.switcherH1 a.playfair').click(function () {
	if (!$("link[href='https://fonts.googleapis.com/css?family=Playfair+Display']").length) {
		$('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet'>");
	}
	$('div.target h1').css("font-family", "Playfair Display");
});


// Links for changing the links on the Subhead
$('.switcherH2 a.georgia').click(function () {
	$('div.target h2').css("font-family", "Georgia");
});

$('.switcherH2 a.helvetica').click(function () {
	$('div.target h2').css("font-family", "Helvetica");
});

$('.switcherH2 a.lato').click(function () {
	if (!$("link[href='https://fonts.googleapis.com/css?family=Lato']").length) {
		$('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>");
	}
	$('div.target h2').css("font-family", "Lato");
});

$('.switcherH2 a.playfair').click(function () {
	if (!$("link[href='https://fonts.googleapis.com/css?family=Playfair+Display']").length) {
		$('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet'>");
	}
	$('div.target h2').css("font-family", "Playfair Display");
});


// Links for changing the body copy font
$('.switcherP a.georgia').click(function () {
	$('div.target p').css("font-family", "Georgia");
});

$('.switcherP a.helvetica').click(function () {
	$('div.target p').css("font-family", "Helvetica");
});

$('.switcherP a.lato').click(function () {
	if (!$("link[href='https://fonts.googleapis.com/css?family=Lato']").length) {
		$('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>");
	}
	$('div.target p').css("font-family", "Lato");
});

$('.switcherP a.playfair').click(function () {
	if (!$("link[href='https://fonts.googleapis.com/css?family=Playfair+Display']").length) {
		$('head').append("<link data-fontlink='lato' href='https://fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet'>");
	}
	$('div.target P').css("font-family", "Playfair Display");
});

// Change the Headline text with an input field
$("#headline").keyup(function () {
	var content = $('#headline').val();
	$("div.target h1").html(content);
});

// Change the text of the subhead
$("#subhead").keyup(function () {
	var content = $('#subhead').val();
	$("div.target h2").html(content);
});

// Change weight of headline
$('.switcherh1 a.weight').click(function () {
	if ($('div.target h1').hasClass('bold')) {
		$('div.target h1').css("font-weight", "normal").removeClass('bold');
		$(this).html('Bold');
	} else {
		$('div.target h1').css("font-weight", "bold").addClass('bold');
		$(this).html('Unbold');
	}
});

// change italic state of headline
$('.switcherh1 a.style').click(function () {
	if ($('div.target h1').hasClass('italic')) {
		$('div.target h1').css("font-style", "normal").removeClass('italic');
		$(this).html('Italicise');
	} else {
		$('div.target h1').css("font-style", "italic").addClass('italic');
		$(this).html('Unitalicise');
	}
});


// change headline to all caps
$('.switcherh1 a.caps').click(function () {
	if ($('div.target h1').hasClass('allcaps')) {
		$('div.target h1').css("text-transform", "none").removeClass('allcaps');
		$(this).html('Make All Caps');
	} else {
		$('div.target h1').css("text-transform", "uppercase").addClass('allcaps');
		$(this).html('Remove All Caps');
	}
});

// change subhead to bold
$('.switcherh2 a.weight').click(function () {
	if ($('div.target h2').hasClass('bold')) {
		$('div.target h2').css("font-weight", "normal").removeClass('bold');
		$(this).html('Bold');
	} else {
		$('div.target h2').css("font-weight", "bold").addClass('bold');
		$(this).html('Unbold');
	}
});

// change subhead to italic
$('.switcherh2 a.style').click(function () {
	if ($('div.target h2').hasClass('italic')) {
		$('div.target h2').css("font-style", "normal").removeClass('italic');
		$(this).html('Italicise');
	} else {
		$('div.target h2').css("font-style", "italic").addClass('italic');
		$(this).html('Unitalicise');
	}
});

// change subhead to all caps
$('.switcherh2 a.caps').click(function () {
	if ($('div.target h2').hasClass('allcaps')) {
		$('div.target h2').css("text-transform", "none").removeClass('allcaps');
		$(this).html('Make All Caps');
	} else {
		$('div.target h2').css("text-transform", "uppercase").addClass('allcaps');
		$(this).html('Remove All Caps');
	}
});