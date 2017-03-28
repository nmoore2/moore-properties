//<![CDATA[
        $(document).on('ready', function() {// wait for turbolinks to load page
            $('#preloader').delay(350).fadeOut('slow', function() {
            });
            // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        })
//]]>
