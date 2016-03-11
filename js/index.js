// Device Event listener
    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        console.log('device is ready');

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
    

    
    
    function btn1Click() {
            $("#home").hide();
            $("#btn1Text").show();
    }
