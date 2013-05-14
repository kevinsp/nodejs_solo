var Godzilla = require("./lib/Godzilla.js");
var KingKong = require("./lib/KingKong.js");
var Referee = require("monsters").Referee;
var colors = require("ansicolors");

//EXECUTION
var godzilla = new Godzilla(["Punch", "Tackle", "BattleCry", "RoundHouseKick"]);
//*
var kingKong = new KingKong(["Stamp", "Punch", "Tackle", "DrumOnChest"]);

godzilla.on("growl", function(growl)
	{
		console.log(colors.green(colors.bgBrightWhite(this.name+" growled: "+growl)));
	});
godzilla.on("hit", function(damage)
	{
		console.log(colors.red(colors.bgYellow("%s got hit with %s (remaining %s health)")), this.name, damage, this.getHealth());
	});
godzilla.on("attack", function(victim)
	{
		console.log(colors.brightCyan(this.name+" is attacking "+victim));
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
		console.log(colors.magenta(colors.bgBrightWhite(this.name+" growled: "+growl)));
	});
kingKong.on("hit", function(damage)
	{
		console.log(colors.red(colors.bgYellow("%s got hit with %s (remaining %s health)")), this.name, damage, this.getHealth());
	});
kingKong.on("attack", function(victim)
	{
		console.log(colors.brightCyan(this.name+" is attacking "+victim));
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

var fights = new Array();

referee.on("moderation", function(text)
	{
		console.log("moderation logged");
		console.log(text+" ROUND %d ",(fights.length+1))
		//fs.createReadStream("index.html").pipe(text+" ROUND %d ",(fights.length+1))
		//res.write(text+" ROUND %d ",fights.length);
	});

referee.on("end", function(result)
	{
		console.log("end logged");
		//res.write(result);
		fights.push(result);
		console.log("Following ROUND %d ",(fights.length+1));
		console.log("Last result: "+fights[0]);
		//res.end();
	});

referee.on("round", function()
	{
		console.log("round logged");
	});

referee.greetMonsters(kingKong, godzilla);
referee.checkForCheaters();
referee.startFight();
//*/
