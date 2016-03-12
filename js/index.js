// Device Event listener
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {

        document.addEventListener("backbutton", onBackKeyDown, false);
        
        
        alert('device width:'+screen.width+' || window width:'+window.innerWidth+' || device height:'+
        screen.height+' || window height'+window.innerHeight);

        $("#btn1Text").hide();
        $("#btn2Text").hide();
        $("#btn3Text").hide();
        $("#btn4Text").hide();
        $("#btn5Text").hide();
        $("#aboutDiv").hide();

console.log(1);
        $( document ).on( "swiperight", "#txtdiv", function() {
            showHomePage();
        });

        $( document ).on( "swipeleft", "#txtdiv", function() {
            showHomePage();
        });
console.log(2);

        function onBackKeyDown() {
//            alert('back');
            if ($('#home').is(':hidden')) {
                showHomePage();
            } else {
                navigator.app.exitApp();
            }
        }
        
console.log(3);

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

    
console.log(4);
    
    var bd1 = document.getElementById("bd1");

    bd1.onclick = function () {
        if ($('#aboutDiv').is(':hidden')) {
            $("#home").animate({opacity: "toggle"},500);
            $("#btn2Text").hide();
            $("#btn3Text").hide();
            $("#btn4Text").hide();
            $("#btn5Text").hide();
            $("#btn1Text").show();
        }
    }

    bd2.onclick = function () {
        if ($('#aboutDiv').is(':hidden')) {
            $("#home").animate({opacity: "toggle"},500);
            $("#btn1Text").hide();
            $("#btn3Text").hide();
            $("#btn4Text").hide();
            $("#btn5Text").hide();
            $("#btn2Text").show();
        }
    }
    
    bd3.onclick = function () {
        if ($('#aboutDiv').is(':hidden')) {
            $("#home").animate({opacity: "toggle"},500);
            $("#btn1Text").hide();
            $("#btn2Text").hide();
            $("#btn4Text").hide();
            $("#btn5Text").hide();
            $("#btn3Text").show();
        }
    }

    bd4.onclick = function () {
        if ($('#aboutDiv').is(':hidden')) {
            $("#home").animate({opacity: "toggle"},500);
            $("#btn1Text").hide();
            $("#btn2Text").hide();
            $("#btn3Text").hide();
            $("#btn5Text").hide();
            $("#btn4Text").show();
        }
    }

    bd5.onclick = function () {
        if ($('#aboutDiv').is(':hidden')) {
            $("#home").animate({opacity: "toggle"},500);
            $("#btn1Text").hide();
            $("#btn2Text").hide();
            $("#btn3Text").hide();
            $("#btn4Text").hide();
            $("#btn5Text").show();
        }
    }
    
}
console.log(9);
        function openEmail() {
            $("#aboutDiv").hide();
            $('.navbar-toggle').click();
            cordova.plugins.email.open({
                to: 'chadkos@gmail.com'
            });
        }
console.log(5);
 
        function showAbout() {
//            $('.navbar-toggle').click();
            $("#bd5").off("click");
            $("#aboutDiv").show();
        }
        
        function email() {
            $("#aboutDiv").hide();
            $('.navbar-toggle').click();
            $("#emailModal").modal("toggle");
        }

        function home() {
            $('.navbar-toggle').click();
            $("#aboutDiv").hide();
            if ($('#home').is(':hidden')) {
                showHomePage();
            }
        }
console.log(6);

        $('#emailModal').on("hidden.bs.modal", function() {
            alert('hidden');
            $(this).find('form')[0].reset();
        });

console.log(7);

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
console.log(8);
