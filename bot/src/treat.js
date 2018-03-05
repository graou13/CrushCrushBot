var _dic_ = { };

exports.treat = async function (message, db) {
	for (var func in _dic_) {
    	if (typeof _dic_[func] == "function" && _dic_.hasOwnProperty(func)) {
   		    _dic_[func](message, db);
   		}
	}
}

_dic_.blacklist = async function(message, db) {};
_dic_.whitelist = async function(message, db) {};