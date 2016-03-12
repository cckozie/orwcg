// Device Event listener
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
//    document.addEventListener('deviceready', onDeviceReady, false);
/*
 document.addEventListener("deviceready", function(){
      alert("123");
 },true);
*/
    function onDeviceReady() {
        console.log('device is ready');
        console.log($("#bd1").text());
        console.log($("#bd1").text().length);
        console.log($("#p1").text());
        console.log($("#p1").text().length);

        $(window).on("navigate", function (event, data) {
        if (data.state.direction == "back") {
            $("#btn1Text").hide();
            $("#home").show();
            return false; /* prevent showing previous page */
        }
        });

        alert('ready');
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
    bd1.onclick = function () {
        $("#home").hide();
        $("#btn1Text").show();
    }

    function homeClick() {
        alert('home');
            $("#btn1Text").hide();
            $("#home").show();
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
    }
    
    
    function btn1Click() {
            $("#home").hide();
            $("#btn1Text").show();
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
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
