const {
    generateWAMessageFromContent: _0x2af5b0,
    proto: _0x3db01f,
    prepareWAMessageMedia: _0x1c5354,
    generateForwardMessageContent: _0x2b11bd,
    getContentType: _0x3a2cd7
  } = require("@whiskeysockets/baileys");
  const _0x4455f1 = require("./Base");
  const {
    SUDO: _0x31f7ab
  } = require("../config");
  const _0x56b7df = require("./ReplyMessage");
  let _0x26ec3a = _0x31f7ab.split(",");
  let _0x50f4f0 = require("fs");
  async function _0x497f1a(_0x22941e) {
    const _0x5f26a6 = await require("jimp").read(_0x22941e);
    function _0x5cce8e(_0x1949b1, _0x3691b7) {
      for (var _0x3e5ffa = 0x0; true; _0x3e5ffa++) {
        _0x1949b1 = _0x1949b1 > 0x12d || _0x3691b7 > 0x12d ? _0x1949b1 / 1.001 : _0x1949b1;
        _0x3691b7 = _0x1949b1 > 0x12d || _0x3691b7 > 0x12d ? _0x3691b7 / 1.001 : _0x3691b7;
        if (parseInt(_0x1949b1) < 0x12d && parseInt(_0x3691b7) < 0x12d) {
          return {
            "w": parseInt(_0x1949b1),
            "h": parseInt(_0x3691b7)
          };
        }
      }
    }
    var {
      w: _0xbf6c1,
      h: _0x5494a5
    } = _0x5cce8e(_0x5f26a6.bitmap.width, _0x5f26a6.bitmap.height);
    console.log("Engine: Generating thumbnail...");
    return await _0x5f26a6.resize(_0xbf6c1, _0x5494a5).getBufferAsync("image/jpeg");
  }
  class _0x449e83 extends _0x4455f1 {
    constructor(_0xabbf70, _0x33000f) {
      super(_0xabbf70);
      if (_0x33000f) {
        this._patch(_0x33000f);
      }
    }
    ["_patch"](_0x197550) {
      this.id = _0x197550.key.id === undefined ? undefined : _0x197550.key.id;
      this.jid = _0x197550.key.remoteJid;
      this.isGroup = _0x197550.key.remoteJid.endsWith("@g.us");
      this.fromMe = _0x197550.key.fromMe;
      this.sender = _0x197550.key.remoteJid.endsWith("@g.us") ? _0x197550.key.participant : _0x197550.key.remoteJid;
      this.fromOwner = _0x197550.key.fromMe || _0x26ec3a.includes((_0x197550.key.remoteJid.endsWith("@g.us") ? _0x197550.key.participant : _0x197550.key.remoteJid).split("@")[0x0]);
      this.senderName = _0x197550.pushName;
      this.myjid = this.client.user.id.split(":")[0x0];
      this.message = _0x197550.message.extendedTextMessage === null ? _0x197550.message.conversation : _0x197550.message.extendedTextMessage.text;
      this.timestamp = _0x197550.messageTimestamp;
      this.data = _0x197550;
      if (_0x197550.message.hasOwnProperty("extendedTextMessage") && _0x197550.message.extendedTextMessage.hasOwnProperty("contextInfo") === true && _0x197550.message.extendedTextMessage.contextInfo.hasOwnProperty("quotedMessage")) {
        this.reply = _0x197550.message.extendedTextMessage;
        _0x197550.message.extendedTextMessage.contextInfo.remoteJid = _0x197550.message.extendedTextMessage.contextInfo?.["remoteJid"] ? _0x197550.message.extendedTextMessage.contextInfo?.["remoteJid"] : this.jid;
        this.reply_message = new _0x56b7df(this.client, _0x197550.message.extendedTextMessage.contextInfo);
        this.quoted = {
          "key": {
            "remoteJid": _0x197550.message.extendedTextMessage.contextInfo?.["remoteJid"],
            "fromMe": !!(_0x197550.message.extendedTextMessage.contextInfo.participant === this.myjid + "@s.whatsapp.net"),
            "id": this.reply_message.id,
            "participant": _0x197550.message.extendedTextMessage.contextInfo.participant
          },
          "message": this.reply_message.data.message
        };
      } else {
        if (_0x197550.message.hasOwnProperty("stickerMessage") && _0x197550.message.stickerMessage.hasOwnProperty("contextInfo") === true && _0x197550.message.stickerMessage.contextInfo.hasOwnProperty("quotedMessage")) {
          this.reply = _0x197550.message.stickerMessage;
          this.reply_message = new _0x56b7df(this.client, _0x197550.message.stickerMessage.contextInfo);
          this.quoted = {
            "key": {
              "remoteJid": this.jid,
              "fromMe": !!(this.reply.contextInfo.participant === this.myjid + "@s.whatsapp.net"),
              "id": this.reply_message.id,
              "participant": this.reply.contextInfo.participant
            },
            "message": this.reply_message.data.message
          };
        } else {
          this.reply_message = false;
          this.reply = false;
        }
      }
      if (_0x197550.message.hasOwnProperty("interactiveResponseMessage")) {
        this.list = JSON.parse(_0x197550.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id;
        this.isOwnResponse = _0x197550.message.interactiveResponseMessage?.["contextInfo"]?.["participant"]?.["split"]("@")?.[0x0] == this.myjid;
      } else {
        this.list = false;
      }
      if (_0x197550.message.hasOwnProperty("templateButtonReplyMessage")) {
        this.button = _0x197550.message.templateButtonReplyMessage.selectedId;
      } else {
        this.button = false;
      }
      if (_0x197550.hasOwnProperty("messageStubType")) {
        this.update = _0x197550.messageStubType;
        this.participant = _0x197550.messageStubParameters;
      } else {
        this.update = false;
      }
      if (_0x197550.message.hasOwnProperty("extendedTextMessage") && _0x197550.message.extendedTextMessage.hasOwnProperty("contextInfo") === true && _0x197550.message.extendedTextMessage.contextInfo.hasOwnProperty("mentionedJid")) {
        this.mention = _0x197550.message.extendedTextMessage.contextInfo.mentionedJid;
      } else {
        this.mention = false;
      }
      return super._patch(_0x197550);
    }
    async ["sendMessage"](_0x28e900, _0x464b2c = "text", _0x31ca62) {
      if (_0x464b2c == "text") {
        const _0x57829a = {
          text: _0x28e900
        };
        return await this.client.sendMessage(this.jid, _0x57829a, _0x31ca62);
      }
      if (_0x464b2c == "image") {
        if (_0x31ca62?.["thumbnail"]) {
          return await this.client.sendMessage(this.jid, {
            "image": _0x28e900,
            "jpegThumbnail": await _0x497f1a(_0x31ca62.thumbnail)
          }, _0x31ca62);
        }
        const _0x280f88 = {
          image: _0x28e900
        };
        return await this.client.sendMessage(this.jid, _0x280f88, _0x31ca62);
      }
      if (_0x464b2c == "video") {
        if (_0x31ca62?.["thumbnail"]) {
          return await this.client.sendMessage(this.jid, {
            "video": _0x28e900,
            "jpegThumbnail": await _0x497f1a(_0x31ca62.thumbnail)
          }, _0x31ca62);
        }
        const _0x586b87 = {
          video: _0x28e900
        };
        return await this.client.sendMessage(this.jid, _0x586b87, _0x31ca62);
      }
      if (_0x464b2c == "audio") {
        const _0x248d20 = {
          audio: _0x28e900,
          mimetype: "audio/mp4"
        };
        return await this.client.sendMessage(this.jid, _0x248d20, _0x31ca62);
      }
      if (_0x464b2c == "sticker") {
        const _0x3f0fae = {
          sticker: _0x28e900
        };
        return await this.client.sendMessage(this.jid, _0x3f0fae, _0x31ca62);
      }
    }
    async ["send"](_0xc04f9d, _0x508035 = "text", _0x554d7c) {
      if (_0x508035 == "text") {
        const _0x419325 = {
          text: _0xc04f9d
        };
        return await this.client.sendMessage(this.jid, _0x419325, _0x554d7c);
      }
      if (_0x508035 == "image") {
        if (_0x554d7c?.["thumbnail"]) {
          return await this.client.sendMessage(this.jid, {
            "image": _0xc04f9d,
            "jpegThumbnail": await _0x497f1a(_0x554d7c.thumbnail)
          }, _0x554d7c);
        }
        const _0x175580 = {
          image: _0xc04f9d
        };
        return await this.client.sendMessage(this.jid, _0x175580, _0x554d7c);
      }
      if (_0x508035 == "video") {
        if (_0x554d7c?.["thumbnail"]) {
          return await this.client.sendMessage(this.jid, {
            "video": _0xc04f9d,
            "jpegThumbnail": await _0x497f1a(_0x554d7c.thumbnail)
          }, _0x554d7c);
        }
        const _0x196bbe = {
          video: _0xc04f9d
        };
        return await this.client.sendMessage(this.jid, _0x196bbe, _0x554d7c);
      }
      if (_0x508035 == "audio") {
        const _0x1e68c4 = {
          audio: _0xc04f9d,
          mimetype: "audio/mp4"
        };
        return await this.client.sendMessage(this.jid, _0x1e68c4, _0x554d7c);
      }
      if (_0x508035 == "sticker") {
        const _0x4b82de = {
          sticker: _0xc04f9d
        };
        return await this.client.sendMessage(this.jid, _0x4b82de, _0x554d7c);
      }
    }
    async ["download"]() {
      if (this.data.message.ptvMessage) {
        this.data.message = JSON.parse(JSON.stringify(this.data.message).replace("ptvMessage", "videoMessage"));
      }
      const _0x11b44e = await downloadMediaMessage(this.data, "buffer");
      if (type === "buffer") {
        return _0x11b44e;
      }
      var _0x3b2062 = "./temp/temp." + this.data.message[Object.keys(this.data.message)[0x0]].mimetype?.["split"]("/")[0x1];
      await _0x50f4f0.writeFileSync(_0x3b2062, _0x11b44e);
      return _0x3b2062;
    }
    async ["sendReply"](_0x2cce72, _0x169cd5 = "text", _0x4f1ff6 = {}) {
      if (_0x169cd5 == "text") {
        const _0x3d72a2 = {
          text: _0x2cce72
        };
        return await this.client.sendMessage(this.jid, _0x3d72a2, {
          "quoted": this.data
        });
      }
      if (_0x169cd5 == "image") {
        if (_0x4f1ff6?.["thumbnail"]) {
          return await this.client.sendMessage(this.jid, {
            "image": _0x2cce72,
            "jpegThumbnail": await _0x497f1a(_0x4f1ff6.thumbnail)
          }, {
            "quoted": this.data,
            ..._0x4f1ff6
          });
        }
        const _0x4d5d60 = {
          image: _0x2cce72
        };
        return await this.client.sendMessage(this.jid, _0x4d5d60, {
          "quoted": this.data
        });
      }
      if (_0x169cd5 == "video") {
        if (_0x4f1ff6?.["thumbnail"]) {
          return await this.client.sendMessage(this.jid, {
            "video": _0x2cce72,
            "jpegThumbnail": await _0x497f1a(_0x4f1ff6.thumbnail)
          }, {
            "quoted": this.data,
            ..._0x4f1ff6
          });
        }
        const _0x42c8b3 = {
          video: _0x2cce72
        };
        return await this.client.sendMessage(this.jid, _0x42c8b3, {
          "quoted": this.data
        });
      }
      if (_0x169cd5 == "audio") {
        const _0x57cfdb = {
          audio: _0x2cce72,
          mimetype: "audio/mp4"
        };
        return await this.client.sendMessage(this.jid, _0x57cfdb, {
          "quoted": this.data
        });
      }
      if (_0x169cd5 == "sticker") {
        const _0x184e02 = {
          sticker: _0x2cce72
        };
        return await this.client.sendMessage(this.jid, _0x184e02, {
          "quoted": this.data
        });
      }
    }
    async ["reply"](_0x730053, _0xd80494 = "text") {
      if (_0xd80494 == "text") {
        const _0x3a42e4 = {
          text: _0x730053
        };
        return await this.client.sendMessage(this.jid, _0x3a42e4, {
          "quoted": this.data
        });
      }
      if (_0xd80494 == "image") {
        const _0x1f098e = {
          image: _0x730053
        };
        return await this.client.sendMessage(this.jid, _0x1f098e, {
          "quoted": this.data
        });
      }
      if (_0xd80494 == "video") {
        const _0x3fe52c = {
          video: _0x730053
        };
        return await this.client.sendMessage(this.jid, _0x3fe52c, {
          "quoted": this.data
        });
      }
      if (_0xd80494 == "audio") {
        const _0x58b97d = {
          audio: _0x730053,
          mimetype: "audio/mp4"
        };
        return await this.client.sendMessage(this.jid, _0x58b97d, {
          "quoted": this.data
        });
      }
      if (_0xd80494 == "sticker") {
        const _0x296146 = {
          sticker: _0x730053
        };
        return await this.client.sendMessage(this.jid, _0x296146, {
          "quoted": this.data
        });
      }
    }
    async ["edit"](_0x4de398 = '', _0x36dba0 = false, _0x131f94 = false) {
      const _0x2df411 = {
        conversation: _0x4de398
      };
      const _0x277890 = {
        key: _0x131f94,
        type: 0xe,
        editedMessage: _0x2df411
      };
      const _0x1b6718 = {
        protocolMessage: _0x277890
      };
      return await this.client.relayMessage(_0x36dba0 || this.jid, _0x1b6718, {});
    }
    async ["getThumb"](_0x4f2ef0) {
      return await _0x497f1a(_0x4f2ef0);
    }
    async ["sendInteractiveMessage"](_0x37bb5f, _0x560721, _0x44bd5c) {
      if (!_0x37bb5f.includes("@")) {
        throw "Invalid JID";
      }
      let _0x3edc98;
      if (_0x44bd5c.image) {
        const _0x4ee67c = {
          image: _0x44bd5c.image
        };
        const _0x5ee1ae = {
          upload: this.client.waUploadToServer
        };
        _0x3edc98 = await _0x1c5354(_0x4ee67c, _0x5ee1ae);
      }
      if (_0x44bd5c.video) {
        const _0x3722e6 = {
          video: _0x44bd5c.video
        };
        const _0x2f6509 = {
          upload: this.client.waUploadToServer
        };
        _0x3edc98 = await _0x1c5354(_0x3722e6, _0x2f6509);
      }
      let _0x4f84fe = [{
        "name": _0x560721.type,
        "buttonParamsJson": JSON.stringify(_0x560721.body)
      }];
      if (_0x560721.type == "quick_reply") {
        _0x4f84fe = _0x560721.body;
      }
      const _0xcde10a = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x5f2061 = {
        text: _0x560721.head.subtitle
      };
      const _0x4ea81e = {
        text: _0x560721.head.footer
      };
      const _0xe0e847 = {
        ..._0x3edc98
      };
      _0xe0e847.title = _0x560721.head.title;
      _0xe0e847.subtitle = _0x560721.head.subtitle;
      _0xe0e847.hasMediaAttachment = false;
      const _0x1e2185 = _0x2af5b0(_0x37bb5f, {
        "viewOnceMessage": {
          "message": {
            "messageContextInfo": _0xcde10a,
            "interactiveMessage": _0x3db01f.Message.InteractiveMessage.create({
              "body": _0x3db01f.Message.InteractiveMessage.Body.create(_0x5f2061),
              "footer": _0x3db01f.Message.InteractiveMessage.Footer.create(_0x4ea81e),
              "header": _0x3db01f.Message.InteractiveMessage.Header.create(_0xe0e847),
              "nativeFlowMessage": _0x3db01f.Message.InteractiveMessage.NativeFlowMessage.create({
                "buttons": _0x4f84fe.map(_0x3c182d => ({
                  "name": _0x3c182d.name,
                  "buttonParamsJson": _0x3c182d.buttonParamsJson
                }))
              })
            })
          }
        }
      }, {});
      await this.client.relayMessage(_0x37bb5f, _0x1e2185.message, {
        "messageId": _0x1e2185.key.id
      });
    }
    async ["forwardMessage"](_0x3d65a1, _0x24caf4, _0x199ba9 = {}) {
      let _0x202522;
      let _0x26b092 = _0x3a2cd7(_0x24caf4.message);
      if (_0x199ba9.readViewOnce) {
        _0x24caf4.message = _0x24caf4.message && _0x24caf4.message.ephemeralMessage && _0x24caf4.message.ephemeralMessage.message ? _0x24caf4.message.ephemeralMessage.message : _0x24caf4.message || undefined;
        _0x202522 = Object.keys(_0x24caf4.message.viewOnceMessage.message)[0x0];
        delete (_0x24caf4.message && _0x24caf4.message.ignore ? _0x24caf4.message.ignore : _0x24caf4.message || undefined);
        delete _0x24caf4.message.viewOnceMessage.message[_0x202522].viewOnce;
        _0x24caf4.message = {
          ..._0x24caf4.message.viewOnceMessage.message
        };
      }
      if (_0x199ba9.mentions) {
        _0x24caf4.message[_0x26b092].contextInfo.mentionedJid = _0x199ba9.mentions;
      }
      let _0xffc68e = _0x2b11bd(_0x24caf4, false);
      let _0x57db39 = _0x3a2cd7(_0xffc68e);
      if (_0x199ba9.ptt) {
        _0xffc68e[_0x57db39].ptt = _0x199ba9.ptt;
      }
      if (_0x199ba9.audiowave) {
        _0xffc68e[_0x57db39].waveform = _0x199ba9.audiowave;
      }
      if (_0x199ba9.seconds) {
        _0xffc68e[_0x57db39].seconds = _0x199ba9.seconds;
      }
      if (_0x199ba9.fileLength) {
        _0xffc68e[_0x57db39].fileLength = _0x199ba9.fileLength;
      }
      if (_0x199ba9.caption) {
        _0xffc68e[_0x57db39].caption = _0x199ba9.caption;
      }
      if (_0x199ba9.contextInfo) {
        _0xffc68e[_0x57db39].contextInfo = _0x199ba9.contextInfo;
      }
      if (_0x199ba9.mentions) {
        _0xffc68e[_0x57db39].contextInfo.mentionedJid = _0x199ba9.mentions;
      }
      let _0x3ff5e2 = {};
      if (_0x26b092 != "conversation") {
        _0x3ff5e2 = _0x24caf4.message[_0x26b092].contextInfo;
      }
      _0xffc68e[_0x57db39].contextInfo = {
        ..._0x3ff5e2,
        ..._0xffc68e[_0x57db39].contextInfo
      };
      var _0x10b6e6 = _0x2af5b0(_0x3d65a1, _0xffc68e, _0x199ba9 ? {
        ..._0xffc68e[_0x57db39],
        ..._0x199ba9,
        ...(_0x199ba9.contextInfo ? {
          "contextInfo": {
            ..._0xffc68e[_0x57db39].contextInfo,
            ..._0x199ba9.contextInfo
          }
        } : {})
      } : {});
      await this.client.relayMessage(_0x3d65a1, _0x10b6e6.message, {
        "messageId": _0x10b6e6.key.id
      });
      return _0x10b6e6;
    }
  }
  ;
  module.exports = _0x449e83;