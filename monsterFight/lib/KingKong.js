var Monster = require("monsters").Monster;

function KingKong()
{
	Monster.apply(this, arguments);
}

KingKong.prototype = Object.create(Monster.prototype);

KingKong.prototype.name = "KingKong";

KingKong.prototype.growl = function()
{
	this.emit("growl", "BONGOBONGO!!!");
	//console.log("BONGOBONGO!!!");
};

KingKong.prototype.attacks =
{
    Stamp:
	{
        attack: 8,
        defense: 3
    },
    Punch:
	{
        attack: 5,
        defense: 2
    },
	Tackle:
	{
        attack: 1,
        defense: 3
    },
	DrumOnChest:
	{
        attack: 6,
        defense: 4
    }
};

module.exports = KingKong;
