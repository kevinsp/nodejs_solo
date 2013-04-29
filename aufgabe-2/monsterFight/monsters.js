var Godzilla = require("./lib/Godzilla.js");
var KingKong = require("./lib/KingKong.js");
var Referee = require("./node_modules/monsters/lib/Referee.js");
var colors = require("ansicolors");

//EXECUTION
var godzilla = new Godzilla(["Punch", "Tackle", "BattleCry", "RoundHouseKick"]);
//*
var kingKong = new KingKong(["Stamp", "Punch", "Tackle", "DrumOnChest"]);

godzilla.on("growl", function(growl)
	{
		console.log(colors.cyan(this.name+" growled: "+growl));
	});
godzilla.on("hit", function(damage)
	{
		console.log(colors.red(colors.bgYellow("%s got hit with %s (remaining %s health)")), this.name, damage, this.getHealth());
	});
godzilla.on("attack", function(victim)
	{
		console.log(colors.cyan(this.name+" is attacking "+victim));
	});
godzilla.on("defend", function()
	{
		console.log(colors.blue(colors.bgYellow(this.name+" survived the attack without having lost life.")));
	});
godzilla.on("die", function()
	{
		console.log(colors.bgRed(colors.yellow("The fight is over! And the loser is %s")), this.name);
		process.exit(0);
	});


kingKong.on("growl", function(growl)
	{
		console.log(colors.cyan(this.name+" growled: "+growl));
	});
kingKong.on("hit", function(damage)
	{
		console.log(colors.red(colors.bgYellow("%s got hit with %s (remaining %s health)")), this.name, damage, this.getHealth());
	});
kingKong.on("attack", function(victim)
	{
		console.log(colors.cyan(this.name+" is attacking "+victim));
	});
kingKong.on("defend", function()
	{
		console.log(colors.blue(colors.bgYellow(this.name+" survived the attack without having lost life.")));
	});
kingKong.on("die", function()
	{
		console.log(colors.bgRed(colors.yellow("The fight is over! And the loser is %s")), this.name);
		process.exit(0);
	});

var referee = new Referee();
referee.greetMonsters(kingKong, godzilla);
referee.checkForCheaters();
referee.startFight();
//*/
