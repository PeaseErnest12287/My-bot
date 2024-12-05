const Base = require("./Base");
const {
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  proto
} = require("@adiwajshing/baileys");
class Greeting extends Base {
  constructor(_0x328fd6, _0x57b886) {
    super(_0x328fd6);
    if (_0x57b886) {
      this._patch(_0x57b886);
    }
  }
  ["_patch"](_0x4ed873) {
    this.jid = _0x4ed873.id;
    this.update = _0x4ed873.action;
    this.participant = _0x4ed873.participants;
    this.from = _0x4ed873.from;
    return super._patch(_0x4ed873);
  }
  async ["sendImageTemplate"](_0x393a68, _0x207a9e, _0xc54421, _0x24bc88) {
    let _0x39c9ca = await prepareWAMessageMedia({
      'image': _0x393a68
    }, {
      'upload': this.client.waUploadToServer
    });
    var _0x176089 = generateWAMessageFromContent(this.jid, proto.Message.fromObject({
      'templateMessage': {
        'hydratedTemplate': {
          'imageMessage': _0x39c9ca.imageMessage,
          'hydratedContentText': _0x207a9e,
          'hydratedFooterText': _0xc54421,
          'hydratedButtons': _0x24bc88
        }
      }
    }), {});
    this.client.relayMessage(this.jid, _0x176089.message, {
      'messageId': _0x176089.key.id
    });
  }
}
;
module.exports = Greeting;