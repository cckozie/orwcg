// Device Event listener
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {

        document.addEventListener("backbutton", onBackKeyDown, false);

        cordova.plugins.email.isAvailable(
            function (isAvailable) {
                alert('Service is not available'); 
            } 
        );

        $( document ).on( "swiperight", "#txtdiv", function() {
            showHomePage();
        });

        $( document ).on( "swipeleft", "#txtdiv", function() {
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

        function openEmail() {
            cordova.plugins.email.open();
        }
        
        function email() {
            $('.navbar-toggle').click();
            $("#emailModal").modal("toggle");
        }

        function homeClick() {
            $('.navbar-toggle').click();
            showHomePage();
        }

        $('#emailModal').on("hidden.bs.modal", function() {
            alert('hidden');
            $(this).find('form')[0].reset();
        });


        function showHomePage() {
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
