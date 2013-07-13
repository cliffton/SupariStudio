  $(document).ready(function(){
            // set up hover panels
            // although this can be done without JavaScript, we've attached these events
            // because it causes the hover to be triggered when the element is tapped on a touch device
            $('.item').hover(function(){
                $(this).addClass('flip');
            },function(){
                $(this).removeClass('flip');
            });

            //move div yeah !!!
            $('#goLeft').click(function()
            {
                $('.workContainer').animate({left:'+=-200px'});
                $('#goLeft').animate({left:'+=200px'});
                $('#goRight').animate({left:'+=200px'});
            });

             $('#goRight').click(function()
            {
                $('.workContainer').animate({left:'+=200px'});
                $('#goRight').animate({left:'+=-200px'});
                $('#goLeft').animate({left:'+=-200px'});
            });

            $('#treasure').click(function()
            {
                
            });
        });