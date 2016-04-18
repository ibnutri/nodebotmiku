///<reference path="typings/main.d.ts" />
declare function require(name:string);
import five = require("johnny-five");
var board = new five.Board({
	port: '/dev/cu.NodeBotMiku-DevB'
});
board.on("ready", function() {
  var led = new five.Led(13);
  led.pulse(500);
});
