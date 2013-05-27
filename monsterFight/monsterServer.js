//old stuff

var Godzilla = require('./lib/Godzilla.js');
var KingKong = require('./lib/KingKong.js');
var Referee = require('monsters').Referee;
//var colors = require("ansicolors");
//var fs = require("fs");
//var connect = require("connect");
var express = require('express');
var app = express();

//var godzilla = new Godzilla(["Punch", "Tackle", "BattleCry", "RoundHouseKick"]);
//*
//var kingKong = new KingKong(["Stamp", "Punch", "Tackle", "DrumOnChest"]);
/*
godzilla.on("growl", function(growl)
	{
		//res.write(colors.green(colors.bgBrightWhite(this.name+" growled: "+growl)));
		fs.createReadStream("index.html").pipe(colors.green(colors.bgBrightWhite(this.name+" growled: "+growl)))
		//console.log(colors.green(colors.bgBrightWhite(this.name+" growled: "+growl)));
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
		//fs.createReadStream("/").pipe(text+"ROUND "+(fights.length+1))
		res.write(text+" ROUND %d ",fights.length);
	});

referee.on("end", function(result)
	{
		console.log("end logged");
		//res.write(result);
		fights.push(result);
		//res.end();
	});

referee.on("round", function()
	{
		console.log("round logged");
	});

function start(req, res, next)
{
	//res.setHeader('Content-Type', 'text/json');
	referee.greetMonsters(kingKong, godzilla);
	referee.checkForCheaters();
	referee.startFight();
	res.end();
}
*/
//connect().use("/",start).listen(3000);

//*
//var http = require("http"), server;
//var referee = new Referee();
var fights = new Array();
/*
server = http.createServer();

server.on("request", function onRequest(req, res)
{
	var godzilla = new Godzilla(["Punch", "Tackle", "BattleCry", "RoundHouseKick"]);
	var kingKong = new KingKong(["Stamp", "Punch", "Tackle", "DrumOnChest"]);
	var referee = new Referee();
	res.setHeader("Content-Type","text/json");
	if (req.url === "/")
	{
		var godzilla = new Godzilla(["Punch", "Tackle", "BattleCry", "RoundHouseKick"]);
		var kingKong = new KingKong(["Stamp", "Punch", "Tackle", "DrumOnChest"]);
		var referee = new Referee();
		godzilla.on("growl", function(growl)
		{
			//res.write(colors.green(colors.bgBrightWhite(this.name+" growled: "+growl)));
			res.write(this.name+" growled: "+growl+"\n");
			//fs.createReadStream("index.html").pipe(colors.bgBrightWhite(this.name+" growled: "+growl))
			//console.log(colors.green(colors.bgBrightWhite(this.name+" growled: "+growl)));
		});
		godzilla.on("hit", function(damage)
		{
			//res.write(colors.red(colors.bgYellow("%s got hit with %s (remaining %s health)")),
			//	this.name, damage, this.getHealth());
			var hit = this.name+" got hit with "+damage+" (remaining "+this.getHealth()+" health)\n";
			res.write(hit);
		});
		godzilla.on("attack", function(victim)
		{
			//res.write(colors.brightCyan(this.name+" is attacking "+victim));
			res.write(this.name+" is attacking "+victim+"\n");
		});
		godzilla.on("defend", function()
		{
			//.write(colors.blue(colors.bgYellow(this.name+" survived the attack without having lost life.")));
			res.write(this.name+" survived the attack without having lost life.\n");
		});
		godzilla.on("die", function()
		{
			//res.write(colors.bgRed(colors.yellow("The fight is over! And the loser is %s")), this.name);
			res.write("The fight is over! And the loser is "+this.name+"\n");
			//process.exit(0);
		});

		kingKong.on("growl", function(growl)
		{
			//res.write(colors.magenta(colors.bgBrightWhite(this.name+" growled: "+growl)));
			res.write(this.name+" growled: "+growl+"\n");
		});
		kingKong.on("hit", function(damage)
		{
			//res.write(colors.red(colors.bgYellow("%s got hit with %s (remaining %s health)")),
			//	this.name, damage, this.getHealth());
			var hit = this.name+" got hit with "+damage+" (remaining "+this.getHealth()+" health)\n";
			res.write(hit);
		});
		kingKong.on("attack", function(victim)
		{
			//res.write(colors.brightCyan(this.name+" is attacking "+victim));
			res.write(this.name+" is attacking "+victim+"\n");
		});
		kingKong.on("defend", function()
		{
			//.write(colors.blue(colors.bgYellow(this.name+" survived the attack without having lost life.")));
			res.write(this.name+" survived the attack without having lost life.\n");
		});
		kingKong.on("die", function()
		{
			//res.write(colors.bgRed(colors.yellow("The fight is over! And the loser is %s")), this.name);
			res.write("The fight is over! And the loser is "+this.name+"\n");
			//process.exit(0);
		});

		referee.on("moderation", function(text)
		{
			console.log("moderation logged");
			//fs.createReadStream("/").pipe(text+"ROUND "+(fights.length+1))
			var roundCount = " ROUND "+(fights.length+1)+"\n";
			res.write(text+roundCount);
		});
		referee.on("end", function(result)
		{
			//console.log("result: "+result);
			res.write("\n\n"+result+"\n");
			fights.push(result);
		});
		referee.on("round", function(cnt)
		{
			res.write("\nround "+cnt+" logged\n");
		});
		referee.greetMonsters(kingKong, godzilla);
		referee.checkForCheaters();
		referee.startFight();
	}
	else if (req.url == "/stat/:counter?")
	{
		if (req.params.counter)
		{
			if (fights[req.params.counter-1])
			{
				res.write(fights[req.params.counter-1]);
			}
			else
			{
				res.write("Fight "+req.params.counter+" not done yet!\n");
			}
		}
		else
		{
			if (fights)
			{
				for (fight in fights)
				{
					res.write(fight+"\n\n");
				}
			}
			else
			{
				res.write("No fights scheduled yet!");
			}
		}
	}
	else
	{
		res.statusCode = 404;
		res.end();
	}
});
*/

