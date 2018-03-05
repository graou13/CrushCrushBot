var _get_ = { };

exports.get = async function (type, message, args) {
    if (typeof _get_[type] == "function" && _get_.hasOwnProperty(type)) {
   	    return _get_[type](message, args);
   	}
};

_get_.channel = async function(message, args) {
	var ret = [];
	for (let i = 0; i < args.length; i++) {
		let arg = args[i];
		if (/\<\#\d{16,}\>/.test(arg)) {
			ret.push(arg.match(/\d{16,}/));
		}
	}
	return ret;
};

_get_.expression = async function(message, args) {
	//gotta fit /regex/, word and /regex with spaces/
	var regexes = []
	args = args.join(" ");
	while(/\/(?:[^\/]|\\\/)+(?<!\\)\/[gmiyus]{0,6}/.test(args)) {
		regexes.push(args.match(/\/(?:[^\/]|\\\/)+(?<!\\)\/[gmiyus]{0,6}/));
		args = args.replace(/\/(?:[^\/]|\\\/)+(?<!\\)\/[gmiyus]{0,6}/, "");
	}
	args = args.replace(/\<\#\d{16,}\>/g, "");
	args = args.replace(/\-[a-z](?:\d+)?/g, "");
	while(/[^\s]+/.test(args)) {
		regexes.push("/" + String(args.match(/[^\s]+/)).replace(/(?:\.|\^|\$|\*|\+|\?|\(|\)|\[|\{|\\|\|)/g, function(match) {return '\\\\' + match; }) + "/");
		args = args.replace(/[^\s]+/, "");
	}
	return regexes;
};

_get_.option = async function(message, args) {
	var ret = [];
	for (let i = 0; i < args.length; i++) {
		let arg = args[i];
		if (/\-[a-z](?:\d+)?/.test(arg)) {
			ret.push(arg.match(/[a-z](?:\d+)?/));
		}
	}
	return ret;
};