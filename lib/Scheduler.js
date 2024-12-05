const config = require("../config");
const simpleGit = require("simple-git");
const git = simpleGit();
const Schedule = async _0xdd8cba => {
  const {
    getAutoMute: _0x4a7619,
    getAutounMute: _0x4aab87
  } = require("../plugins/misc/scheduler");
  var _0xc26511 = await _0x4a7619();
  var _0x2749f5 = await _0x4aab87();
  var _0x462a60 = require("node-cron");
  _0xc26511.map(async _0x520150 => {
    var _0x1130b3 = _0x520150.dataValues.time.split(" ")[0x1];
    var _0xa04470 = _0x520150.dataValues.time.split(" ")[0x0];
    var _0x1efb2c = _0x520150.dataValues.chat;
    _0x462a60.schedule(_0x1130b3 + " " + _0xa04470 + " * * *", async () => {
      await _0xdd8cba.groupSettingUpdate(_0x1efb2c, "announcement");
      await _0xdd8cba.sendMessage(_0x1efb2c, {
        'text': config.AUTOMUTE_MSG
      });
    });
  });
  _0x2749f5.map(async _0x4fde63 => {
    var _0x78ca93 = _0x4fde63.dataValues.time.split(" ")[0x1];
    var _0x11aed1 = _0x4fde63.dataValues.time.split(" ")[0x0];
    var _0x401b9a = _0x4fde63.dataValues.chat;
    _0x462a60.schedule(_0x78ca93 + " " + _0x11aed1 + " * * *", async () => {
      await _0xdd8cba.groupSettingUpdate(_0x401b9a, "not_announcement");
      await _0xdd8cba.sendMessage(_0x401b9a, {
        'text': config.AUTOUNMUTE_MSG
      });
    });
  });
  updater = false;
  async function _0x5554d2() {
    if (updater === false) {
      try {
        await git.fetch();
      } catch {
        return console.log("Update checker not running, probably there may be issues with local git");
      }
      var _0x9f23d9 = await git.log(["main..origin/main"]);
      if (_0x9f23d9.total !== 0x0) {
        var _0x4fb58a = "*_UPDATE(S) AVAILABLE_*\n\n";
        var _0x5943fc = _0x9f23d9.all.reverse();
        for (let _0x217428 in _0x5943fc) {
          _0x4fb58a += parseInt(_0x217428) + 0x1 + ". *" + _0x5943fc[_0x217428].message + "* _(" + _0x5943fc[_0x217428].date.substring(0x0, 0xa) + ")_ \n";
        }
        var _0x5aaa11 = __dirname.startsWith("/rgnk") ? "\n\n*_Only update after 5 mins!_*" : '';
        try {
          await _0xdd8cba.sendMessage(config.SUDO.split(',')[0x0] + "@s.whatsapp.net", {
            'text': _0x4fb58a.trim() + _0x5aaa11
          });
        } catch {}
        updater = true;
      }
    }
  }
  async function _0x2e60a4() {
    if (config.ALWAYS_ONLINE !== true) {
      try {
        await _0xdd8cba.sendPresenceUpdate("unavailable", _0xdd8cba.user.id.split(':')[0x0] + "@s.whatsapp.net");
      } catch {}
    }
  }
  setInterval(_0x5554d2, 0xea60);
  setInterval(_0x2e60a4, 0x2710);
};
module.exports = Schedule;