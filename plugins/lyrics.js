const {
    Module
} = require('../main');
const { getJson } = require("./misc/misc");
const {MODE} = require('../config');

// Replace this with your actual API key
const API_KEY = 'j2ilv_J512Zx7URr01zFjW_VeE5IXGTvMHALdjVbYYKP-luqnuxwAoPrvSNYisaj';

let fromMe = MODE == 'public' ? false : true;

Module({
    pattern: 'lyrics ?(.*)',
    fromMe: fromMe,
    desc: 'Lyrics search & find',
    use: 'download'
}, (async (message, match) => {
    if (!match[1]) return await message.sendReply("_Need query!_");

    // Using API key in the request headers or URL
    let result = await getJson(`https://raganork.tk/api/lyrics?query=${encodeURIComponent(match[1])}&api_key=${API_KEY}`);

    if (!result.status) return await message.sendReply('_No results found!_');

    let ch = '```';
    return await message.sendReply(`${ch}Title: "${result.title}"\n\n${result.result}${ch}`);
}));
