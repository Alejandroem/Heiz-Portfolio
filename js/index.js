var secciones = ["#navBio","#navGaleria","#navInvestigacion","#navEstrategia"];
var navsec = {
    "#navBio":"#PageBio",
    "#navGaleria":"#pageGaleria",
    "#navInvestigacion":"#pageInvestigacion",
    "#navEstrategia":"#pageEstrategia"
};

$(document).ready(function(){
    $(".nav a").on('click',function(){
        if($(window).width()<=1024){
            $(".navbar-toggle").click();
        }

    });


    //    Programacion del menu
    $("#navBio").click(function(){
        animateFoter();
        var actual;
        for(var i=0; i< secciones.length; i++){
            if($(secciones[i]).hasClass("active")){
                actual = i;
            }
        }
        var dest = secciones.indexOf("#navBio");
        if(actual>dest){
            cascadeToLeft(actual,dest);
        }else{
            cascadeToRight(actual,dest);

        }

    });

    $("#navGaleria").click(function(){

        animateFoter();
        var actual;
        for(var i=0; i< secciones.length; i++){
            if($(secciones[i]).hasClass("active")){
                actual = i;
            }
        }
        var dest = secciones.indexOf("#navGaleria");
        if(actual>dest){
            cascadeToLeft(actual,dest);
        }else{
            cascadeToRight(actual,dest);

        }

    });

    $("#navInvestigacion").click(function(){
        animateFoter();
        var actual;
        for(var i=0; i< secciones.length; i++){
            if($(secciones[i]).hasClass("active")){
                actual = i;
            }
        }
        var dest = secciones.indexOf("#navInvestigacion");
        if(actual>dest){
            cascadeToLeft(actual,dest);
        }else{
            cascadeToRight(actual,dest);

        }

    });

    $("#navEstrategia").click(function(){
        animateFoter();
        var actual;
        for(var i=0; i< secciones.length; i++){
            if($(secciones[i]).hasClass("active")){
                actual = i;
            }
        }
        var dest = secciones.indexOf("#navEstrategia");
        if(actual>dest){
            cascadeToLeft(actual,dest);
        }else{
            cascadeToRight(actual,dest);

        }

    });

    function cascadeToLeft(actual, dest){

        if(navsec[secciones[actual]]=="#pageGaleria"&&!$("#pageGaleria").is(":visible")){
            $("#pageGaleriaAumentada").hide();
            $("#pageGaleria").show();
        }

        console.log("der to izq"+actual+dest);
        if(actual==dest)
            return;

        //der -> izq
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        var animationName= "fadeOutRight";
        $(navsec[secciones[actual]]).css("-webkit-animation-duration","0.08s");
        $(navsec[secciones[actual-1]]).css("-webkit-animation-duration","0.08s");
        $(navsec[secciones[actual]]).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).hide();
            $(this).removeClass('animated ' + animationName);
            $(this).removeClass("active");
            $(secciones[actual]).removeClass("active");

            animationName = "fadeInLeft";
            $(navsec[secciones[actual-1]]).show();
            $(navsec[secciones[actual-1]]).addClass("active");
            $(secciones[actual-1]).addClass("active");
            $(navsec[secciones[actual-1]]).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                $(navsec[secciones[actual]]).css("-webkit-animation-duration","0.5s");
                $(navsec[secciones[actual-1]]).css("-webkit-animation-duration","0.5s");

                cascadeToLeft(actual-1,dest);
            });
        });
    }

    function cascadeToRight(actual, dest){
        if(navsec[secciones[actual]]=="#pageGaleria"&&!$("#pageGaleria").is(":visible")){
            $("#pageGaleriaAumentada").hide();
            $("#pageGaleria").show();
        }


        console.log("izq to der"+actual+dest);
        if(actual==dest)
            return;

        //der -> izq
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        var animationName= "fadeOutLeft";
        $(navsec[secciones[actual]]).css("-webkit-animation-duration","0.08s");
        $(navsec[secciones[actual+1]]).css("-webkit-animation-duration","0.08s");
        $(navsec[secciones[actual]]).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).hide();
            $(this).removeClass('animated ' + animationName);
            $(this).removeClass("active");
            $(secciones[actual]).removeClass("active");
            animationName = "fadeInRight";
            $(navsec[secciones[actual+1]]).show();
            $(navsec[secciones[actual+1]]).addClass("active");
            $(secciones[actual+1]).addClass("active");
            $(navsec[secciones[actual+1]]).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                $(navsec[secciones[actual]]).css("-webkit-animation-duration","0.5s");
                $(navsec[secciones[actual+1]]).css("-webkit-animation-duration","0.5s");

                cascadeToRight(actual+1,dest);
            });
        });

    }

    $("#imgBrand").click(function(){

        $("#navBarMain").animateCss("fadeOutUp",false); 

        cleaner();
        animateFoter();
        setTimeout(function(){
            $("#MenuPrincipal").animateCss("fadeInLeft",true);
        },400);

    });

    $("#bio").click(function(){
        $("#MenuPrincipal").animateCss("fadeOutLeft",false);
        animateFoter();
        setTimeout(function(){
            $("#navBarMain").animateCss("fadeInDown",true);
            $("#PageBio").animateCss("fadeInRight",true);
            $("#PageBio").addClass("active");
            $("#navBio").addClass("active");
        },400);

    });

    $("#btnGaleria").click(function(){
        $("#MenuPrincipal").animateCss("fadeOutLeft",false);
        animateFoter();
        setTimeout(function(){
            $("#navBarMain").animateCss("fadeInDown",true);
            $("#pageGaleria").animateCss("fadeInRight",true);
            $("#pageGaleria").addClass("active");
            $("#navGaleria").addClass("active");
        },400);

    });

    $("#btnInvestigacion").click(function(){
        $("#MenuPrincipal").animateCss("fadeOutLeft",false);
        animateFoter();
        setTimeout(function(){
            $("#navBarMain").animateCss("fadeInDown",true);
            $("#pageInvestigacion").animateCss("fadeInRight",true);
            $("#pageInvestigacion").addClass("active");
            $("#navInvestigacion").addClass("active");
        },400);

    });

    $("#btnEstrategia").click(function(){
        $("#MenuPrincipal").animateCss("fadeOutLeft",false);
        animateFoter();
        setTimeout(function(){
            $("#navBarMain").animateCss("fadeInDown",true);
            $("#pageEstrategia").animateCss("fadeInRight",true);
            $("#pageEstrategia").addClass("active");
            $("#navEstrategia").addClass("active");
        },400);

    });


    function cleaner(){
        if($("#PageBio").hasClass("active")){
            $("#PageBio").animateCss("fadeOutRight",false);
            $("#PageBio").removeClass("active");
            $("#navBio").removeClass("active");
        }else if($("#pageGaleria").hasClass("active")){
            $("#pageGaleria").animateCss("fadeOutRight",false);
            $("#pageGaleria").removeClass("active");
            $("#navGaleria").removeClass("active");
        }else if($("#pageInvestigacion").hasClass("active")){
            $("#pageInvestigacion").animateCss("fadeOutRight",false);
            $("#pageInvestigacion").removeClass("active");
            $("#navInvestigacion").removeClass("active");
        }else if($("#pageEstrategia").hasClass("active")){
            $("#pageEstrategia").animateCss("fadeOutRight",false);
            $("#pageEstrategia").removeClass("active");
            $("#navEstrategia").removeClass("active");
        }
    }

    function animateFoter(){
        $("#footer").animateCss("fadeOutDown",false);
        setTimeout(function(){
            $("#footer").animateCss("fadeInUp",true);
        },700);
    }

    var imgTimer;
    imgTimer = setInterval(function(){
        if($("#imgBio").hasClass("bio1")){
            $("#imgBio").removeClass("bio1");
            $("#imgBio").addClass("bio2");
            $("#imgBio").attr("src","images/bio2.jpg");
        }else if($("#imgBio").hasClass("bio2")){
            $("#imgBio").removeClass("bio2");
            $("#imgBio").addClass("bio3");
            $("#imgBio").attr("src","images/bio3.jpg");
        }else if($("#imgBio").hasClass("bio3")){
            $("#imgBio").removeClass("bio3");
            $("#imgBio").addClass("bio1");
            $("#imgBio").attr("src","images/bio1.jpg");
        }
        //        $("#imgBio").animateCss("pulse",true);

    },3000);


    //Agrega las clases necesarias y al terminar limpia esas clases
    //Extiende jQuery para popder utilizar $(selector).animateCss y ejecutar lo que está adentro
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