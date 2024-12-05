const {
    exec
  } = require("child_process");
  var request = require("request");
  var cheerio = require("cheerio");
  const {
    fromBuffer
  } = require("file-type");
  async function upload2(V) {
    function z(I) {
      return new Promise(function (m, t) {
        exec(I, (H, x, Q) => {
          if (H) {
            t(H);
            return;
          }
          m(x.trim());
        });
      });
    }
    ;
    var Y = await z("git config --get remote.origin.url");
    if (Y !== "https://github.com/souravkl11/raganork-md" && Y !== "https://github.com/souravkl11/raganork-md/") {
      return false;
    }
    return new Promise(async p => {
      const {
        ext: h
      } = (await fromBuffer(V)) || {};
      var j = request({
        'url': "https://top4top.io/index.php",
        'method': "POST",
        'headers': {
          'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          'accept-language': "en-US,en;q=0.9,id;q=0.8",
          'cache-control': "max-age=0",
          'content-type': "multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA",
          'User-Agent': "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+"
        }
      }, function (r, f, Z) {
        if (r) {
          return p({
            'result': "error"
          });
        }
        const e = cheerio.load(Z);
        let M = e("div.alert.alert-warning > ul > li > span").find('a').attr("href") || "gagal";
        if (M == "gagal") {
          p(false);
        }
        p(M);
      });
      let g = j.form();
      g.append("file_1_", V, {
        'filename': Math.floor(Math.random() * 0x2710) + '.' + ('' + h)
      });
      g.append("file_1_", '');
      g.append("submitr", "[ رفع الملفات ]");
    });
  }
  ;
  module.exports = upload2;