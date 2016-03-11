// Device Event listener
    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        console.log('device is ready');

        $("#btn1").on('click', function() {
            $("#home").hide();
            $("#btn1Text").show();
        });    

    }
    
    
    
    function btn1Click() {
            $("#home").hide();
            $("#btn1Text").show();
    }
