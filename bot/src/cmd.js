const help = require('./help.json');
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

exports.execute = async function (message, args, command) {
	if (typeof _dic_[command] == "function" && _dic_.hasOwnProperty(command)) {
		await _dic_[command](message, args);
	} else if (typeof _dic_[alias[command]] == "function" && _dic_.hasOwnProperty(alias[command])) {
		await _dic_[alias[command]](message, args);
	} else {
		await _dic_['help'](message, args);
	}
}

_dic_.say = async function(message, args) {
	if (args.length < 1) return;
	await message.channel.send(args.join(" "));
}

_dic_.countarg = async function(message, args) {
	await message.channel.send('there is ' + args.length + ' arguments.');
}

_dic_.help = async function(message, args) {
	//I should generate a nice presentation of the long command explanation if there's an arg or long help explanation if the arg is invalid or missing.
	//also long help explanation will use short commands explanation
};

_dic_.list = async function(message, args) {};

_dic_.top = async function(message, args) {};

_dic_.info = async function(message, args) {};

_dic_.blacklist = async function(message, args) {};

_dic_.whitelist = async function(message, args) {};

_dic_.changeexpression = async function(message, args) {};

_dic_.changeweight = async function(message, args) {};

_dic_.changechannel = async function(message, args) {};

_dic_.changelogchannel = async function(message, args) {};

_dic_.addchannel = async function(message, args) {};

_dic_.removechannel = async function(message, args) {};

_dic_.deleterule = async function(message, args) {};

_dic_.deleteoffence = async function(message, args) {};

_dic_.clearchannel = async function(message, args) {};

_dic_.clearuser = async function(message, args) {};