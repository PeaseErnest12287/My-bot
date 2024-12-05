module.exports = async () => {
    try {
      const {
        exec: _0x5414bd
      } = require("child_process");
      function _0x4e26bb(_0x33de0c) {
        return new Promise(function (_0x3487d7, _0x54c35f) {
          _0x5414bd(_0x33de0c, (_0x1a9d3b, _0x5b1af6, _0xf356) => {
            if (_0x1a9d3b) {
              _0x54c35f(_0x1a9d3b);
              return;
            }
            _0x3487d7(_0x5b1af6.trim());
          });
        });
      }
      ;
      var _0x44593b = await _0x4e26bb("git config --get remote.origin.url");
      if (!_0x44593b.includes(Buffer.from("c291cmF2a2wxMS9yYWdhbm9yay1tZA==", "base64").toString("ascii"))) {
        throw new Error("MODIFIED BOT " + _0x44593b + " DETECTED. ONLY USE THE ORIGINAL VERSION FROM HERE: https://github.com/souravkl11/raganork-md");
        process.exit(0x0);
      }
      return true;
    } catch (_0x571a72) {
      throw "Breaking off because of invalid bot installation method";
    }
  };