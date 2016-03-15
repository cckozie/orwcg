/*
screen width:720, window width:360
screen height:1280, window height:567
(567-40) / 5 = 105
*/


// Device Event listener
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {

        document.addEventListener("backbutton", onBackKeyDown, false);
        
        
//        alert('device width:'+screen.width+' || window width:'+window.innerWidth+' || device height:'+
//        screen.height+' || window height'+window.innerHeight);
        
        var high = window.innerHeight;
        var wide = window.innerWidth;
console.log(high+":"+wide);
        var navHeight = 52;
        var btnAskHeight = high/14;
console.log('btnAsk height:'+btnAskHeight);
        var lineHeight = 25;
console.log(navHeight);
        var btnDivHeight = high - navHeight - btnAskHeight;
        var btnHeight = btnDivHeight / 5;
console.log(btnDivHeight+":"+btnHeight);
        $("#btnDiv").css("height",btnDivHeight+'px');
        $("#image").css("height",btnDivHeight+'px');
        $("#banner").css("height",btnDivHeight+'px');
        $(".bd").css("height",btnHeight+'px');
        $("#btnAsk").css("height",btnAskHeight+'px');
        
        var btnTxtPad = (btnHeight - lineHeight * 2) / 2;
        $(".bdtxt").css("padding-top",btnTxtPad+'px');
        var btnTxtMgn = lineHeight/2;
        var btnGlyMgn = (btnHeight - 25) /2;
        $(".bdgly").css("margin-top",btnGlyMgn+'px');
        
        $("#btn1Text").hide();
        $("#btn2Text").hide();
        $("#btn3Text").hide();
        $("#btn4Text").hide();
        $("#btn5Text").hide();
        $("#aboutDiv").hide();

//        $('body').on('touchmove', function(evt) {
//            evt.preventDefault(); 
//        })

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

        for(var i=1; i<=5; i++) {
            var tst = $("#p"+i).html();
            console.log(tst);
            var rect = $("#p"+i)[0].getBoundingClientRect(); 
           if(rect.height < 40) {
//                $("#p"+i).html("top line <br>"+tst);
                $("#p"+i).css("margin-top", btnTxtMgn+"px");
//                console.log($("#pbtn"+i).text());
           }
        }

    
console.log(4);
    
    var bd1 = document.getElementById("bd1");
    
    $('.collapse').on('hide.bs.collapse', function(e) {
        $('#aboutDiv').hide();
    });

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
        function email() {
            $("#aboutDiv").hide();
            $('.navbar-toggle').click();
            openEmail();
        }

        function openEmail() {
            cordova.plugins.email.open({
                to: 'chadkos@gmail.com',
                subject: 'Workers compensation question'
            });
        }
console.log(5);
 
        function showAbout() {
//            $('.navbar-toggle').click();
            $("#bd5").off("click");
            $("#aboutDiv").show();
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
