var SerialPort = require("serialport");

var sp = new SerialPort("/dev/ttyACM0", {
    baudRate: 115200
});

// Open serial port
sp.on('open',function() {
    var date = new Date();
    var now = Math.floor((date.getTime() - date.getTimezoneOffset() * 60000) / 1000);

    console.log('Serial port opened');

    // Data from serial (should never happen)
    sp.on('data', function(data) {
        console.log('>>>>>', data);
    });

    sp.write('T' + now + '\r');
    console.log('Date written: T' + now);

    sp.close(function() {
      console.log('Serial port closed');
    });

});
