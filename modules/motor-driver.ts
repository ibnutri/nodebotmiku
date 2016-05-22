///<reference path="../typings/main.d.ts" />
declare function require(name:string);
import five = require("johnny-five");
var board = new five.Board({
	port: '/dev/cu.NodeBotMiku-DevB'
});
var motorAIA = 9;
var motorAIB = 5;
board.on("ready", function() {
	var AIA = new five.Pin({
		pin: 9,
		mode: 3, //PWM
	});
	AIA.write(10);
});
