  $(document).ready(function(){
            // set up hover panels
            // although this can be done without JavaScript, we've attached these events
            // because it causes the hover to be triggered when the element is tapped on a touch device
            $('.item').hover(function(){
                $(this).addClass('flip');
            },function(){
                $(this).removeClass('flip');
            });

            var leftPosition = $('.workContainer').position();
            var carname="Volvo";
            /*document.getElementById("demo").innerHTML=leftPosition.left;*/

            //move div yeah !!!
            
                $('#goLeft').click(function()
                {  
                    var leftPosition = $('.workContainer').position();
                    /*document.getElementById("demo").innerHTML=leftPosition.left;*/
                    if(leftPosition.left>-500)
                    {
                        $('.workContainer').animate({left:'+=-200px'},100);
                        $('#goLeft').animate({left:'+=200px'},100);
                        $('#goRight').animate({left:'+=200px'},100);
                    }



                });

           

            
                $('#goRight').click(function()
                {

                    var leftPosition = $('.workContainer').position();
                    /*document.getElementById("demo").innerHTML=leftPosition.left;*/
                    if(leftPosition.left<0)
                    {
                        $('.workContainer').animate({left:'+=200px'},100);
                        $('#goRight').animate({left:'+=-200px'},100);
                        $('#goLeft').animate({left:'+=-200px'},100);
                    }

                });

            

            



        });