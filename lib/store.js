const _0x55ad4e = require("../config");
const {
  DataTypes: _0x375ea8
} = require("sequelize");
const _0x351172 = {
  type: _0x375ea8.TEXT,
  allowNull: false
};
const _0x4f1e5d = {
  type: _0x375ea8.TEXT,
  allowNull: false
};
const _0x3df2df = {
  chat: _0x351172,
  bucket: _0x4f1e5d
};
const _0x2d9470 = _0x55ad4e.DATABASE.define("Msgdb", _0x3df2df);
async function _0x1cf9e5(_0x25b48c) {
  const _0x42232d = {
    chat: _0x25b48c
  };
  const _0x59de61 = {
    where: _0x42232d
  };
  return await _0x2d9470.findAll(_0x59de61);
}
async function _0x2c09d7(_0x1847c3) {
  if (!_0x1847c3 || !_0x1847c3.key || !_0x1847c3.message) {
    return;
  }
  const _0x381c63 = {
    videoMessage: "video",
    imageMessage: "image",
    conversation: "text",
    buttonsResponseMessage: "text",
    locationMessage: "location",
    templateButtonReplyMessage: "text",
    listResponseMessage: "text",
    extendedTextMessage: "text",
    stickerMessage: "sticker",
    contactMessage: "vcard",
    audioMessage: "audio"
  };
  const _0x423bc2 = {
    chat: _0x1847c3.key.remoteJid
  };
  const _0x184ccc = {
    where: _0x423bc2
  };
  var _0x2a7bdf = await _0x2d9470.findAll(_0x184ccc);
  let _0x288274 = _0x2a7bdf[0]?.["dataValues"]?.["bucket"] ? JSON.parse(_0x2a7bdf[0]?.["dataValues"]?.["bucket"]) : {};
  let {
    id: _0x1f0731,
    participant: _0x5e312c,
    remoteJid: _0x7a4658
  } = _0x1847c3.key;
  if (_0x1f0731.startsWith("BAE5")) {
    return;
  }
  let _0x947ee3 = Object.keys(_0x1847c3.message)[0];
  if (!_0x381c63[_0x947ee3]) {
    return;
  }
  let _0x1fd75d = _0x1847c3.pushName;
  let _0x267785 = {
    "name": _0x1fd75d,
    "time": new Date().getTime(),
    "total": _0x288274[_0x5e312c] ? _0x288274[_0x5e312c]?.["total"] + 1 : 1,
    "type": {
      [_0x381c63[_0x947ee3]]: _0x288274[_0x5e312c]?.["type"] ? _0x288274[_0x5e312c].type[_0x381c63[_0x947ee3]] ? _0x288274[_0x5e312c].type[_0x381c63[_0x947ee3]] + 1 : 1 : 1
    }
  };
  if (_0x288274[_0x5e312c]?.["type"]) {
    delete _0x288274[_0x5e312c]?.["type"][_0x381c63[_0x947ee3]];
    _0x267785.type = {
      ..._0x267785.type,
      ..._0x288274[_0x5e312c]?.["type"]
    };
  }
  delete _0x288274[_0x5e312c];
  if (!_0x2a7bdf.length) {
    const _0x96f018 = {
      _0x5e312c: _0x267785
    };
    return await _0x2d9470.create({
      "chat": _0x7a4658,
      "bucket": JSON.stringify(_0x96f018)
    });
  } else {
    if (_0x2a7bdf[0]) {
      const _0x5e368e = {
        [_0x5e312c]: _0x267785,
        ..._0x288274
      };
      return await _0x2a7bdf[0].update({
        "bucket": JSON.stringify(_0x5e368e)
      });
    } else {
      return;
    }
  }
}
const _0x4288a5 = {
  StoreDB: _0x2d9470,
  fetchFromStore: _0x1cf9e5,
  storeToDB: _0x2c09d7
};
module.exports = _0x4288a5;