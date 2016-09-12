///<reference path="../typings/main.d.ts" />
declare function require(name:string);
import five = require("johnny-five");
import songs = require("j5-songs");
var board = new five.Board({
	port: '/dev/cu.NodeBotMiku-DevB'
});
var piezoPin = 3;
board.on("ready", function() {
	var piezo = new five.Piezo(piezoPin);
	var song = songs.load("beethovens-fifth");
	piezo.play(song);
});
