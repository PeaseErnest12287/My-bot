const {
    upload,
    skbuffer
  } = require("raganork-bot");
  const {
    delay
  } = require("@whiskeysockets/baileys");
  const verifyRaganork = require("./strict");
  const axios = require("axios");
  async function edit(_0x300ad0, _0x284866, _0x3273fe = '', _0x1b5091 = '', _0x4c135c = '', _0x2408eb = '') {
    let {
      link: _0x4e6999
    } = await upload(_0x300ad0);
    return "https://raganork-api.onrender.com/api/image_editor?apikey=ciliary&style=" + _0x284866 + "&url=" + _0x4e6999;
  }
  async function removeBgv2(_0x5b9077) {
    await verifyRaganork();
    const _0x324c25 = Buffer.from(_0x5b9077).toString("base64");
    const {
      data: _0x2a1a2b
    } = await axios.post("https://backend.zyro.com/v1/ai/remove-background", {
      'image': _0x324c25
    });
    const _0x53e361 = Buffer.from(_0x2a1a2b.result.replace(/^data:image\/\w+;base64,/, ''), "base64");
    return _0x53e361;
  }
  async function imageUpscaler(_0x4e29a4) {
    await verifyRaganork();
    const _0x2b1f87 = Buffer.from(_0x4e29a4).toString("base64");
    const {
      data: _0x2186be
    } = await axios.post("https://backend.zyro.com/v1/ai/upscale-image", {
      'image': _0x2b1f87
    });
    const _0x3c2c62 = Buffer.from(_0x2186be.upscaled.replace(/^data:image\/\w+;base64,/, ''), "base64");
    return _0x3c2c62;
  }
  async function imageUpscalerV2(_0x155e5c) {
    await verifyRaganork();
    try {
      let {
        link: _0x13ea48
      } = await upload(_0x155e5c);
      let {
        data: _0x354077
      } = (await axios("https://restapi.cutout.pro/webMatting/photoEnhancer/submitTaskByUrl?imageUrl=" + _0x13ea48)).data;
      await delay(0x7d0);
      let _0x5c8aed = (await axios("https://restapi.cutout.pro/webMatting/photoEnhancer/getTaskInfo?id=" + _0x354077)).data;
      console.log(_0x5c8aed);
      return await skbuffer(_0x5c8aed.data.bgRemovedPreview);
    } catch (_0x52dea2) {
      return false;
    }
  }
  module.exports = {
    'edit': edit,
    'removeBgv2': removeBgv2,
    'imageUpscaler': imageUpscaler,
    'imageUpscalerV2': imageUpscalerV2
  };