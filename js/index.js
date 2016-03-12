// Device Event listener
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {

        document.addEventListener("backbutton", onBackKeyDown, false);

        $( document ).on( "swiperight", "#btn1Text", function() {
            showHomePage();
        });

        $( document ).on( "swiperight", "#btntxt", function() {
            showHomePage();
        });

        function onBackKeyDown() {
//            alert('back');
            if ($('#home').is(':hidden')) {
                showHomePage();
            } else {
                navigator.app.exitApp();
            }
        }
        

        for(var i=1; i<=6; i++) {
            var tst = $("#p"+i).html();
            console.log(tst);
            var rect = $("#p"+i)[0].getBoundingClientRect(); 
           if(rect.height < 40) {
//                $("#p"+i).html("top line <br>"+tst);
                $("#p"+i).css("margin-top", "15px")
//                console.log($("#pbtn"+i).text());
           }
        }

    
    
    var bd1 = document.getElementById("bd1");
}

        function showHomePage() {
            $('.navbar-toggle').click();
            $("#btn1Text").hide();
            $("#btn2Text").hide();
            $("#btn3Text").hide();
            $("#btn4Text").hide();
            $("#btn5Text").hide();
            $( "#home" ).animate({
                opacity: "toggle"
                }, {
                duration: "slow"
            });            
//            $("#home").show();
        }

    bd1.onclick = function () {
//        $("#home").hide();
        $("#home").animate({opacity: "toggle"},500);
        $("#btn2Text").hide();
        $("#btn3Text").hide();
        $("#btn4Text").hide();
        $("#btn5Text").hide();
        $("#btn1Text").show();
    }

    bd2.onclick = function () {
//        $("#home").hide();
        $("#home").animate({opacity: "toggle"},500);
        $("#btn1Text").hide();
        $("#btn3Text").hide();
        $("#btn4Text").hide();
        $("#btn5Text").hide();
        $("#btn2Text").show();
    }

    bd3.onclick = function () {
//        $("#home").hide();
        $("#home").animate({opacity: "toggle"},500);
        $("#btn1Text").hide();
        $("#btn2Text").hide();
        $("#btn4Text").hide();
        $("#btn5Text").hide();
        $("#btn3Text").show();
    }

    bd4.onclick = function () {
//        $("#home").hide();
        $("#home").animate({opacity: "toggle"},500);
        $("#btn1Text").hide();
        $("#btn2Text").hide();
        $("#btn3Text").hide();
        $("#btn5Text").hide();
        $("#btn4Text").show();
    }

    bd5.onclick = function () {
//        $("#home").hide();
        $("#home").animate({opacity: "toggle"},500);
        $("#btn1Text").hide();
        $("#btn2Text").hide();
        $("#btn3Text").hide();
        $("#btn4Text").hide();
        $("#btn5Text").show();
    }

    function getSize() {
        alert('checking size');
/*
        for(var i=4; i=5; i++) {
//            var span = document.getElementById("bd3").getElementsByTagName("p")[i],
                rect = $("#p"+i).getClientRects();

            if (rect.length > 1) { // more than 1 line of text
                console.log('more');
            } else {
                console.log('1');
            }
        }*/
        var rect = $("#p4")[0].getBoundingClientRect(); 
        console.log(rect.height);       
    }
//    oBndRct = obj.getBoundingClientRect();
//    nDivLen = oBndRct.right - oBndRct.left + 1;    
