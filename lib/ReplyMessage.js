const {
    downloadMediaMessage
  } = require("@adiwajshing/baileys");
  const fs = require('fs');
  const Base = require("./Base");
  class ReplyMessage extends Base {
    constructor(_0x45a84f, _0x3912df) {
      super(_0x45a84f);
      if (_0x3912df) {
        this._patch(_0x3912df);
      }
    }
    ["_patch"](_0x7c1a29) {
      this.id = _0x7c1a29.stanzaId;
      this.jid = _0x7c1a29.participant;
      this.remoteJid = _0x7c1a29.remoteJid;
      if (_0x7c1a29.quotedMessage && _0x7c1a29.quotedMessage.imageMessage) {
        this.message = _0x7c1a29.quotedMessage.imageMessage.caption === null ? _0x7c1a29.message.imageMessage.caption : '';
        this.caption = _0x7c1a29.quotedMessage.imageMessage.caption === null ? _0x7c1a29.message.imageMessage.caption : '';
        this.url = _0x7c1a29.quotedMessage.imageMessage.url;
        this.mimetype = _0x7c1a29.quotedMessage.imageMessage.mimetype;
        this.height = _0x7c1a29.quotedMessage.imageMessage.height;
        this.width = _0x7c1a29.quotedMessage.imageMessage.width;
        this.mediaKey = _0x7c1a29.quotedMessage.imageMessage.mediaKey;
        this.sticker = false;
        this.audio = false;
        this.image = true;
        this.video = false;
      } else {
        if (_0x7c1a29.quotedMessage && _0x7c1a29.quotedMessage.stickerMessage) {
          this.animated = _0x7c1a29.quotedMessage.stickerMessage.isAnimated;
          this.sticker = true;
          this.audio = false;
          this.image = false;
          this.video = false;
        } else {
          if (_0x7c1a29.quotedMessage && _0x7c1a29.quotedMessage.audioMessage) {
            this.duration = _0x7c1a29.quotedMessage.audioMessage.duration;
            this.ptt = _0x7c1a29.quotedMessage.audioMessage.ptt;
            this.sticker = false;
            this.audio = true;
            this.image = false;
            this.video = false;
          } else {
            if (_0x7c1a29.quotedMessage && _0x7c1a29.quotedMessage.videoMessage) {
              this.message = _0x7c1a29.quotedMessage.videoMessage.caption === null ? _0x7c1a29.message.videoMessage.caption : '';
              this.caption = _0x7c1a29.quotedMessage.videoMessage.caption === null ? _0x7c1a29.message.videoMessage.caption : '';
              this.url = _0x7c1a29.quotedMessage.videoMessage.url;
              this.mimetype = _0x7c1a29.quotedMessage.videoMessage.mimetype;
              this.height = _0x7c1a29.quotedMessage.videoMessage.height;
              this.width = _0x7c1a29.quotedMessage.videoMessage.width;
              this.mediaKey = _0x7c1a29.quotedMessage.videoMessage.mediaKey;
              this.sticker = false;
              this.audio = false;
              this.image = false;
              this.video = true;
            } else {
              if (_0x7c1a29.quotedMessage && _0x7c1a29.quotedMessage.conversation) {
                this.message = _0x7c1a29.quotedMessage.conversation;
                this.text = _0x7c1a29.quotedMessage.conversation;
                this.sticker = false;
                this.audio = false;
                this.image = false;
                this.video = false;
              } else if (_0x7c1a29.quotedMessage && _0x7c1a29.quotedMessage.extendedTextMessage) {
                this.message = _0x7c1a29.quotedMessage.extendedTextMessage.text;
                this.text = _0x7c1a29.quotedMessage.extendedTextMessage.text;
                this.sticker = false;
                this.audio = false;
                this.image = false;
                this.video = false;
              }
            }
          }
        }
      }
      this.data = {
        'key': {
          'remoteJid': _0x7c1a29.remoteJid,
          'fromMe': _0x7c1a29.fromMe,
          'id': _0x7c1a29.stanzaId,
          'participant': this.jid
        },
        'message': _0x7c1a29.quotedMessage
      };
      return super._patch(_0x7c1a29);
    }
    async ["download"](_0xa7e838 = null) {
      if (this.data.message.ptvMessage) {
        this.data.message = JSON.parse(JSON.stringify(this.data.message).replace("ptvMessage", "videoMessage"));
      }
      const _0x52e426 = await downloadMediaMessage(this.data, "buffer");
      if (_0xa7e838 === "buffer") {
        return _0x52e426;
      }
      var _0x3bf2d0 = "./temp/temp." + this.data.message[Object.keys(this.data.message)[0x0]].mimetype?.["split"]('/')[0x1];
      await fs.writeFileSync(_0x3bf2d0, _0x52e426);
      return _0x3bf2d0;
    }
  }
  ;
  module.exports = ReplyMessage;