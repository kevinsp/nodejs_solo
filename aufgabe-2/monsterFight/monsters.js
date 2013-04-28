var Godzilla = require("./lib/Godzilla.js");
var KingKong = require("./lib/KingKong.js");
var Referee = require("./node_modules/monsters/lib/Referee.js");

//EXECUTION
var godzilla = new Godzilla(["Punch", "Tackle", "BattleCry", "RoundHouseKick"]);
//*
var kingKong = new KingKong(["Stamp", "Punch", "Tackle", "DrumOnChest"]);

var referee = new Referee();
referee.greetMonsters(kingKong, godzilla);
referee.checkForCheaters();
referee.startFight();
//*/
