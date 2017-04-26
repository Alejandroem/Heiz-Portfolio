$(document).ready(function(){

    $("body").css("overflow","hidden");
    $("#imgBrand").click(function(){

        $("#navBarMain").animateCss("fadeOutUp",false); 

        if($("#PageBio").hasClass("active")){
            $("#PageBio").animateCss("fadeOutRight",false);
            $("#PageBio").removeClass("active");
        }
        
        if($("#pageGaleria").hasClass("active")){
            $("#pageGaleria").animateCss("fadeOutRight",false);
            $("#pageGaleria").removeClass("active");
        }
        
        
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
            $("#navBarMain").animateCss("fadeInDown",true);
            $("#PageBio").animateCss("fadeInRight",true);
            $("#PageBio").addClass("active");
        },400);

    });

    $("#btnGaleria").click(function(){
        $("#MenuPrincipal").animateCss("fadeOutLeft",false);
        $("#footer").animateCss("fadeOutDown",false);
        setTimeout(function(){
            $("#footer").animateCss("fadeInUp",true);
        },700);
        setTimeout(function(){
            $("#navBarMain").animateCss("fadeInDown",true);
            $("#pageGaleria").animateCss("fadeInRight",true);
            $("#pageGaleria").addClass("active");
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