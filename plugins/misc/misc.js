const _0x401a62 = require("fluent-ffmpeg");
var {
  skbuffer: _0x15ea3a,
  ytdlServer: _0x13a02a,
  upload: _0x2ba2b8
} = require("raganork-bot");
const _0x15d100 = require("raganork-bot");
const _0xef1d5a = require("axios");
const _0xdd1b70 = require("fs");
const _0x57fed2 = require("google-tts-api");
const _0x2ac6a7 = require("node-webpmux");
const _0x99e7c8 = require("@vitalets/google-translate-api");
const {
  saveMessage: _0x1f0d40
} = require("./saveMessage");
const _0x12fc03 = require("jimp");
const _0x58c66d = require("../../config");
const {
  downloadYT: _0x38d88d
} = require("./yt");
const _0x13f3a7 = require("raganork-bot");
const {
  DataTypes: _0x174f73
} = require("sequelize");
const _0x5966bc = require("acrcloud");
const {
  Innertube: _0x3d8aa3,
  UniversalCache: _0x23f1f7
} = require("youtubei.js");
_0x58c66d.DATABASE.sync();
const _0x1403c0 = require("form-data");
const _0x49426e = _0x485f1a => {
  var _0x4297b7 = {
    അ: "a",
    ആ: "aa",
    ഇ: "i",
    ഈ: "ee",
    ഉ: "u",
    ഊ: "oo",
    ഋ: "ru",
    എ: "e",
    ഏ: "e",
    ഐ: "ai",
    ഒ: "o",
    ഓ: "o",
    ഔ: "au"
  };
  var _0x32d603 = {
    ക്ക: "kk",
    ഗ്ഗ: "gg",
    ങ്ങ: "ng",
    ക്ക: "kk",
    ച്ച: "cch",
    ജ്ജ: "jj",
    ഞ്ഞ: "nj",
    ട്ട: "tt",
    ണ്ണ: "nn",
    ത്ത: "tth",
    ദ്ദ: "ddh",
    ദ്ധ: "ddh",
    ന്ന: "nn",
    ന്ത: "nth",
    ങ്ക: "nk",
    ണ്ട: "nd",
    ബ്ബ: "bb",
    പ്പ: "pp",
    മ്മ: "mm",
    യ്യ: "yy",
    ല്ല: "ll",
    വ്വ: "vv",
    ശ്ശ: "sh",
    സ്സ: "s",
    ക്സ: "ks",
    ഞ്ച: "nch",
    ക്ഷ: "ksh",
    മ്പ: "mp",
    റ്റ: "tt",
    ന്റ: "nt",
    ന്ത: "nth",
    ന്ത്യ: "nthy"
  };
  var _0x3ec247 = {
    ക: "k",
    ഖ: "kh",
    ഗ: "g",
    ഘ: "gh",
    ങ: "ng",
    ച: "ch",
    ഛ: "chh",
    ജ: "j",
    ഝ: "jh",
    ഞ: "nj",
    ട: "d",
    ഠ: "dh",
    ഡ: "d",
    ഢ: "dd",
    ണ: "n",
    ത: "th",
    ഥ: "th",
    ദ: "d",
    ധ: "dh",
    ന: "n",
    പ: "p",
    ഫ: "ph",
    ബ: "b",
    ഭ: "bh",
    മ: "m",
    യ: "y",
    ര: "r",
    ല: "l",
    വ: "v",
    ശ: "sh",
    ഷ: "sh",
    സ: "s",
    ഹ: "h",
    ള: "l",
    ഴ: "zh",
    റ: "r"
  };
  var _0x3a1998 = {
    ൽ: "l",
    ൾ: "l",
    ൺ: "n",
    ൻ: "n",
    ർ: "r",
    ൿ: "k"
  };
  var _0x173371 = {
    "ു്": "u",
    "ാ": "aa",
    "ി": "i",
    "ീ": "ee",
    "ു": "u",
    "ൂ": "oo",
    "ൃ": "ru",
    "െ": "e",
    "േ": "e",
    "ൈ": "y",
    "ൊ": "o",
    "ോ": "o",
    "ൌ": "ou",
    "ൗ": "au",
    "ഃ": "a"
  };
  function _0x44bc1d(_0x586b23) {
    _0x586b23 = _0x142ced(_0x32d603, _0x586b23 = _0x586b23.replace(/[\u200B-\u200D\uFEFF]/g, ''));
    _0x586b23 = _0x142ced(_0x4297b7, _0x586b23);
    _0x586b23 = _0x142ced(_0x3ec247, _0x586b23);
    var _0x2c65bc = '';
    for (var _0x577220 in _0x32d603) if (_0x32d603.hasOwnProperty(_0x577220)) {
      _0x2c65bc = _0x32d603[_0x577220];
      _0x586b23 = (_0x586b23 = (_0x586b23 = _0x586b23.replace(RegExp(_0x577220 + "്([\\w])", "g"), _0x2c65bc + "$1")).replace(RegExp(_0x577220 + "്", "g"), _0x2c65bc + "u")).replace(RegExp(_0x577220, "g"), _0x2c65bc + "a");
    }
    for (var _0x577220 in _0x3ec247) if (_0x3ec247.hasOwnProperty(_0x577220)) {
      _0x2c65bc = _0x3ec247[_0x577220];
      _0x586b23 = _0x586b23.replace(RegExp(_0x577220 + "(?!്)", "g"), _0x2c65bc + "a");
    }
    for (var _0x577220 in _0x3ec247) if (_0x3ec247.hasOwnProperty(_0x577220)) {
      _0x2c65bc = _0x3ec247[_0x577220];
      _0x586b23 = _0x586b23.replace(RegExp(_0x577220 + "്(?![\\s).;,\"'/\\%!])", "ig"), _0x2c65bc);
    }
    for (var _0x577220 in _0x3ec247) if (_0x3ec247.hasOwnProperty(_0x577220)) {
      _0x2c65bc = _0x3ec247[_0x577220];
      _0x586b23 = _0x586b23.replace(RegExp(_0x577220 + "്", "g"), _0x2c65bc + "u");
    }
    for (var _0x577220 in _0x3ec247) if (_0x3ec247.hasOwnProperty(_0x577220)) {
      _0x2c65bc = _0x3ec247[_0x577220];
      _0x586b23 = _0x586b23.replace(RegExp(_0x577220, "g"), _0x2c65bc);
    }
    for (var _0x577220 in _0x4297b7) if (_0x4297b7.hasOwnProperty(_0x577220)) {
      _0x2c65bc = _0x4297b7[_0x577220];
      _0x586b23 = _0x586b23.replace(RegExp(_0x577220, "g"), _0x2c65bc);
    }
    for (var _0x577220 in _0x3a1998) if (_0x3a1998.hasOwnProperty(_0x577220)) {
      _0x2c65bc = _0x3a1998[_0x577220];
      _0x586b23 = _0x586b23.replace(RegExp(_0x577220, "g"), _0x2c65bc);
    }
    _0x586b23 = _0x586b23.replace(/ം/g, "m");
    for (var _0x577220 in _0x173371) if (_0x173371.hasOwnProperty(_0x577220)) {
      _0x2c65bc = _0x173371[_0x577220];
      _0x586b23 = _0x586b23.replace(RegExp(_0x577220, "g"), _0x2c65bc);
    }
    return _0x586b23 = _0x586b23.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (_0x26772c) {
      return _0x26772c.toUpperCase();
    });
  }
  function _0x142ced(_0x3bbe2e, _0x2c5c45) {
    var _0x4bc14e = 0x0;
    for (var _0x49d405 = RegExp("(" + _0x483ba5(_0x3bbe2e).join("|") + ")(" + _0x483ba5(_0x173371).join("|") + ")", "g"); null != _0x4bc14e;) {
      if (_0x4bc14e = _0x49d405.exec(_0x2c5c45)) {
        _0x2c5c45 = _0x2c5c45.replace(RegExp(_0x4bc14e[0x0], "g"), _0x3bbe2e[_0x4bc14e[0x1]] + _0x173371[_0x4bc14e[0x2]]);
      }
    }
    return _0x2c5c45;
  }
  function _0x483ba5(_0x155724) {
    var _0x1481db = [];
    for (var _0xda28aa in _0x155724) if (_0x155724.hasOwnProperty(_0xda28aa)) {
      _0x1481db.push(_0xda28aa);
    }
    return _0x1481db;
  }
  return _0x44bc1d(_0x485f1a);
};
const _0x33d415 = async _0x41518b => {
  try {
    let {
      data: _0x565e7f
    } = await _0xef1d5a("https://inputtools.google.com/request?text=" + _0x41518b + "&itc=ml-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8");
    return _0x565e7f[0x1][0x0][0x1][0x0] || false;
  } catch (_0x410b9b) {
    console.log(_0x410b9b.message);
    return false;
  }
};
async function _0x1aa4cf(_0x5ef264, _0x4cfc4f) {
  try {
    const _0x1b2ace = new _0x1403c0();
    _0x1b2ace.append("input", _0x5ef264);
    _0x1b2ace.append("bid", "176224");
    _0x1b2ace.append("uid", _0x4cfc4f);
    _0x1b2ace.append("form_build_id", "form-njl4Wq7QBeLqiqXuLbDjiCF41L7_HjWerk2SFXZFXoQ");
    _0x1b2ace.append("form_token", "xJtf4NPvnKiI4Cmz2V4exLmJ-VZHh4EG--X_1c929cc");
    _0x1b2ace.append("form_id", "aco_train_form");
    var _0x63e110 = {
      cookie: "arrived=1687622466; acouid=f55ff5c4-cbab-42a9-bb79-aabb72195171; 36-aconavi=0; SSESSd687e4fd4ed7c750e040e0f0a43bfb3d=uygEUT0rzE_8DrwaDYUktwDCaxWySjPkuIK4K-ImIBs; Drupal.tableDrag.showWeight=0"
    };
    var _0x205e6c = {
      headers: _0x63e110
    };
    const {
      data: _0x551824
    } = await _0xef1d5a.post("https://brainshop.ai/system/ajax", _0x1b2ace, _0x205e6c);
    return _0x551824[0x1].data.split("class=\"train-log-text\">")[0x2].split("</td>")[0x0].trim();
  } catch (_0x3600f3) {
    console.log(_0x3600f3);
    return "Chatbot server down!";
  }
}
var _0x5d20c8 = {
  type: _0x174f73.STRING,
  allowNull: false
};
var _0x330058 = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x4f87ee = {
  chat: _0x5d20c8,
  user: _0x330058
};
const _0x5c5232 = _0x58c66d.DATABASE.define("warn", _0x4f87ee);
var _0x2f84f1 = {
  host: "identify-eu-west-1.acrcloud.com",
  access_key: _0x58c66d.ACR_A,
  access_secret: _0x58c66d.ACR_S
};
const _0x483a37 = new _0x5966bc(_0x2f84f1);
function _0xa91ac3(_0x5c4c39, _0x2d3912) {
  var _0x3eaeb8 = '';
  for (var _0x55a160 in _0x2d3912) {
    _0x3eaeb8 += _0x5c4c39.startsWith(_0x2d3912[_0x55a160]) + " ";
  }
  return !_0x3eaeb8.includes(true);
}
async function _0x8e9810(_0x2961f4 = null, _0x2af5dc = null, _0x492c10) {
  await _0x13f3a7.filecheck();
  var _0x2c3eb2 = parseInt(_0x492c10);
  var _0x49d677 = {
    chat: _0x2961f4,
    user: _0x2af5dc
  };
  var _0x17e489 = {
    where: _0x49d677
  };
  var _0xe760d8 = await _0x5c5232.findAll(_0x17e489);
  if (_0xe760d8.length < 0x1) {
    return false;
  } else {
    var _0x106b8a = _0xe760d8.length;
    var _0x2567a4 = _0x2c3eb2 - _0x106b8a;
    if (_0x2567a4 < 0x1) {
      return 0x0;
    } else {
      return _0x2567a4;
    }
  }
}
async function _0x378a53(_0x4007be, _0x57aa1b) {
  if (_0x57aa1b.packname || _0x57aa1b.author) {
    const _0x13d2e1 = new _0x2ac6a7.Image();
    var _0x128204 = {
      "sticker-pack-id": "github.com/souravkl11/raganork",
      "sticker-pack-name": _0x57aa1b.packname,
      "sticker-pack-publisher": _0x57aa1b.author,
      emojis: _0x57aa1b.categories ? _0x57aa1b.categories : [''],
      "android-app-store-link": _0x57aa1b.android ? _0x57aa1b.android : '',
      "ios-app-store-link": _0x57aa1b.ios ? _0x57aa1b.ios : ''
    };
    const _0x3128c7 = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
    const _0x57f18f = Buffer.from(JSON.stringify(_0x128204), "utf-8");
    const _0x439541 = Buffer.concat([_0x3128c7, _0x57f18f]);
    _0x439541.writeUIntLE(_0x57f18f.length, 0xe, 0x4);
    await _0x13d2e1.load(_0x4007be);
    _0x13d2e1.exif = _0x439541;
    await _0x13d2e1.save("exif.webp");
    return "exif.webp";
  }
}
async function _0x26ffd6(_0x527d38 = null, _0x2bc76b = null, _0x47976f) {
  await _0x13f3a7.filecheck();
  var _0x2e45f6 = {
    chat: _0x527d38,
    user: _0x2bc76b
  };
  await _0x5c5232.create(_0x2e45f6);
  return await _0x8e9810(_0x527d38, _0x2bc76b, _0x47976f);
}
async function _0x24c517(_0x493280 = null, _0x127086) {
  await _0x13f3a7.filecheck();
  var _0xfcd82d = {
    chat: _0x493280,
    user: _0x127086
  };
  var _0xc771fb = {
    where: _0xfcd82d
  };
  var _0x5d7b09 = await _0x5c5232.findAll(_0xc771fb);
  if (_0x5d7b09.length < 0x1) {
    return false;
  } else {
    for (var _0x3f5531 = 0x0; _0x3f5531 < _0x5d7b09.length; _0x3f5531++) {
      await _0x5d7b09[_0x3f5531].destroy();
    }
  }
  return true;
}
;
var _0x3ccd4e = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x3f656b = {
  jid: _0x3ccd4e
};
const _0x19453a = _0x58c66d.DATABASE.define("fake", _0x3f656b);
async function _0x5d580e() {
  const _0x46eaef = await _0x19453a.findAll();
  return _0x46eaef;
}
async function _0x5f062f(_0x2d2cac) {
  var _0x517150 = {
    jid: _0x2d2cac
  };
  return await _0x19453a.create(_0x517150);
}
async function _0x56b2bf(_0x5aea67 = null) {
  var _0x545ab6 = {
    jid: _0x5aea67
  };
  var _0xe27ffd = {
    where: _0x545ab6
  };
  return await _0x19453a.destroy(_0xe27ffd);
}
async function _0x104284() {
  var _0x5cb5f1 = {
    where: {},
    truncate: true
  };
  return await _0x19453a.destroy(_0x5cb5f1);
}
var _0x54f20f = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x650381 = {
  jid: _0x54f20f
};
const _0x432c8c = _0x58c66d.DATABASE.define("antilink", _0x650381);
async function _0x2d9d78() {
  const _0xb9c05b = await _0x432c8c.findAll();
  return _0xb9c05b;
}
async function _0x322cf6(_0x1518f2) {
  var _0x24b6fc = {
    jid: _0x1518f2
  };
  return await _0x432c8c.create(_0x24b6fc);
}
async function _0x34bef8(_0x49cb18 = null) {
  var _0x385260 = {
    jid: _0x49cb18
  };
  var _0x50f6aa = {
    where: _0x385260
  };
  return await _0x432c8c.destroy(_0x50f6aa);
}
async function _0x4a0ee5() {
  var _0x163d33 = {
    where: {},
    truncate: true
  };
  return await _0x432c8c.destroy(_0x163d33);
}
var _0x314c67 = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x654fb6 = {
  jid: _0x314c67
};
const _0x35bdae = _0x58c66d.DATABASE.define("antispam", _0x654fb6);
async function _0x584b27() {
  const _0x1fa19f = await _0x35bdae.findAll();
  return _0x1fa19f;
}
async function _0x4afb52(_0x3d567a) {
  var _0x1d4e6e = {
    jid: _0x3d567a
  };
  return await _0x35bdae.create(_0x1d4e6e);
}
async function _0x554659(_0x360ea6 = null) {
  var _0x526cdc = {
    jid: _0x360ea6
  };
  var _0x3c8b63 = {
    where: _0x526cdc
  };
  return await _0x35bdae.destroy(_0x3c8b63);
}
async function _0x4f32a0() {
  var _0x1dde8b = {
    where: {},
    truncate: true
  };
  return await _0x35bdae.destroy(_0x1dde8b);
}
var _0x551573 = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x2efe01 = {
  jid: _0x551573
};
const _0x5c13b7 = _0x58c66d.DATABASE.define("pdm", _0x2efe01);
async function _0xdbc39b() {
  const _0x34c9a4 = await _0x5c13b7.findAll();
  return _0x34c9a4;
}
async function _0x127101(_0x131842) {
  var _0x499dfd = {
    jid: _0x131842
  };
  return await _0x5c13b7.create(_0x499dfd);
}
async function _0x4e3286(_0x4807d4 = null) {
  var _0x39e72e = {
    jid: _0x4807d4
  };
  var _0x28cd99 = {
    where: _0x39e72e
  };
  return await _0x5c13b7.destroy(_0x28cd99);
}
async function _0x1e89e7() {
  var _0x2d90bb = {
    where: {},
    truncate: true
  };
  return await _0x5c13b7.destroy(_0x2d90bb);
}
var _0x7fa971 = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x414a90 = {
  jid: _0x7fa971
};
const _0x27346c = _0x58c66d.DATABASE.define("antidemote", _0x414a90);
async function _0x2a606e() {
  const _0x1b03d = await _0x27346c.findAll();
  return _0x1b03d;
}
async function _0x5a8fd5(_0x5b72e1) {
  var _0x3a3738 = {
    jid: _0x5b72e1
  };
  return await _0x27346c.create(_0x3a3738);
}
async function _0x5c536e(_0x3ea40c = null) {
  var _0x397e75 = {
    jid: _0x3ea40c
  };
  var _0x16ff80 = {
    where: _0x397e75
  };
  return await _0x27346c.destroy(_0x16ff80);
}
async function _0x16cefd() {
  var _0x1f490c = {
    where: {},
    truncate: true
  };
  return await _0x27346c.destroy(_0x1f490c);
}
var _0x11f7bd = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x29445f = {
  jid: _0x11f7bd
};
const _0x2bd783 = _0x58c66d.DATABASE.define("antipromote", _0x29445f);
async function _0x2cbfc0() {
  const _0x3f3181 = await _0x2bd783.findAll();
  return _0x3f3181;
}
async function _0xc00abb(_0x3d02cb) {
  var _0x174228 = {
    jid: _0x3d02cb
  };
  return await _0x2bd783.create(_0x174228);
}
async function _0x32352a(_0x13bed0 = null) {
  var _0x2d0084 = {
    jid: _0x13bed0
  };
  var _0x3f6272 = {
    where: _0x2d0084
  };
  return await _0x2bd783.destroy(_0x3f6272);
}
async function _0x5ccd85() {
  var _0x491a7e = {
    where: {},
    truncate: true
  };
  return await _0x2bd783.destroy(_0x491a7e);
}
var _0x23a5b1 = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x8cef5c = {
  jid: _0x23a5b1
};
const _0x186a39 = _0x58c66d.DATABASE.define("antibot", _0x8cef5c);
async function _0x4f0106() {
  const _0x51f609 = await _0x186a39.findAll();
  return _0x51f609;
}
async function _0x132cba(_0x5271bb) {
  var _0x311f19 = {
    jid: _0x5271bb
  };
  return await _0x186a39.create(_0x311f19);
}
async function _0x3216ff(_0x1f1efa = null) {
  var _0x120bd0 = {
    jid: _0x1f1efa
  };
  var _0xff763f = {
    where: _0x120bd0
  };
  return await _0x186a39.destroy(_0xff763f);
}
async function _0x416dc5() {
  var _0x308a01 = {
    where: {},
    truncate: true
  };
  return await _0x186a39.destroy(_0x308a01);
}
var _0x5a96ea = {
  type: _0x174f73.TEXT,
  allowNull: false
};
var _0x3eb23d = {
  jid: _0x5a96ea
};
const _0x43cf9f = _0x58c66d.DATABASE.define("antiword", _0x3eb23d);
async function _0x20f4a0() {
  const _0x1a076d = await _0x43cf9f.findAll();
  return _0x1a076d;
}
async function _0x39ef61(_0x17df03) {
  var _0x541695 = {
    jid: _0x17df03
  };
  return await _0x43cf9f.create(_0x541695);
}
async function _0x9155f3(_0x3cd5fb = null) {
  var _0x2cdc84 = {
    jid: _0x3cd5fb
  };
  var _0x4d5b43 = {
    where: _0x2cdc84
  };
  return await _0x43cf9f.destroy(_0x4d5b43);
}
async function _0x3474fd() {
  var _0x2d243f = {
    where: {},
    truncate: true
  };
  return await _0x43cf9f.destroy(_0x2d243f);
}
function _0x235cf7(_0x4cd8ec, _0x56402b, _0x2a0ac6) {
  var _0x39d041 = !_0x56402b ? "20" : _0x56402b;
  _0x401a62().input(_0x4cd8ec).outputOptions("-af bass=g=" + _0x39d041).save("bass.mp3").on("end", async () => {
    _0x2a0ac6(_0xdd1b70.readFileSync("bass.mp3"));
  });
}
function _0x8d8b77(_0x3aacf7) {
  var _0x52fc65 = Math.floor(_0x3aacf7 / 3600);
  var _0x31f06a = Math.floor(_0x3aacf7 % 3600 / 0x3c);
  var _0x3aacf7 = Math.floor(_0x3aacf7 % 0x3c);
  return (_0x52fc65 < 0xa ? "0" : '') + _0x52fc65 + " hours " + ((_0x31f06a < 0xa ? "0" : '') + _0x31f06a) + " minutes " + ((_0x3aacf7 < 0xa ? "0" : '') + _0x3aacf7) + " seconds";
}
async function _0x578e0c(_0x273f53, _0x49abf6) {
  var _0x48f730 = _0x8d8b77(process.uptime()).replace("00 hours", '');
  var _0x37aa3f = _0x49abf6.match(/\bhttps?:\/\/\S+/gi);
  if (_0x49abf6.includes("{quote}")) {
    try {
      var {
        text: _0x1fe9ce
      } = await _0x9e8730("https://quotes-api.vercel.app/random");
    } catch (_0x40d980) {
      try {
        var {
          text: _0x1fe9ce
        } = await _0x9e8730("https://quotes-api.vercel.app/random");
      } catch (_0x4e0d13) {
        var {
          text: _0x1fe9ce
        } = await _0x9e8730("https://quotes-api.vercel.app/random");
      }
    }
  }
  if (_0x49abf6.includes("button")) {
    var _0x304f48 = _0x49abf6.replace(/\\/g, '');
    var _0xca73c4 = _0x49abf6.replace(/\\/g, '');
    _0xca73c4 = _0xca73c4.replace(/#/g, '');
    if (_0x37aa3f !== null) {
      _0x37aa3f = _0x37aa3f.filter(_0x539e3e => _0x539e3e.includes("jpg") || _0x539e3e.includes("png") || _0x539e3e.includes("jpeg") || _0x539e3e.includes("mp4"));
    }
    if (_0x37aa3f !== null && _0x37aa3f.length !== 0x0) {
      _0x304f48 = _0x304f48.replace(_0x37aa3f[0x0], '');
    }
    _0x304f48 = _0x304f48.split("#");
    var _0x25dcb5 = _0x304f48.filter(_0x291e5b => _0x291e5b.startsWith("cbutton"));
    var _0x36f837 = _0x304f48.filter(_0x5332ec => _0x5332ec.startsWith("footer"));
    _0x36f837 = _0x36f837.length !== 0x0 ? _0x36f837[0x0].replace("footer", '') : '';
    if (_0x36f837 !== '') {
      _0xca73c4 = _0xca73c4.replace(/url/g, '').replace("footer" + _0x36f837, '');
    }
    var _0x3145ac = _0x304f48.filter(_0x2ed320 => _0x2ed320.startsWith("num"));
    var _0x4538de = _0x304f48.filter(_0x2acd92 => _0x2acd92.startsWith("button"));
    var _0x4776fd = _0x304f48.filter(_0x2c65a1 => _0x2c65a1.startsWith("url"));
    var _0x523f8e = _0x304f48.filter(_0xa5d286 => _0xa5d286.startsWith("ubutton"));
    var _0x2925d4 = [];
    if (_0x4776fd.length !== 0x0) {
      for (var _0xbc5fad = 0x0; _0xbc5fad < _0x4776fd.length; _0xbc5fad++) {
        _0xca73c4 = _0xca73c4.replace(_0x523f8e[_0xbc5fad], '').replace(_0x4776fd[_0xbc5fad].replace(/url/g, ''), '');
        if (process.env.LOGGER !== undefined) {
          console.log(_0xca73c4);
        }
        _0x2925d4.push({
          "urlButton": {
            "displayText": _0x523f8e[_0xbc5fad].replace("ubutton", '').replace(/\\/g, ''),
            "url": _0x4776fd[_0xbc5fad].replace(/url/g, '').replace(/\\/g, '')
          }
        });
      }
    }
    if (_0x4538de.length !== 0x0) {
      for (var _0xbc5fad = 0x0; _0xbc5fad < _0x4538de.length; _0xbc5fad++) {
        _0xca73c4 = _0xca73c4.replace(_0x4538de[_0xbc5fad], '');
        if (process.env.LOGGER !== undefined) {
          console.log(_0xca73c4);
        }
        _0x2925d4.push({
          "quickReplyButton": {
            "displayText": _0x4538de[_0xbc5fad].replace("button", '').replace(/\\/g, ''),
            "id": "alive" + (_0xbc5fad + 0x1)
          }
        });
      }
    }
    if (_0x25dcb5.length !== 0x0) {
      for (var _0xbc5fad = 0x0; _0xbc5fad < _0x25dcb5.length; _0xbc5fad++) {
        _0xca73c4 = _0xca73c4.replace(_0x25dcb5[_0xbc5fad], '').replace(_0x3145ac[_0xbc5fad], '');
        _0x2925d4.push({
          "callButton": {
            "displayText": _0x25dcb5[_0xbc5fad].replace("cbutton", '').replace(/\\/g, ''),
            "phoneNumber": _0x3145ac[_0xbc5fad].replace("num", '').replace(/\\/g, '')
          }
        });
      }
    }
    ;
    var _0x4c4299 = '';
    _0xca73c4 = _0xca73c4.replace(/{quote}/g, _0x1fe9ce).replace(/{uptime}/g, _0x48f730).replace(/{sender}/g, _0x273f53.data.pushName).replace("{pp}", '').replace("{gif}", '');
    if (_0x37aa3f !== null && _0x37aa3f.length !== 0x0) {
      _0x4c4299 = _0x37aa3f[0x0];
      _0xca73c4 = _0xca73c4.replace(_0x37aa3f[0x0], '');
    }
    if (process.env.LOGGER !== undefined) {
      console.log(_0xca73c4);
    }
    if (_0x37aa3f !== null && _0x37aa3f.length !== 0x0 && _0x37aa3f[0x0].includes("mp4")) {
      var _0x7e1ba3 = _0x49abf6.includes("{gif}");
      return await _0x273f53.sendVideoTemplate(await _0x15ea3a(_0x4c4299), _0xca73c4, _0x36f837, _0x2925d4, _0x7e1ba3);
    } else {
      if (_0x49abf6.includes("{pp}")) {
        try {
          _0x4c4299 = await _0x273f53.client.profilePictureUrl(_0x273f53.sender, "image");
        } catch {
          _0x4c4299 = await _0x273f53.client.profilePictureUrl(_0x273f53.jid, "image");
        }
      } else {
        if (_0x49abf6.includes("{gicon}")) {
          _0x4c4299 = await _0x273f53.client.profilePictureUrl(_0x273f53.jid, "image");
        }
      }
    }
    return await _0x273f53.sendImageTemplate(await _0x15ea3a(_0x4c4299), _0xca73c4, _0x36f837, _0x2925d4);
  }
  if (_0x37aa3f !== null && (_0x37aa3f[0x0].includes("jpg") || _0x37aa3f[0x0].includes("jpeg") || _0x37aa3f[0x0].includes("png"))) {
    var _0x15a9e5 = await _0x15ea3a(_0x37aa3f[0x0]);
    return await _0x273f53.client.sendMessage(_0x273f53.jid, {
      "image": _0x15a9e5,
      "caption": _0x49abf6.replace(/{quote}/g, _0x1fe9ce).replace(/{uptime}/g, _0x48f730).replace(/{sender}/g, _0x273f53.data.pushName).replace(_0x37aa3f[0x0], '').replace(/}/g, '')
    }, {
      "quoted": _0x273f53.data
    });
  }
  if (_0x37aa3f !== null && (_0x37aa3f[0x0].endsWith("mp4") || _0x37aa3f[0x0].endsWith("gif"))) {
    var _0x15a9e5 = await _0x15ea3a(_0x37aa3f[0x0]);
    return await _0x273f53.client.sendMessage(_0x273f53.jid, {
      "video": _0x15a9e5,
      "caption": _0x49abf6.replace(/{quote}/g, _0x1fe9ce).replace(/{uptime}/g, _0x48f730).replace(/{sender}/g, _0x273f53.data.pushName).replace("{video/", '').replace(_0x37aa3f[0x0], '').replace(/}/g, '')
    }, {
      "quoted": _0x273f53.data
    });
  } else {
    return await _0x273f53.sendReply(_0x49abf6.replace(/{uptime}/g, _0x48f730).replace(/{quote}/g, _0x1fe9ce).replace(/{sender}/g, _0x273f53.data.pushName));
  }
}
function _0xa38c89(_0x45b8b7) {
  return !isNaN(parseFloat(_0x45b8b7)) && isFinite(_0x45b8b7);
}
async function _0x386ba1(_0x348a56, _0x3fc667 = _0x348a56.client.user.id) {
  var _0x1d1970 = await _0x348a56.client.groupMetadata(_0x348a56.jid);
  var _0x43cd3d = _0x1d1970.participants.filter(_0x312d17 => _0x312d17.admin !== null).map(_0x57f3d6 => _0x57f3d6.id);
  var _0x3124a0 = _0x3fc667.split("@")[0x0].split(":")[0x0];
  return _0x43cd3d.filter(_0x250022 => _0x250022.includes(_0x3124a0)).length > 0x0;
}
function _0x1bd5d9(_0xd11342) {
  return "@" + _0xd11342.split("@")[0x0].split(":")[0x0] + " ";
}
async function _0x9e8730(_0x5540c8) {
  var {
    data: _0x473220
  } = await _0xef1d5a(_0x5540c8);
  return _0x473220;
}
async function _0xbffc9b(_0x1595a5) {
  if (!_0x1595a5.reply_message) {
    return await _0x1595a5.sendReply("Reply to a sticker or photo");
  }
  var _0x389abb = await _0x1595a5.reply_message.download();
  if (_0x389abb.endsWith("webp")) {
    _0x401a62(_0x389abb).fromFormat("webp_pipe").save("output.png").on("end", async () => {
      var _0x44849d = await _0x12fc03.read("output.png");
      _0x44849d.resize(0x1e0, 0x1e0);
      _0x44849d.circle();
      _0x44849d.getBuffer("image/png", async (_0x69f7ee, _0x5cec42) => {
        await _0xdd1b70.writeFileSync("tosticker.jpg", _0x5cec42);
        _0x401a62("tosticker.jpg").outputOptions(["-y", "-vcodec libwebp"]).videoFilters("scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1").save("st.webp").on("end", async () => {
          return await _0x1595a5.sendReply(_0xdd1b70.readFileSync("st.webp"), "sticker");
        });
      });
    });
  } else {
    var _0x348430 = await _0x12fc03.read(_0x389abb);
    _0x348430.resize(0x1e0, 0x1e0);
    _0x348430.circle();
    _0x348430.getBuffer("image/png", async (_0x5d4eaf, _0x261106) => {
      return await _0x1595a5.sendReply(_0x261106, "image");
    });
  }
}
async function _0x31b31a(_0x5b784b, _0x4d3c6f = 0x5) {
  const _0x24a54e = await _0x12fc03.read(_0x5b784b);
  _0x24a54e.blur(parseInt(_0x4d3c6f));
  let _0x4c2fba;
  _0x24a54e.getBuffer("image/png", (_0x3d461b, _0xe5d3a0) => {
    _0x4c2fba = _0xe5d3a0;
  });
  return _0x4c2fba;
}
async function _0x327bff(_0x23f7bf, _0x23f659) {
  var _0x1dbb51 = (await _0x2ba2b8(_0x23f659)).link;
  return await _0x15ea3a("https://raganork-api.onrender.com/api/image_editor?apikey=made_by_souravkl11&style=aadhar&text=" + encodeURIComponent(_0x23f7bf) + "&url=" + _0x1dbb51);
}
async function _0x2ad615(_0x2b93a3, _0x41da66) {
  if (_0x2b93a3.data.key.fromMe === true) {
    return;
  }
  var _0x3a249c = _0x2b93a3.jid.includes("@g.us");
  var _0x263afd = _0x2b93a3.reply_message ? _0x2b93a3.reply_message.jid.split("@")[0x0] === _0x2b93a3.client.user.id.split(":")[0x0] : false;
  var _0x3a96f6 = _0x2b93a3.mention !== false && _0x2b93a3.mention.includes(_0x2b93a3.client.user.id.split(":")[0x0] + "@s.whatsapp.net");
  var _0xc2229a = _0x2b93a3.message.toLowerCase().startsWith("bot");
  if (_0x3a249c && (_0x263afd || _0x3a96f6 || _0xc2229a)) {
    if (_0x58c66d.MANGLISH_CHATBOT) {
      let _0x51a807 = await _0x33d415(_0x2b93a3.message);
      var _0x1be68d = {
        from: "ml",
        to: "en"
      };
      let _0x57d797 = await _0x99e7c8(_0x51a807, _0x1be68d);
      var {
        cnt: _0x1b9f4e
      } = await _0x9e8730("http://api.brainshop.ai/get?bid=166385&key=6nmd8xbJELXFUQXO&uid=" + _0x2b93a3.client.user.id + "&msg=" + encodeURIComponent(_0x57d797.text));
      _0x1b9f4e = _0x1b9f4e.replace("aco", _0x41da66).replace("Aco", _0x41da66).replace(_0x41da66 + "bot Team", "souravkl11");
      var _0x4ff3da = {
        from: "en",
        to: "ml"
      };
      _0x57d797 = await _0x99e7c8(_0x1b9f4e, _0x4ff3da);
      return await _0x2b93a3.sendReply(_0x49426e(_0x57d797.text));
    }
    var {
      cnt: _0x1b9f4e
    } = await _0x9e8730("http://api.brainshop.ai/get?bid=166385&key=6nmd8xbJELXFUQXO&uid=" + _0x2b93a3.client.user.id + "&msg=" + encodeURIComponent(_0x2b93a3.message));
    _0x1b9f4e = _0x1b9f4e.replace("aco", _0x41da66).replace("Aco", _0x41da66).replace(_0x41da66 + "bot Team", "souravkl11");
    return await _0x2b93a3.sendReply(_0x1b9f4e);
  }
  if (!_0x3a249c) {
    if (_0x58c66d.MANGLISH_CHATBOT) {
      let _0x99ce18 = await _0x33d415(_0x2b93a3.message);
      var _0x23e2af = {
        from: "ml",
        to: "en"
      };
      let _0x44f796 = await _0x99e7c8(_0x99ce18, _0x23e2af);
      var {
        cnt: _0x1b9f4e
      } = await _0x9e8730("http://api.brainshop.ai/get?bid=166385&key=6nmd8xbJELXFUQXO&uid=" + _0x2b93a3.client.user.id + "&msg=" + encodeURIComponent(_0x44f796.text));
      _0x1b9f4e = _0x1b9f4e.replace("aco", _0x41da66).replace("Aco", _0x41da66).replace(_0x41da66 + "bot Team", "souravkl11");
      var _0x599a9f = {
        from: "en",
        to: "ml"
      };
      _0x44f796 = await _0x99e7c8(_0x1b9f4e, _0x599a9f);
      return await _0x2b93a3.sendReply(_0x49426e(_0x44f796.text));
    }
    var {
      cnt: _0x1b9f4e
    } = await _0x9e8730("http://api.brainshop.ai/get?bid=166385&key=6nmd8xbJELXFUQXO&uid=" + _0x2b93a3.client.user.id + "&msg=" + encodeURIComponent(_0x2b93a3.message));
    _0x1b9f4e = _0x1b9f4e.replace("aco", _0x41da66).replace("Aco", _0x41da66).replace(_0x41da66 + "bot Team", "souravkl11");
    if (_0x58c66d.MANGLISH_CHATBOT) {
      var _0x28abbe = {
        from: "en",
        to: "ml"
      };
      _0x99e7c8(_0x1b9f4e, _0x28abbe).then(async _0x140c27 => {
        _0x1b9f4e = _0x49426e(_0x1b9f4e);
      });
    }
    return await _0x2b93a3.sendReply(_0x1b9f4e);
  }
}
;
function _0x5cbc3a(_0x9e3519) {
  var _0x52cbb7 = ["Bytes", "KB", "MB", "GB", "TB"];
  if (_0x9e3519 == 0x0) {
    return "0 Byte";
  }
  var _0x517fbc = parseInt(Math.floor(Math.log(_0x9e3519) / Math.log(0x400)));
  return Math.round(_0x9e3519 / Math.pow(0x400, _0x517fbc), 0x2) + " " + _0x52cbb7[_0x517fbc];
}
async function _0x2db67f(_0x578473, _0x1c592b) {
  var _0x43212c = !_0x1c592b[0x1].includes("youtu") ? _0x578473.reply_message.message : _0x1c592b[0x1];
  if (!_0x43212c) {
    return await _0x578473.sendReply("Need link");
  }
  if (!_0x43212c.includes("youtu")) {
    return await _0x578473.sendReply("Need yt link");
  }
  const _0x5448cd = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  var _0x7fb880 = _0x5448cd.exec(_0x43212c);
  var _0x29a91e = _0x578473.client.user.id.split("@")[0x0].split(":")[0x0];
  var _0x1894d9 = _0x7fb880[0x1];
  var _0x3ecd86 = (await _0x38d88d(_0x1894d9)).available;
  var _0x2eb7ea = (await _0x38d88d(_0x1894d9)).title;
  var _0x168440 = [];
  for (var _0x1bfb49 in _0x3ecd86) {
    var _0x4bb7cc = {
      format: "mp4",
      quality: _0x1bfb49,
      type: "video"
    };
    var _0x36a2f0 = {
      title: _0x1bfb49,
      description: "Size: " + _0x3ecd86[_0x1bfb49],
      rowId: _0x1bfb49 + ";" + _0x1894d9 + ";" + _0x29a91e + ";ytvmd"
    };
    _0x168440.push(_0x36a2f0);
  }
  var _0x31045d = {
    title: "Select a quality resolution",
    rows: _0x168440
  };
  const _0x471bf1 = [_0x31045d];
  var _0x21152c = {
    text: " ",
    footer: "Available quality resolutions",
    title: _0x2eb7ea,
    buttonText: "Select quality",
    sections: _0x471bf1
  };
  return await _0x578473.client.sendMessage(_0x578473.jid, _0x21152c);
}
async function _0xbe966e(_0x322c7c) {
  if (_0x322c7c.list && _0x322c7c.list.includes(_0x322c7c.client.user.id.split("@")[0x0].split(":")[0x0]) && _0x322c7c.list.includes("ytvmd")) {
    var _0x130bda = _0x322c7c.list.split(";");
    var _0x546887 = _0x130bda[0x0];
    var _0x74b15c = _0x130bda[0x1];
    var {
      url: _0x54adbb,
      size: _0x3a3fc2,
      thumbnail: _0x54f9c5,
      title: _0x3a15f8
    } = await _0x38d88d(_0x74b15c, "video", _0x546887);
    if (!_0x3a3fc2?.["endsWith"]("KB") && parseFloat(_0x3a3fc2) > 0x64) {
      var _0x586936 = {
        url: _0x54adbb
      };
      var _0x273b17 = {
        document: _0x586936,
        fileName: _0x3a15f8,
        mimetype: "video/mp4"
      };
      return await _0x322c7c.client.sendMessage(_0x322c7c.jid, _0x273b17, {
        "quoted": _0x322c7c.data
      });
    }
    var _0x40f7b8 = {
      url: _0x54adbb
    };
    return await _0x322c7c.client.sendMessage(_0x322c7c.jid, {
      "video": _0x40f7b8,
      "mimetype": "video/mp4",
      "caption": "*_[" + _0x546887 + "] " + _0x3a15f8 + "_*",
      "thumbnail": await _0x15ea3a(_0x54f9c5)
    }, {
      "quoted": _0x322c7c.data
    });
  }
}
async function _0x213103(_0x5a3a71) {
  var {
    thumbnail: _0x400c7e
  } = await _0x38d88d(_0x5a3a71);
  var _0x5f5418 = await _0x15ea3a(_0x400c7e);
  return _0x5f5418;
}
async function _0x1b78a3(_0x3671de, _0x21368e) {
  return new Promise((_0x138a6f, _0x48e002) => {
    _0x401a62(_0x3671de).withVideoFilter("transpose=" + _0x21368e).save("./temp/rotate.mp4").on("end", () => {
      if (_0x21368e === "3") {
        _0x401a62("./temp/rotate.mp4").withVideoFilter("transpose=2").save("./temp/flip.mp4").on("end", () => {
          _0x138a6f("./temp/flip.mp4");
        });
      }
      if (_0x21368e !== "3") {
        _0x138a6f("./temp/rotate.mp4");
      }
    });
  });
}
;
async function _0x38be7e(_0x41f6b9, _0x1de3a8) {
  var _0x30c202 = await _0x1de3a8.getMessage(_0x41f6b9.jid);
  if (_0x30c202 !== false && _0x41f6b9.update === "add") {
    var _0x26624e = _0x30c202.message.match(/\bhttps?:\/\/\S+/gi);
    var {
      subject: _0x500e59,
      owner: _0x1de0b9,
      participants: _0x212259,
      desc: _0x15c935
    } = await _0x41f6b9.client.groupMetadata(_0x41f6b9.jid);
    if (_0x26624e !== null) {
      var _0x3c110f = _0x30c202.message.replace(/{mention}/g, "@" + _0x41f6b9.participant[0x0].split("@")[0x0]).replace(/{line}/g, "\n").replace(/{pp}/g, '').replace(/{gicon}/g, '').replace(/{count}/g, _0x212259.length).replace(/{group-name}/g, _0x500e59).replace(/{group-desc}/g, _0x15c935).replace(_0x26624e[0x0], '').replace(/\\/g, '').replace(/#/g, '');
    } else {
      var _0x3c110f = _0x30c202.message.replace(/{mention}/g, "@" + _0x41f6b9.participant[0x0].split("@")[0x0]).replace(/{line}/g, "\n").replace(/{pp}/g, '').replace(/{gicon}/g, '').replace(/{count}/g, _0x212259.length).replace(/{group-name}/g, _0x500e59).replace(/{group-desc}/g, _0x15c935).replace(/\\/g, '').replace(/#/g, '');
    }
    if (_0x30c202.message.includes("button")) {
      _0x3c110f = _0x3c110f.replace(/#/g, '');
      var _0x29ea1f = _0x30c202.message;
      _0x29ea1f = _0x29ea1f.replace("{pp}", '').replace("{count}", '').replace("{group-name}", '').replace("{group-desc}", '').replace("{gicon}", '').replace(/\\/g, '');
      if (_0x26624e !== null) {
        _0x26624e = _0x26624e.filter(_0xedacc3 => _0xedacc3.endsWith("jpg") || _0xedacc3.endsWith("png") || _0xedacc3.endsWith("jpeg") || _0xedacc3.endsWith("mp4"));
      }
      if (_0x26624e.length !== 0x0) {
        _0x29ea1f = _0x29ea1f.replace(_0x26624e[0x0], '');
      }
      _0x29ea1f = _0x29ea1f.split("#");
      var _0x4e6051 = _0x29ea1f.filter(_0x1b5e55 => _0x1b5e55.startsWith("cbutton"));
      var _0x519af3 = _0x29ea1f.filter(_0x41f014 => _0x41f014.startsWith("footer"));
      _0x519af3 = _0x519af3.length !== 0x0 ? _0x519af3[0x0].replace("footer", '') : '';
      if (_0x519af3 !== '') {
        _0x3c110f = _0x3c110f.replace(/url/g, '').replace("footer" + _0x519af3, '');
      }
      var _0x1df140 = _0x29ea1f.filter(_0x5bafdb => _0x5bafdb.startsWith("num"));
      var _0x520f06 = _0x29ea1f.filter(_0x466530 => _0x466530.startsWith("button"));
      var _0x2deb98 = _0x29ea1f.filter(_0x3a27ef => _0x3a27ef.startsWith("url"));
      var _0x2c4e79 = _0x29ea1f.filter(_0xb102f8 => _0xb102f8.startsWith("ubutton"));
      var _0x512ea0 = [];
      if (_0x2deb98.length !== 0x0) {
        for (var _0xbcb907 = 0x0; _0xbcb907 < _0x2deb98.length; _0xbcb907++) {
          _0x3c110f = _0x3c110f.replace(_0x2c4e79[_0xbcb907], '').replace(_0x2deb98[_0xbcb907], '');
          _0x512ea0.push({
            "urlButton": {
              "displayText": _0x2c4e79[_0xbcb907].replace("ubutton", ''),
              "url": _0x2deb98[_0xbcb907].replace(/url/g, '')
            }
          });
        }
      }
      if (_0x520f06.length !== 0x0) {
        for (var _0xbcb907 = 0x0; _0xbcb907 < _0x520f06.length; _0xbcb907++) {
          _0x3c110f = _0x3c110f.replace(_0x520f06[_0xbcb907], '');
          _0x512ea0.push({
            "quickReplyButton": {
              "displayText": _0x520f06[_0xbcb907].replace("button", ''),
              "id": "welcome" + (_0xbcb907 + 0x1)
            }
          });
        }
      }
      if (_0x4e6051.length !== 0x0) {
        for (var _0xbcb907 = 0x0; _0xbcb907 < _0x4e6051.length; _0xbcb907++) {
          _0x3c110f = _0x3c110f.replace(_0x4e6051[_0xbcb907], '').replace(_0x1df140[_0xbcb907], '');
          _0x512ea0.push({
            "callButton": {
              "displayText": _0x4e6051[_0xbcb907].replace("cbutton", ''),
              "phoneNumber": _0x1df140[_0xbcb907].replace("num", '')
            }
          });
        }
      }
      var _0x20a199 = '';
      if (_0x26624e.length !== 0x0) {
        _0x20a199 = _0x26624e[0x0];
      }
      if (_0x26624e.length !== 0x0 && _0x26624e[0x0].endsWith("mp4")) {
        return await _0x41f6b9.sendVideoTemplate(await _0x15ea3a(_0x20a199), _0x3c110f, _0x519af3, _0x512ea0, _0x30c202.message.includes("{gif}"));
      } else {
        if (_0x30c202.message.includes("{pp}")) {
          try {
            _0x20a199 = await _0x41f6b9.client.profilePictureUrl(_0x41f6b9.participant[0x0], "image");
          } catch {
            _0x20a199 = await _0x41f6b9.client.profilePictureUrl(_0x41f6b9.jid, "image");
          }
        } else {
          if (_0x30c202.message.includes("{gicon}")) {
            _0x20a199 = await _0x41f6b9.client.profilePictureUrl(_0x41f6b9.jid, "image");
          }
        }
      }
      return await _0x41f6b9.sendImageTemplate(await _0x15ea3a(_0x20a199), _0x3c110f, _0x519af3, _0x512ea0);
    } else {
      if (_0x26624e !== null && !_0x30c202.message.includes("button") && (_0x26624e[0x0].endsWith("jpeg") || _0x26624e[0x0].endsWith("jpg") || _0x26624e[0x0].endsWith("png"))) {
        var _0x27b50d = {
          url: _0x26624e[0x0]
        };
        return await _0x41f6b9.client.sendMessage(_0x41f6b9.jid, {
          "image": _0x27b50d,
          "caption": _0x3c110f,
          "mentions": _0x41f6b9.participant
        });
      } else {
        if (_0x26624e !== null && !_0x30c202.message.includes("button")(_0x26624e[0x0].endsWith("mp4") || _0x26624e[0x0].endsWith("gif"))) {
          var _0x1fd09c = {
            url: _0x26624e[0x0]
          };
          return await _0x41f6b9.client.sendMessage(_0x41f6b9.jid, {
            "video": _0x1fd09c,
            "caption": _0x3c110f,
            "mentions": _0x41f6b9.participant
          });
        } else {
          if (_0x30c202.message.includes("{pp}")) {
            try {
              var _0x2cb5f0 = await _0x41f6b9.client.profilePictureUrl(_0x41f6b9.participant[0x0], "image");
            } catch {
              var _0x2cb5f0 = await _0x41f6b9.client.profilePictureUrl(_0x41f6b9.jid, "image");
            }
            var _0x31e180 = {
              url: _0x2cb5f0
            };
            return await _0x41f6b9.client.sendMessage(_0x41f6b9.jid, {
              "image": _0x31e180,
              "caption": _0x3c110f,
              "mentions": _0x41f6b9.participant
            });
          } else {
            if (_0x30c202.message.includes("{gicon}")) {
              var _0x2cb5f0 = await _0x41f6b9.client.profilePictureUrl(_0x41f6b9.jid, "image");
              var _0x461304 = {
                url: _0x2cb5f0
              };
              return await _0x41f6b9.client.sendMessage(_0x41f6b9.jid, {
                "image": _0x461304,
                "caption": _0x3c110f,
                "mentions": _0x41f6b9.participant
              });
            } else {
              return await _0x41f6b9.client.sendMessage(_0x41f6b9.jid, {
                "text": _0x3c110f,
                "mentions": _0x41f6b9.participant
              });
            }
          }
        }
      }
    }
  }
}
async function _0x2ba255(_0xa27b72, _0x334731) {
  try {
    const _0x179685 = String.fromCharCode(0x200e).repeat(0xfa1);
    const _0x5a0bfb = _0x320a64 => {
      let _0x5bd128 = _0x320a64;
      _0x5bd128 = _0x5bd128.replace(/\+/g, '');
      var _0x35757c = _0x5bd128.length;
      var _0x1a0426 = '';
      let _0x3c6978 = [];
      var _0x4a4871 = _0x5bd128.split('').filter(_0x692940 => _0x692940 === "x").length;
      if (_0x4a4871 === 0x1) {
        _0x1a0426 = 0xa;
      }
      if (_0x4a4871 === 0x2) {
        _0x1a0426 = 0x64;
      }
      if (_0x4a4871 === 0x3) {
        _0x1a0426 = 0x3e8;
      }
      if (_0x4a4871 > 0x3) {
        throw new Error();
      }
      var _0x5da6f3 = '';
      for (var _0x4c54d6 = 0x0; _0x4c54d6 < _0x1a0426; _0x4c54d6++) {
        if ((_0x5bd128.replace(/x/g, '') + _0x4c54d6).length === _0x35757c - 0x2) {
          _0x5da6f3 = _0x5bd128.replace("x", "00" + _0x4c54d6);
        }
        if ((_0x5bd128.replace(/x/g, '') + _0x4c54d6).length === _0x35757c - 0x1) {
          _0x5da6f3 = _0x5bd128.replace("x", "0" + _0x4c54d6);
        }
        if ((_0x5bd128.replace(/x/g, '') + _0x4c54d6).length === _0x35757c) {
          _0x5da6f3 = _0x5bd128.replace("x", _0x4c54d6);
        }
        _0x5da6f3 = _0x5da6f3.replace(/x/g, '');
        _0x3c6978.push(_0x5da6f3);
      }
      return _0x3c6978;
    };
    const _0x4258a0 = async (_0x4b86e2, _0x150c66) => {
      const _0x4e9fd5 = _0x5a0bfb(_0x150c66);
      var _0x428c0f = {
        datewise: {},
        notonwa: []
      };
      if (!_0x4e9fd5.length) {
        return "_No possible numbers!_";
      }
      let _0x52427c = (await _0x4b86e2.client.onWhatsApp(..._0x4e9fd5)).map(_0x25442c => _0x25442c.jid);
      let _0x56c75a = _0x4e9fd5.filter(_0x1f83c1 => !_0x52427c.includes(_0x1f83c1 + "@s.whatsapp.net")).map(_0x4f9e98 => "+" + _0x4f9e98);
      for (const _0x35c4f5 of _0x52427c) {
        try {
          var {
            status: _0x217b2c,
            setAt: _0x3b5617
          } = await _0x4b86e2.client.fetchStatus(_0x35c4f5);
        } catch {
          var _0x217b2c = '';
          var _0x3b5617 = '';
        }
        if (_0x217b2c) {
          try {
            var _0x223d32 = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            };
            const _0x480bd0 = _0x223d32;
            var _0x55e707 = _0x3b5617.toLocaleDateString("en-US", _0x480bd0);
          } catch {
            var _0x55e707 = "null";
          }
          if (!_0x428c0f.datewise[_0x55e707.split(",")[0x2]?.["trim"]() || "No date"]) {
            _0x428c0f.datewise[_0x55e707.split(",")[0x2]?.["trim"]() || "No about"] = [];
          } else {
            '';
          }
          _0x428c0f.datewise[_0x55e707.split(",")[0x2]?.["trim"]() || "No about"].push({
            "status": _0x217b2c,
            "date": _0x55e707,
            "number": "+" + _0x35c4f5.split("@")[0x0]
          });
        }
      }
      _0x428c0f.notonwa = _0x56c75a;
      _0x428c0f.onwa = _0x52427c.map(_0x3db372 => "+" + _0x3db372.split("@")[0x0]);
      return _0x428c0f;
    };
    const _0x3373de = await _0x4258a0(_0xa27b72, _0x334731);
    let _0x86dd16 = "_*❌=== Not registered on WA ===❌:*_\n" + _0x179685 + "\n" + _0x3373de.notonwa.join("\n");
    let _0x27ef96 = '';
    for (var _0x5d6481 in _0x3373de.datewise) {
      _0x27ef96 += "*⭕=== " + _0x5d6481 + " ===⭕*\n    " + _0x3373de.datewise[_0x5d6481].map(_0x20ce19 => "_Number: " + _0x20ce19.number + "_\n_Bio: " + _0x20ce19.status + "_\n_Date: " + _0x20ce19.date + "_").join("\n\n") + "\n\n";
    }
    let _0x2d2e14 = "*_=== Date wise result ===_*\n" + _0x179685 + "\n" + _0x27ef96;
    let _0x52f146 = "_*=== Total registered numbers ===*_\n" + _0x179685 + "\n" + _0x3373de.onwa.join("\n");
    await _0xa27b72.sendReply(_0x2d2e14);
    await _0xa27b72.sendReply(_0x86dd16);
    await _0xa27b72.sendReply(_0x52f146);
  } catch (_0x432128) {
    await _0xa27b72.sendReply(_0x432128.message);
  }
}
async function _0x4c9009(_0x3c73cf, _0x33e6a5 = "image") {
  var _0x363fc5 = ["-y", "-vcodec libwebp"];
  var _0x181234 = "scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1";
  if (_0x33e6a5 === "video") {
    _0x363fc5 = ["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"];
    _0x181234 = "scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1";
  }
  return new Promise((_0x5d8991, _0x4b968e) => {
    _0x401a62(_0x3c73cf).outputOptions(_0x363fc5).videoFilters(_0x181234).save("./temp/st.webp").on("end", () => {
      _0x5d8991("./temp/st.webp");
    });
  });
}
async function _0x418ed1(_0x33e267) {
  return new Promise((_0x3ff5ce, _0x1398b4) => {
    _0x483a37.identify(_0x33e267).then(_0x573968 => {
      var _0x3baf5a = _0x573968.metadata.music[0x0];
      _0x3ff5ce(_0x3baf5a);
    });
  });
}
async function _0xfb07d7(_0x18161e) {
  const _0x20d633 = await _0x3d8aa3.create({
    "cache": new _0x23f1f7()
  });
  const _0x2a030c = await _0x20d633.search(_0x18161e);
  return _0x2a030c;
}
;
async function _0x1c7445(_0x904d31) {
  try {
    var _0x4cf952 = (await _0x9e8730("https://raganork-network.vercel.app/api/insta/?url=" + _0x904d31 + "&apikey=ciliary")).result;
  } catch {
    var _0x4cf952 = (await _0x9e8730("https://raganork-api-n4bp.onrender.com/api/insta/?url=" + _0x904d31 + "&apikey=ciliary")).result;
  }
  return _0x4cf952;
}
async function _0x13bee7(_0x12055b) {
  return await _0x9e8730("https://raganork-api-n4bp.onrender.com/api/pinterest/?url=" + _0x12055b + "&apikey=ciliary");
}
async function _0x2db3d5(_0x2e7dff) {
  return await _0x9e8730("https://raganork-api-n4bp.onrender.com/api/facebook/?url=" + _0x2e7dff);
}
async function _0x127c2e(_0x449ea7) {
  return await _0x9e8730("https://raganork-network.vercel.app/api/ig/stalk?username=" + _0x449ea7 + "&passcode=bruh");
}
async function _0x2ba9a6(_0x5d283d) {
  return await _0x9e8730("https://raganork-api-n4bp.onrender.com/api/tiktok/?url=" + _0x5d283d);
}
async function _0x4fa389(_0x5c624a) {
  try {
    var _0x404538 = await _0x9e8730("https://chatgpt-api-raganork.cyclic.app/get?text=" + encodeURIComponent(_0x5c624a));
  } catch {
    var _0x404538 = "Sorry, I couldn't get that!";
  }
  return _0x404538;
}
async function _0x40f977(_0x4e9a44) {
  return (await _0x9e8730("https://raganork-network.vercel.app/api/igstory/?username=" + _0x4e9a44)).result;
}
async function _0x5efc07(_0x5b7498, _0x50fd96) {
  return new Promise((_0x2d5d4a, _0x564fed) => {
    const _0x472b8a = _0x401a62();
    const _0x1ff42d = [];
    _0x472b8a.addInput(_0x5b7498);
    _0x472b8a.addInput(_0x50fd96);
    _0x1ff42d.push("[1]volume=0.1[a1]");
    _0x472b8a.addInput(_0x50fd96);
    _0x1ff42d.push("[2]volume=0.9[a2]");
    _0x1ff42d.push("[a1][a2]amix=inputs=2[a]");
    _0x472b8a.complexFilter(_0x1ff42d);
    _0x472b8a.addOptions(["-map 0:v", "-map [a]", "-c:v copy"]).format("mp4").on("error", _0x5b4a74 => {
      _0x564fed(_0x5b4a74);
    }).on("end", function () {
      _0x2d5d4a(_0xdd1b70.readFileSync("./merged.mp4"));
    }).save("./merged.mp4");
  });
}
async function _0x18b862(_0x2c68b1, _0x248cab) {
  async function _0x58b02e(_0x35b2ae) {
    var _0x234575 = {
      responseType: "arraybuffer"
    };
    var _0x9cf1ca = await _0xef1d5a.get(_0x35b2ae, _0x234575);
    var _0x2f263f = Buffer.from(_0x9cf1ca.data);
    return _0x2f263f;
  }
  var _0x31b963 = _0x57fed2.getAllAudioUrls(_0x2c68b1, {
    "lang": _0x248cab.toLowerCase(),
    "slow": false,
    "host": "https://translate.google.com",
    "splitPunct": "\n"
  });
  _0x31b963 = _0x31b963.map(_0x44821a => _0x44821a.url);
  if (_0x31b963.length == 0x1) {
    return await _0x58b02e(_0x31b963[0x0]);
  }
  let _0x34cbce = [];
  for (var _0x4ff9e2 in _0x31b963) {
    await _0xdd1b70.writeFileSync("./temp/tts/" + _0x4ff9e2 + ".mp3", await _0x58b02e(_0x31b963[_0x4ff9e2]));
    _0x34cbce.push("./temp/tts/" + _0x4ff9e2 + ".mp3");
  }
  async function _0x66258f(_0x1d9a04) {
    return new Promise((_0x2820ef, _0x43ca1d) => {
      const _0x6a1995 = require("child_process").exec;
      _0x6a1995("ffmpeg -y -i " + _0x34cbce.join(" -i ") + " -filter_complex \"[0:a][1:a]concat=n=" + _0x34cbce.length + ":v=0:a=1\" ./temp/tts/result.mp3", (_0x1be77e, _0x4fd932, _0x4883b8) => {
        if (_0x1be77e) {
          throw _0x1be77e.message;
        }
        _0x2820ef(_0xdd1b70.readFileSync("./temp/tts/result.mp3"));
      });
    });
  }
  return await _0x66258f(_0x34cbce);
}
var _0x59516b = {
  set: _0x322cf6,
  get: _0x2d9d78,
  "delete": _0x34bef8,
  reset: _0x4a0ee5
};
var _0x5b2b95 = {
  set: _0x39ef61,
  get: _0x20f4a0,
  "delete": _0x9155f3,
  reset: _0x3474fd
};
var _0x1e3417 = {
  set: _0x5f062f,
  get: _0x5d580e,
  "delete": _0x56b2bf,
  reset: _0x104284
};
var _0x1b26ef = {
  set: _0xc00abb,
  get: _0x2cbfc0,
  "delete": _0x32352a,
  reset: _0x5ccd85
};
var _0x3fc7a9 = {
  set: _0x5a8fd5,
  get: _0x2a606e,
  "delete": _0x5c536e,
  reset: _0x16cefd
};
var _0x1bbc3d = {
  set: _0x4afb52,
  get: _0x584b27,
  "delete": _0x554659,
  reset: _0x4f32a0
};
var _0x9cdcf7 = {
  set: _0x132cba,
  get: _0x4f0106,
  "delete": _0x3216ff,
  reset: _0x416dc5
};
var _0x7332a7 = {
  set: _0x127101,
  get: _0xdbc39b,
  "delete": _0x4e3286,
  reset: _0x1e89e7
};
var _0x405aa9 = {
  processOnwa: _0x2ba255,
  antiword: _0x5b2b95,
  antidemote: _0x3fc7a9,
  antipromote: _0x1b26ef,
  igStalk: _0x127c2e,
  chatGPT: _0x4fa389,
  gtts: _0x18b862,
  avMix: _0x5efc07,
  rotate: _0x1b78a3,
  fb: _0x2db3d5,
  story: _0x40f977,
  tiktok: _0x2ba9a6,
  pin: _0x13bee7,
  downloadGram: _0x1c7445,
  aadhar: _0x327bff,
  blur: _0x31b31a,
  searchYT: _0xfb07d7,
  findMusic: _0x418ed1,
  sticker: _0x4c9009,
  bytesToSize: _0x5cbc3a,
  addExif: _0x378a53,
  parseAlive: _0x578e0c,
  parseWelcome: _0x38be7e,
  parseUptime: _0x8d8b77,
  bass: _0x235cf7,
  isNumeric: _0xa38c89,
  isAdmin: _0x386ba1,
  circle: _0xbffc9b,
  mentionjid: _0x1bd5d9,
  getJson: _0x9e8730,
  chatBot: _0x2ad615,
  getWarn: _0x8e9810,
  setWarn: _0x26ffd6,
  resetWarn: _0x24c517,
  sendYtQualityList: _0x2db67f,
  processYtv: _0xbe966e,
  getThumb: _0x213103,
  isFake: _0xa91ac3,
  antibot: _0x9cdcf7,
  antifake: _0x1e3417,
  antilink: _0x59516b,
  antispam: _0x1bbc3d,
  pdm: _0x7332a7
};
module.exports = _0x405aa9;