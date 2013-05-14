var Monster = require("monsters").Monster;

function Godzilla()
{
	Monster.apply(this, arguments);
}

Godzilla.prototype = Object.create(Monster.prototype);

Godzilla.prototype.name = "Godzilla";

Godzilla.prototype.growl = function()
{
	this.emit("growl", "GRUUUAAAAAAH!!!");
	//console.log("GRUUUAAAAAAH!!!");
};

Godzilla.prototype.attacks =
{
	Punch:
	{
        attack: 5,
        defense: 4
	},
	Tackle:
	{
        attack: 2,
        defense: 5
	},
	BattleCry:
	{
        attack: 5,
        defense: 1
	},
	RoundHouseKick:
	{
        attack: 8,
        defense: 2
	}
};

module.exports = Godzilla;
