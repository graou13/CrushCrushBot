const help = require('./help.json');
const utils = require('./util.js');
const alias = 
{
	h: "help",
	l: "list",
	t: "top",
	i: "info",
	bl: "blacklist",
	wl: "whitelist",
	che: "changeexpression",
	chw: "changeweight",
	chc: "changechannel",
	chlc: "changelogchannel",
	addc: "addchannel",
	remc: "removechannel",
	delr: "deleterule",
	delo: "deleteoffence",
	clrc: "clearchannel",
	clru: "clearuser"

} //maybe we should put this in a json?
var _dic_ = { };

exports.execute = async function (message, args, command, db) {
	if (typeof _dic_[command] == "function" && _dic_.hasOwnProperty(command)) {
		await _dic_[command](message, args, db);
	} else if (typeof _dic_[alias[command]] == "function" && _dic_.hasOwnProperty(alias[command])) {
		await _dic_[alias[command]](message, args, db);
	} else {
		await _dic_['help'](message, args, db);
	}
}


_dic_.test = async function(message, args, db) {
	var msg = "list of channels:";
	let channels = await utils.get('channel', message, args);
	for (let i = 0; i < channels.length; i++) {
		let chan = channels[i];
		msg += "\n  channel : <#" + chan + "> (" + chan + ")"; 
	}
	msg += "\nlist of options:";
	let options = await utils.get('option', message, args);
	for (let i = 0; i < options.length; i++) {
		let opt = options[i];
		msg += "\n  option : " + String(opt).match(/[a-z]/) + "=" + String(opt).match(/\d+/);
	}
	msg += "\nlist of expressions:";
	let expressions = await utils.get('expression', message, args);
	for (let i = 0; i < expressions.length; i++) {
		let exp = expressions[i];
		msg += "\n  expression : " + exp; 
	}
	await message.channel.send(msg);
};
_dic_.help = async function(message, args, db) {
	//I should generate a nice presentation of the long command explanation if there's an arg or long help explanation if the arg is invalid or missing.
	//also long help explanation will use short commands explanation
};

_dic_.list = async function(message, args, db) {};

_dic_.top = async function(message, args, db) {};

_dic_.info = async function(message, args, db) {};

_dic_.blacklist = async function(message, args, db) {};

_dic_.whitelist = async function(message, args, db) {};

_dic_.changeexpression = async function(message, args, db) {};

_dic_.changeweight = async function(message, args, db) {};

_dic_.changechannel = async function(message, args, db) {};

_dic_.changelogchannel = async function(message, args, db) {};

_dic_.addchannel = async function(message, args, db) {};

_dic_.removechannel = async function(message, args, db) {};

_dic_.deleterule = async function(message, args, db) {};

_dic_.deleteoffence = async function(message, args, db) {};

_dic_.clearchannel = async function(message, args, db) {};

_dic_.clearuser = async function(message, args, db) {};