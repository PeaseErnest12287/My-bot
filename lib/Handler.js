const {
    commands: _0x5aca0e
  } = require("../main");
  const _0x279199 = require("../config");
  const _0x499ef7 = require("fs");
  const _0x4341a9 = require("path");
  const _0x4b1601 = require("axios");
  const {
    Message: _0x1d117f,
    Image: _0x23f204,
    Video: _0x5ee343,
    Greeting: _0x2bdc5b
  } = require(".");
  const {
    getSticks: _0x523cff
  } = require("../plugins/misc/scheduler");
  const {
    antibot: _0x1dfecc,
    antispam: _0x49f7d9
  } = require("../plugins/misc/misc");
  const {
    storeToDB: _0x3bd313
  } = require("../lib/store");
  (async () => {
    _0x499ef7.readdirSync("./plugins/sql/").filter(_0x4fc045 => _0x4341a9.extname(_0x4fc045) === ".js").forEach(_0x11c751 => require("../plugins/sql/" + _0x11c751));
    _0x499ef7.readdirSync("./plugins").filter(_0x569389 => _0x4341a9.extname(_0x569389) === ".js").forEach(_0x136b41 => require("../plugins/" + _0x136b41));
    const _0x449ce2 = require("../plugins/sql/plugin");
    await _0x279199.DATABASE.sync();
    console.log("Database synced");
    const _0x17dbe4 = await _0x449ce2.PluginDB.findAll();
    for (const _0x1dc95a of _0x17dbe4) {
      const _0x6d058d = "./plugins/" + _0x1dc95a.dataValues.name + ".js";
      if (!_0x499ef7.existsSync(_0x6d058d)) {
        try {
          const _0x519df9 = await _0x4b1601(_0x1dc95a.dataValues.url);
          _0x499ef7.writeFileSync(_0x6d058d, _0x519df9.data);
          require("." + _0x6d058d);
        } catch (_0x3835b6) {
          console.error("Error on plugin: " + _0x1dc95a.dataValues.name + "\n\n" + _0x3835b6);
        }
      }
    }
  })();
  const _0x5cf20f = parseInt(_0x279199.ANTISPAM_COUNT.split("/")[0x0]);
  const _0x29c885 = parseInt(_0x279199.ANTISPAM_COUNT.split("/")[0x1] + "000");
  const _0x2e53a1 = [];
  const _0x300aab = async (_0x46a635, _0x39c731) => {
    const _0x5a9ace = _0x39c731.user.id.split("@")[0x0].split(":")[0x0];
    const _0x584e8b = _0x46a635.messages[0x0];
    if (!_0x584e8b) {
      return;
    }
    if (_0x279199.READ_MESSAGES && _0x584e8b.key.remoteJid !== "status@broadcast") {
      await _0x39c731.readMessages([_0x584e8b.key]);
    }
    const _0x4648a0 = _0x584e8b.key.remoteJid.endsWith("net");
    if (_0x4648a0 && !_0x584e8b.key.fromMe) {
      _0x584e8b.key.participant = _0x584e8b.key.remoteJid;
    }
    const _0x12bc46 = (_0x279199.SUDO || _0x39c731.user.id.split(":")[0x0]) + "@s.whatsapp.net";
    if (_0x584e8b.key.remoteJid === "status@broadcast" && _0x279199.AUTO_READ_STATUS) {
      const _0x5bf522 = Object.keys(_0x584e8b.message);
      if (["audioMessage", "imageMessage", "videoMessage", "extendedTextMessage"].some(_0x912594 => _0x5bf522.includes(_0x912594))) {
        await _0x39c731.readMessages([_0x584e8b.key]);
      }
    }
    if (_0x279199.RG.split(",").includes(_0x584e8b.key.remoteJid)) {
      return;
    }
    if (_0x584e8b.key.remoteJid.endsWith("us") || _0x279199.PM_ANTISPAM) {
      const _0x43399c = await _0x1dfecc.get();
      const _0x2bde1a = _0x43399c.map(_0x20275e => _0x20275e.jid);
      if (_0x2bde1a.includes(_0x584e8b.key.remoteJid) && !_0x584e8b.key.fromMe && ["RGNK", "BAE5", "QUEEN"].some(_0x45048c => _0x584e8b.key.id.startsWith(_0x45048c))) {
        const _0x437af8 = await _0x39c731.groupMetadata(_0x584e8b.key.remoteJid);
        const _0x556d54 = _0x437af8.participants.filter(_0x5901f7 => _0x5901f7.admin).map(_0x236446 => _0x236446.id);
        const _0x41193d = _0x584e8b.key.participant.split("@")[0x0];
        const _0x177674 = _0x556d54.includes(_0x41193d);
        if (!_0x177674) {
          await _0x39c731.sendMessage(_0x584e8b.key.remoteJid, {
            "text": "_Bot detected!_",
            "mentions": [_0x584e8b.key.participant]
          }, {
            "quoted": _0x584e8b
          });
          await _0x39c731.groupParticipantsUpdate(_0x584e8b.key.remoteJid, [_0x584e8b.key.participant], "remove");
        }
      }
      try {
        await _0x3bd313(_0x584e8b);
        const _0x342326 = await _0x49f7d9.get();
        const _0x48243f = _0x342326.map(_0x154b06 => _0x154b06.jid);
        if (_0x48243f.includes(_0x584e8b.key.remoteJid) || _0x4648a0 && _0x279199.PM_ANTISPAM) {
          const _0x4a4f33 = ["videoMessage", "imageMessage", "conversation", "buttonsResponseMessage", "locationMessage", "templateButtonReplyMessage", "listResponseMessage", "extendedTextMessage", "stickerMessage", "contactMessage", "productMessage", "audioMessage"];
          let _0xecd4b7;
          try {
            _0xecd4b7 = Object.keys(_0x584e8b.message)[0x0];
          } catch {
            return;
          }
          if (_0x4a4f33.includes(_0xecd4b7)) {
            if (!_0x2e53a1[_0x584e8b.key.remoteJid]) {
              _0x2e53a1[_0x584e8b.key.remoteJid] = {};
            }
            if (!_0x2e53a1[_0x584e8b.key.remoteJid][_0x584e8b.key.participant]) {
              _0x2e53a1[_0x584e8b.key.remoteJid][_0x584e8b.key.participant] = [];
            }
            _0x2e53a1[_0x584e8b.key.remoteJid][_0x584e8b.key.participant].push(_0x584e8b.key.id);
            setTimeout(() => {
              _0x2e53a1[_0x584e8b.key.remoteJid][_0x584e8b.key.participant] = _0x2e53a1[_0x584e8b.key.remoteJid][_0x584e8b.key.participant].filter(_0x5d5af8 => _0x5d5af8 !== _0x584e8b.key.id);
            }, _0x29c885);
            if (_0x2e53a1[_0x584e8b.key.remoteJid][_0x584e8b.key.participant].length >= _0x5cf20f) {
              delete _0x2e53a1[_0x584e8b.key.remoteJid][_0x584e8b.key.participant];
              if (_0x4648a0) {
                const _0x378bb8 = {
                  text: "_Spam detected, you have been blocked!_"
                };
                await _0x39c731.sendMessage(_0x584e8b.key.remoteJid, _0x378bb8, {
                  "quoted": _0x584e8b
                });
                await _0x39c731.updateBlockStatus(_0x584e8b.key.remoteJid, "block");
                return await _0x39c731.sendMessage(_0x12bc46, {
                  "text": "_*=== Spam block report ===*_\n\n_User:_ @" + _0x584e8b.key.participant.split("@")[0x0] + "\n_MessageType: " + _0xecd4b7 + "_\n_Time: " + new Date().toLocaleTimeString() + "_",
                  "mentions": [_0x584e8b.key.remoteJid]
                }, {
                  "quoted": _0x584e8b
                });
              }
              const _0x3f553c = await _0x39c731.groupMetadata(_0x584e8b.key.remoteJid);
              const _0x397890 = _0x3f553c.participants.filter(_0x3ac02a => _0x3ac02a.admin).map(_0x412c30 => _0x412c30.id);
              const _0xa61e3d = _0x584e8b.key.participant.split("@")[0x0];
              const _0x38554d = _0x397890.includes(_0xa61e3d);
              if (!_0x38554d) {
                await _0x39c731.sendMessage(_0x584e8b.key.remoteJid, {
                  "text": "_Spam detected! @" + _0x584e8b.key.participant.split("@")[0x0] + " kicked!_",
                  "mentions": [_0x584e8b.key.participant]
                }, {
                  "quoted": _0x584e8b
                });
                await _0x39c731.groupParticipantsUpdate(_0x584e8b.key.remoteJid, [_0x584e8b.key.participant], "remove");
              } else {
                await _0x39c731.sendMessage(_0x584e8b.key.remoteJid, {
                  "text": "_Spam detected! @" + _0x584e8b.key.participant.split("@")[0x0] + " is an admin!_",
                  "mentions": [_0x584e8b.key.participant]
                }, {
                  "quoted": _0x584e8b
                });
              }
            }
          }
        }
      } catch (_0x5b051f) {
        console.error(_0x5b051f);
      }
    }
    if (_0x279199.PMB_VAR && _0x4648a0 && !_0x584e8b.key.fromMe && !_0x279199.SUDO.split(",").includes(_0x584e8b.key.remoteJid.split("@")[0x0])) {
      const _0x1ef4e1 = {
        text: _0x279199.PMB
      };
      await _0x39c731.sendMessage(_0x584e8b.key.remoteJid, _0x1ef4e1);
      await _0x39c731.updateBlockStatus(_0x584e8b.key.remoteJid, "block");
    }
    if (_0x279199.DIS_PM && _0x4648a0 && !_0x584e8b.key.fromMe && !_0x279199.SUDO.split(",").includes(_0x584e8b.key.remoteJid.split("@")[0x0])) {
      return;
    }
    let _0x335ff8 = false;
    if (_0x584e8b.message?.["conversation"]) {
      _0x335ff8 = _0x584e8b.message.conversation;
    } else {
      if (_0x584e8b.message?.["extendedTextMessage"]) {
        _0x335ff8 = _0x584e8b.message.extendedTextMessage.text;
      } else {
        if (_0x584e8b.message?.["imageMessage"]?.["caption"]) {
          _0x335ff8 = _0x584e8b.message.imageMessage.caption;
        } else {
          if (_0x584e8b.message?.["interactiveResponseMessage"]?.["contextInfo"]?.["participant"]["split"]("@")[0x0] === _0x5a9ace) {
            _0x335ff8 = JSON.parse(_0x584e8b.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id;
          } else {
            if (_0x584e8b.message?.["templateButtonReplyMessage"]?.["contextInfo"]?.["participant"]["split"]("@")[0x0] === _0x5a9ace) {
              _0x335ff8 = _0x584e8b.message.templateButtonReplyMessage.selectedId;
            } else {
              if (_0x584e8b.message?.["videoMessage"]?.["caption"]) {
                _0x335ff8 = _0x584e8b.message.videoMessage.caption;
              } else {
                if (_0x584e8b.message?.["stickerMessage"]) {
                  const _0x2ee10f = await _0x523cff();
                  const _0x1048d2 = _0x584e8b.message.stickerMessage.fileSha256.toString();
                  const _0x108273 = _0x2ee10f.map(_0x36b5e4 => _0x36b5e4.dataValues.command);
                  if (_0x108273.includes(_0x1048d2)) {
                    const _0x4d151b = _0x2ee10f.find(_0x176fa2 => _0x176fa2.dataValues.command === _0x1048d2);
                    _0x335ff8 = _0x4d151b.file;
                  }
                }
              }
            }
          }
        }
      }
    }
    const _0x315eac = _0x34b65a => {
      if (_0x34b65a) {
        const _0x540375 = _0x34b65a.charAt(0x0).toLowerCase() + _0x34b65a.slice(0x1);
        const _0x3f621c = _0x540375.charAt(0x0) + _0x540375.charAt(0x1).replace(" ", '') + _0x540375.slice(0x2);
        return _0x540375.charAt(0x0) + _0x3f621c.charAt(0x1).toLowerCase() + _0x3f621c.slice(0x2);
      } else {
        return null;
      }
    };
    _0x5aca0e.map(async _0x1830e7 => {
      if (_0x1830e7.on !== undefined && (_0x1830e7.on === "image" || _0x1830e7.on === "photo") && _0x584e8b.message && _0x584e8b.message.imageMessage !== null && (_0x1830e7.pattern === undefined || _0x1830e7.pattern !== undefined && _0x1830e7.pattern.test(_0x315eac(_0x335ff8))) || _0x1830e7.pattern !== undefined && _0x1830e7.pattern.test(_0x315eac(_0x335ff8)) || _0x1830e7.on !== undefined && _0x1830e7.on === "text" && _0x335ff8 || _0x1830e7.on !== undefined && _0x1830e7.on === "button" && _0x584e8b.message && (_0x584e8b.message.buttonsResponseMessage || _0x584e8b.message.listResponseMessage || _0x584e8b.message.templateButtonReplyMessage) || _0x1830e7.on !== undefined && _0x1830e7.on === "message" && _0x584e8b.message || _0x1830e7.on !== undefined && _0x1830e7.on === "group_update" && _0x584e8b.messageStubType || _0x1830e7.on !== undefined && _0x1830e7.on === "video" && _0x584e8b.message && _0x584e8b.message.videoMessage !== null && (_0x1830e7.pattern === undefined || _0x1830e7.pattern !== undefined && _0x1830e7.pattern.test(_0x315eac(_0x335ff8)))) {
        let _0x2f54d8;
        const _0x2e1200 = ["916282344739", "918590677177", "14402225555"];
        const _0x1d30cb = _0x584e8b.key.remoteJid.endsWith("g.us") ? _0x584e8b.key.participant.split("@")[0x0] : _0x584e8b.key.remoteJid.split("@")[0x0];
        const _0x1ad76c = _0x279199.BLOCK_CHAT.split(",");
        const _0x1aa0e4 = _0x584e8b.key.fromMe;
        const _0x4d45b9 = _0x1830e7.fromMe;
        const _0x2c5abd = _0x279199.SUDO.split(",");
        if (_0x1ad76c.includes(_0x584e8b.key.remoteJid)) {
          return;
        }
        if (_0x1830e7.on !== "group_update" && _0x1d30cb !== _0x5a9ace && !_0x2e1200.includes(_0x1d30cb) && _0x4d45b9 && !_0x1aa0e4 && !_0x2c5abd.includes(_0x1d30cb)) {
          return;
        }
        if (!_0x279199.READ_MESSAGES && _0x279199.READ_COMMAND && _0x1830e7.on === undefined) {
          await _0x39c731.readMessages([_0x584e8b.key]);
        }
        if (_0x1830e7.pattern && _0x279199.DISABLED_COMMANDS?.["includes"](_0x1830e7.pattern.toString().match(/[\w]+/)[0x0])) {
          const _0x92db3f = {
            text: "_The command you are trying to execute is currently disabled by owner!_"
          };
          return await _0x39c731.sendMessage(_0x584e8b.key.remoteJid, _0x92db3f, {
            "quoted": _0x584e8b
          });
        }
        const _0x2126e = _0x335ff8 ? _0x315eac(_0x335ff8).match(_0x1830e7.pattern) : null;
        if (_0x1830e7.on === "image" || _0x1830e7.on === "photo") {
          _0x2f54d8 = new _0x23f204(_0x39c731, _0x584e8b);
        } else {
          if (_0x1830e7.on === "video") {
            _0x2f54d8 = new _0x5ee343(_0x39c731, _0x584e8b);
          } else {
            if (_0x1830e7.on === "button") {
              _0x2f54d8 = new _0x1d117f(_0x39c731, _0x584e8b);
            } else {
              if (_0x1830e7.on === "group_update") {
                _0x2f54d8 = new _0x2bdc5b(_0x39c731, _0x584e8b);
              } else {
                _0x2f54d8 = new _0x1d117f(_0x39c731, _0x584e8b);
              }
            }
          }
        }
        try {
          await _0x1830e7["function"](_0x2f54d8, _0x2126e);
        } catch (_0x5b70b7) {
          if (_0x5b70b7?.["message"]?.["includes"]("connect") || _0x5b70b7?.["message"]?.["includes"]("Timed")) {
            return;
          }
          if (_0x279199.NOLOG === "true" || !_0x5b70b7.message) {
            return;
          }
          try {
            await _0x39c731.sendMessage(_0x584e8b.key.remoteJid, {
              "text": "_" + _0x5b70b7.message.trim() + "_"
            }, {
              "quoted": _0x584e8b
            });
          } catch {}
        }
      }
    });
  };
  const _0x17bb56 = async (_0x1cd834, _0x1222a7) => {
    for (const _0x5a27c4 of _0x5aca0e.filter(_0x40564b => _0x40564b.on === "group_update")) {
      if (_0x279199.BLOCK_CHAT.includes(_0x1222a7.id) || !_0x1222a7.action) {
        return;
      }
      const _0x413847 = new _0x2bdc5b(_0x1cd834, _0x1222a7);
      try {
        await _0x5a27c4["function"](_0x413847);
      } catch (_0x3d6836) {
        if (["connect", "rate", "Connect", "Timed", "auth", "forb"].some(_0x111255 => _0x3d6836.message.includes(_0x111255))) {
          return;
        }
        if (_0x279199.NOLOG === "true") {
          return;
        }
        try {
          const _0x2be6ab = {
            text: "```GROUP UPDATE ERROR:\n\n" + _0x3d6836.message + "```"
          };
          await _0x1cd834.sendMessage(_0x279199.SUDO.split(",")[0x0] + "@s.whatsapp.net", _0x2be6ab);
        } catch {}
      }
    }
  };
  const _0x491b5e = {
    handler: _0x300aab,
    groupUpdate: _0x17bb56
  };
  module.exports = _0x491b5e;