var Monster = require("../node_modules/monsters/lib/Monster.js");

function Godzilla()
{
	Monster.apply(this, arguments);
}

Godzilla.prototype.name = "Godzilla";

Godzilla.prototype = Object.create(Monster.prototype);

Godzilla.prototype.growl = function()
{
	console.log("GRUUUAAAAAAH!!!");
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