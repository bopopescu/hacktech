module.exports = {
	move: function(direction, distance) {
		console.log("moving in the " + direction + " direction");
		console.log("moving " + distance + " feet");

	},
	stop: function() {
		console.log("OH NO!");
	},
	turn: function(direction, degrees) {
		console.log("rotating " + direction + " " + degrees + " degrees");
	}
}