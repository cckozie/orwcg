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
        for(var i=1; i<=2; i++) {
            var tst = $("#p"+i).html();
           console.log(tst);
           if(tst.length < 40) {
               alert('shorter');
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
