const config = require("../../config");
const {
  DataTypes
} = require("sequelize");
const MuteDB = config.DATABASE.define("automute", {
  'chat': {
    'type': DataTypes.STRING,
    'allowNull': false
  },
  'time': {
    'type': DataTypes.STRING,
    'allowNull': false
  }
});
async function getAutoMute() {
  return await MuteDB.findAll();
}
async function setAutoMute(_0x5f200c = null, _0x3ed0c0 = null) {
  var _0x4ca2a5 = {
    'chat': _0x5f200c
  };
  var _0x3117a5 = await MuteDB.findAll({
    'where': _0x4ca2a5
  });
  if (_0x3117a5.length !== 0x0) {
    for (var _0x247510 = 0x0; _0x247510 < _0x3117a5.length; _0x247510++) {
      await _0x3117a5[_0x247510].destroy();
    }
  }
  await MuteDB.create({
    'chat': _0x5f200c,
    'time': _0x3ed0c0
  });
  return true;
}
async function delAutoMute(_0x15830f = null) {
  var _0x4d993a = {
    'chat': _0x15830f
  };
  var _0x58356c = await MuteDB.findAll({
    'where': _0x4d993a
  });
  if (_0x58356c.length !== 0x0) {
    for (var _0x493502 = 0x0; _0x493502 < _0x58356c.length; _0x493502++) {
      await _0x58356c[_0x493502].destroy();
    }
  }
  return true;
}
const unMuteDB = config.DATABASE.define("autounmute", {
  'chat': {
    'type': DataTypes.STRING,
    'allowNull': false
  },
  'time': {
    'type': DataTypes.STRING,
    'allowNull': false
  }
});
async function getAutounMute() {
  return await unMuteDB.findAll();
}
async function setAutounMute(_0x1146bb = null, _0x42ea13 = null) {
  var _0x2a666c = {
    'chat': _0x1146bb
  };
  var _0x201ec0 = await unMuteDB.findAll({
    'where': _0x2a666c
  });
  if (_0x201ec0.length !== 0x0) {
    for (var _0x5bf29f = 0x0; _0x5bf29f < _0x201ec0.length; _0x5bf29f++) {
      await _0x201ec0[_0x5bf29f].destroy();
    }
  }
  await unMuteDB.create({
    'chat': _0x1146bb,
    'time': _0x42ea13
  });
  return true;
}
async function delAutounMute(_0x43e244 = null) {
  var _0xe64d80 = {
    'chat': _0x43e244
  };
  var _0x5d344e = await unMuteDB.findAll({
    'where': _0xe64d80
  });
  if (_0x5d344e.length !== 0x0) {
    for (var _0x162602 = 0x0; _0x162602 < _0x5d344e.length; _0x162602++) {
      await _0x5d344e[_0x162602].destroy();
    }
  }
  return true;
}
const cmdDB = config.DATABASE.define("stickcmd", {
  'command': {
    'type': DataTypes.STRING(0x3e8),
    'allowNull': false
  },
  'file': {
    'type': DataTypes.STRING(0x3e8),
    'allowNull': false
  }
});
async function getSticks() {
  return await cmdDB.findAll();
}
async function stickCmd(_0x4d7011 = null, _0x1d273e = null) {
  await config.DATABASE.sync();
  var _0x4389a6 = {
    'file': _0x1d273e
  };
  var _0x225d2e = await cmdDB.findAll({
    'where': _0x4389a6
  });
  if (_0x225d2e.length !== 0x0) {
    for (var _0x445622 = 0x0; _0x445622 < _0x225d2e.length; _0x445622++) {
      await _0x225d2e[_0x445622].destroy();
    }
  }
  await cmdDB.create({
    'command': _0x4d7011,
    'file': _0x1d273e
  });
  return true;
}
async function unstickCmd(_0x52f42a = null, _0xbc7f7a = 0x1) {
  var _0x3df591 = {
    'file': _0x52f42a
  };
  if (_0xbc7f7a === 0x2) {
    _0x3df591 = {
      'command': _0x52f42a
    };
  }
  var _0x1864f3 = await cmdDB.findAll({
    'where': _0x3df591
  });
  if (_0x1864f3.length === 0x0) {
    return false;
  }
  if (_0x1864f3.length !== 0x0) {
    for (var _0x135522 = 0x0; _0x135522 < _0x1864f3.length; _0x135522++) {
      await _0x1864f3[_0x135522].destroy();
    }
  }
  return true;
}
module.exports = {
  'setAutounMute': setAutounMute,
  'setAutoMute': setAutoMute,
  'delAutoMute': delAutoMute,
  'getAutounMute': getAutounMute,
  'getAutoMute': getAutoMute,
  'delAutounMute': delAutounMute,
  'unstickCmd': unstickCmd,
  'stickCmd': stickCmd,
  'getSticks': getSticks
};