app.get('/stat/:counter?', function(req, res)
{
	if (req.params.counter)
	{
		if (fights[req.params.counter-1])
		{
			res.write('Fight '+req.params.counter+': '+fights[req.params.counter-1]);
			res.end();
		}
		else
		{
			res.write('Fight '+req.params.counter+' not done yet!\n');
			res.end();
		}
	}
	else
	{
		if (fights)
		{
			for (result in fights)
			{
				counter = parseInt(result) + 1;
				res.write('Fight '+counter+': '+fights[result]+'\n\n');
			}
			res.end();
		}
		else
		{
			res.write("No fights scheduled yet!");
			res.end();
		}
	}
});

app.get("/", function(req, res)
{
	var godzilla = new Godzilla(["Punch", "Tackle", "BattleCry", "RoundHouseKick"]);
	var kingKong = new KingKong(["Stamp", "Punch", "Tackle", "DrumOnChest"]);
	var referee = new Referee();
	godzilla.on("growl", function(growl)
	{
		//res.write(colors.green(colors.bgBrightWhite(this.name+" growled: "+growl)));
		res.write(this.name+" growled: "+growl+"\n");
		//fs.createReadStream("index.html").pipe(colors.bgBrightWhite(this.name+" growled: "+growl))
		//console.log(colors.green(colors.bgBrightWhite(this.name+" growled: "+growl)));
	});
	godzilla.on("hit", function(damage)
	{
		//res.write(colors.red(colors.bgYellow("%s got hit with %s (remaining %s health)")),
		//	this.name, damage, this.getHealth());
		var hit = this.name+" got hit with "+damage+" (remaining "+this.getHealth()+" health)\n";
		res.write(hit);
	});
	godzilla.on("attack", function(victim)
	{
		//res.write(colors.brightCyan(this.name+" is attacking "+victim));
		res.write(this.name+" is attacking "+victim+"\n");
	});
	godzilla.on("defend", function()
	{
		//.write(colors.blue(colors.bgYellow(this.name+" survived the attack without having lost life.")));
		res.write(this.name+" survived the attack without having lost life.\n");
	});
	godzilla.on("die", function()
	{
		//res.write(colors.bgRed(colors.yellow("The fight is over! And the loser is %s")), this.name);
		res.write("The fight is over! And the loser is "+this.name+"\n");
		//process.exit(0);
	});

	kingKong.on("growl", function(growl)
	{
		//res.write(colors.magenta(colors.bgBrightWhite(this.name+" growled: "+growl)));
		res.write(this.name+" growled: "+growl+"\n");
	});
	kingKong.on("hit", function(damage)
	{
		//res.write(colors.red(colors.bgYellow("%s got hit with %s (remaining %s health)")),
		//	this.name, damage, this.getHealth());
		var hit = this.name+" got hit with "+damage+" (remaining "+this.getHealth()+" health)\n";
		res.write(hit);
	});
	kingKong.on("attack", function(victim)
	{
		//res.write(colors.brightCyan(this.name+" is attacking "+victim));
		res.write(this.name+" is attacking "+victim+"\n");
	});
	kingKong.on("defend", function()
	{
		//.write(colors.blue(colors.bgYellow(this.name+" survived the attack without having lost life.")));
		res.write(this.name+" survived the attack without having lost life.\n");
	});
	kingKong.on("die", function()
	{
		//res.write(colors.bgRed(colors.yellow("The fight is over! And the loser is %s")), this.name);
		res.write("The fight is over! And the loser is "+this.name+"\n");
		//process.exit(0);
	});

	referee.on("moderation", function(text)
	{
		console.log("moderation logged");
		//fs.createReadStream("/").pipe(text+"ROUND "+(fights.length+1))
		var roundCount = " ROUND "+(fights.length+1)+"\n";
		res.write(text+roundCount);
	});
	referee.on("end", function(result)
	{
		//console.log("result: "+result);
		res.write("\n\n"+result+"\n");
		fights.push(result);
		res.end();
	});
	referee.on("round", function(cnt)
	{
		res.write("\nround "+cnt+" logged\n");
	});
	referee.greetMonsters(kingKong, godzilla);
	referee.checkForCheaters();
	referee.startFight();
});

app.listen(3000);

/*
	else
	{
		res.statusCode = 404;
		res.end();
	}
});
server.listen(3000,"127.0.0.1");
*/
