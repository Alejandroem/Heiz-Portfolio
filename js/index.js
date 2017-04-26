$(document).ready(function(){

    $("body").css("overflow","hidden");
    $("#imgBrand").click(function(){

        $("#navBarMain").animateCss("fadeOutUp",false); 
        $("#PageBio").animateCss("fadeOutRight",false);
//        $("#pageGaleria").animateCss("fadeOutRight",false);
        $("#footer").animateCss("fadeOutDown",false);
        setTimeout(function(){
            $("#footer").animateCss("fadeInUp",true);
        },700);
        setTimeout(function(){
            $("#MenuPrincipal").animateCss("fadeInLeft",true);
        },400);

    });

    $("#bio").click(function(){
        $("#MenuPrincipal").animateCss("fadeOutLeft",false);
        $("#footer").animateCss("fadeOutDown",false);
        setTimeout(function(){
            $("#footer").animateCss("fadeInUp",true);
        },700);
        setTimeout(function(){
            $("#PageBio").animateCss("fadeInRight",true);
            $("#navBarMain").animateCss("fadeInDown",true);

        },400);

    });

    $("#btnGaleria").click(function(){
        $("#MenuPrincipal").animateCss("fadeOutLeft",false);
        $("#footer").animateCss("fadeOutDown",false);
        setTimeout(function(){
            $("#footer").animateCss("fadeInUp",true);
        },700);
        setTimeout(function(){
            $("#pageGaleria").animateCss("fadeInRight",true);
            $("#navBarMain").animateCss("fadeInDown",true);

        },400);

    });



    $.fn.extend({
        animateCss: function (animationName,show) {
            if(show){
                this.show();
            }
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                if(!show){
                    $(this).hide();
                }
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

});

//animated infinite bounce