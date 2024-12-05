const axios = require("axios");
async function ChatGPT(_0x4d612b, _0x55671a) {
  const _0x6c1825 = {
    'prompt': _0x4d612b,
    'key': _0x55671a
  };
  try {
    const _0x5ec781 = await axios.post("https://mediaget-gpt-server.herokuapp.com/api/v1/chats", _0x6c1825, {
      'headers': {
        'Content-Type': "application/json",
        'Authorization': "Bearer raganork_ml"
      }
    });
    if (_0x5ec781.data?.["text"] == "401") {
      return {
        'text': "_Invalid API Key!_"
      };
    }
    if (_0x5ec781.data?.["text"] == "429") {
      return {
        'text': "_Your OpenAI account's limit has been exceeded! Please update your key!_"
      };
    }
    if (_0x5ec781.data?.["text"]) {
      return _0x5ec781.data;
    }
  } catch (_0x479567) {
    return _0x479567.message;
  }
}
async function Davinci(_0x15f733) {
  const _0x4f42a9 = process.env.OPENAI_KEY;
  if (!_0x4f42a9) {
    return "_No OpenAI API key found. Get an API key:_\n\n_1. Create an account: https://platform.openai.com/signup/_\n\n_2. Then, open this url: https://platform.openai.com/account/api-keys and copy api key_\n\n_3. Add the key into OPENAI_KEY var using .setvar_\n\n_(Eg: .setvar OPENAI_KEY:yourkeyhere )_";
  }
  try {
    const _0x3244b2 = await axios("https://chatgpt-api-raganork.cyclic.app/get?text=" + encodeURIComponent(_0x15f733) + "&key=" + _0x4f42a9);
    return _0x3244b2?.["data"] || "No output found!";
  } catch (_0x1b8589) {
    return "_Your OpenAI account's limit has been exceeded! Please update your key!_";
  }
}
module.exports = {
  'ChatGPT': ChatGPT,
  'Davinci': Davinci
};