//<![CDATA[
        $(document).on('turbolinks:load', function() {// wait for turbolinks to load page
            $('#preloader').delay(350).fadeOut('slow', function() {
              console.log($(this));
            });
            // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        })
//]]>
