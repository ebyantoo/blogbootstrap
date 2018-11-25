//event pada saat link di klik
$('.page-scroll').on('click', function(event) { 

    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top -50
        }, 1240, 'swing');
    } // End if
});
