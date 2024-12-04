var config = require("./config");
var Commands = [];
var skl11;
if (config.HANDLERS == "false") {
  skl11 = '^';
} else {
  skl11 = config.HANDLERS;
}
var sk;
if (config.HANDLERS.split('').length > 0x1 && config.HANDLERS.split('')[0x0] === config.HANDLERS.split('')[0x1]) {
  sk = config.HANDLERS;
} else {
  if (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(skl11) && skl11 !== '^') {
    sk = '^[' + skl11 + ']';
  } else {
    sk = skl11;
  }
}
if (config.MULTI_HANDLERS && sk.includes('^[')) {
  sk = sk + '?';
}
function Module(_0x2dd480, _0x1c1983) {
  var _0x49902a = ["photo", "image", "text", "button", "group_update", "message"];
  var _0x105d02 = {
    'fromMe': _0x2dd480.fromMe === undefined ? true : _0x2dd480.fromMe,
    'onlyGroup': _0x2dd480.onlyGroup === undefined ? false : _0x2dd480.onlyGroup,
    'onlyPinned': _0x2dd480.onlyPinned === undefined ? false : _0x2dd480.onlyPinned,
    'onlyPm': _0x2dd480.onlyPm === undefined ? false : _0x2dd480.onlyPm,
    'deleteCommand': _0x2dd480.deleteCommand === undefined ? true : _0x2dd480.deleteCommand,
    'desc': _0x2dd480.desc === undefined ? '' : _0x2dd480.desc,
    'usage': _0x2dd480.usage === undefined ? '' : _0x2dd480.usage,
    'dontAddCommandList': _0x2dd480.dontAddCommandList === undefined ? false : _0x2dd480.dontAddCommandList,
    'warn': _0x2dd480.warn === undefined ? '' : _0x2dd480.warn,
    'use': _0x2dd480.use === undefined ? '' : _0x2dd480.use,
    'function': _0x1c1983
  };
  if (_0x2dd480.on === undefined && _0x2dd480.pattern === undefined) {
    _0x105d02.on = "message";
    _0x105d02.fromMe = false;
  } else if (_0x2dd480.on !== undefined && _0x49902a.includes(_0x2dd480.on)) {
    _0x105d02.on = _0x2dd480.on;
    if (_0x2dd480.pattern !== undefined) {
      _0x105d02.pattern = new RegExp((_0x2dd480.handler === undefined || _0x2dd480.handler === true ? sk : '') + _0x2dd480.pattern, 's');
    }
  } else {
    _0x105d02.pattern = new RegExp((_0x2dd480.handler === undefined || _0x2dd480.handler === true ? sk : '') + _0x2dd480.pattern, 's');
  }
  Commands.push(_0x105d02);
  return _0x105d02;
}
module.exports = {
  'Module': Module,
  'commands': Commands
};