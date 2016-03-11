// Device Event listener
    document.addEventListener('deviceready', onDeviceReady, false);

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

    $(document).ready(function(){
        for(var i=1; i<=8; i++) {
            var tst = $("#btn"+i).text();
           console.log(tst);
           if(tst.length > 80) {
                $("#btn"+i).css("line-height","20px");
                console.log('longone');
           } else {
                $("#btn"+i).css("padding-top", "10px");

           }
        }
    });

    }
    
    var bd1 = document.getElementById("bd1");
    bd1.onclick = function () {
        $("#home").hide();
        $("#btn1Text").show();
    }

    function homeClick() {
            $("#btn1Text").hide();
            $("#home").show();
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
    }
    
    
    function btn1Click() {
            $("#home").hide();
            $("#btn1Text").show();
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
    }
