// Device Event listener
    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        console.log('device is ready');
    }
    window.addEventListener('load', function() {
        document.body.addEventListener('touchmove', function(e) {
            console.log('touched');
            e.preventDefault();
        }, false);
    }, false);
    window.addEventListener("touchstart", function(e) {    e.preventDefault();}, false);window.addEventListener("touchmove", function(e) {    e.preventDefault();}, false);
