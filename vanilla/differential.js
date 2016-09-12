/*
	#NodeBots
	Differential Drive Remotely operated robot.
	using 2 gearmotor and l9110s motordriver

	Pin Configuration:

	l9910s  --> arduino
	AIA 		6 left forward
	AIB 		5 left backward
*/

var five = require("johnny-five");
var keypress = require("keypress");
var board = new five.Board({
	port: '/dev/cu.NodeBotMiku-DevB'
});
var motorSpeed = (5);
var motorAIA = 6;
var motorAIB = 5;
var motorBIA = 10;
var motorBIB = 9;

board.on("ready", function(){
	var led13 = new five.Led(13);
	led13.on();
	var AIA = new five.Pin({
		pin: motorAIA,
		mode: 3, //PWM
	});
	var AIB = new five.Pin({
		pin: motorAIB,
		mode: 3, //PWM
	});
	
	process.stdin.resume();
	process.stdin.setEncoding("utf8");
	process.stdin.setRawMode(true);

	process.stdin.on("keypress", function(ch, key) {
		if ( key.name === 'left' ) {    
			resetMotor();
			AIA.write(motorSpeed);
	    }
	    if( key.name === 'right' ){
	    	resetMotor();
	    	AIB.write(motorSpeed);
	    }
	    if( key.name === 'down' ){
	    	resetMotor();
	    }
	});
	function resetMotor(){
	    	AIA.write(0);
	    	AIB.write(0);
	}
	this.on("exit", function(){
		AIA.write(0);
		
	});
});