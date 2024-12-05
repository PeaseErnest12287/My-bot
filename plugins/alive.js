const { FancyRandom, getListFromCommand, skbuffer } = require("raganork-bot");
const { Module, commands } = require('../main');
const { MODE, ALIVE, BOT_INFO } = require('../config');
const config = require('../config');
const { parseAlive } = require('./misc/misc');
const os = require('os');
const { spawnSync } = require('child_process');
const { lchown } = require("fs");

let w = MODE === 'public' ? false : true;

const requestQueue = []; // Queue for throttling requests
const maxRequestsPerSecond = 3; // Max number of requests per second
let lastRequestTime = Date.now();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function throttleRequest() {
    const now = Date.now();
    if (now - lastRequestTime < 1000 / maxRequestsPerSecond) {
        // Wait if the requests per second limit is exceeded
        const waitTime = 1000 / maxRequestsPerSecond - (now - lastRequestTime);
        await delay(waitTime);
    }
    lastRequestTime = Date.now();
}

Module({
    pattern: 'menu',
    fromMe: w,
    use: 'utility',
    desc: 'Is bot alive?'
}, (async (message, match) => {
    await throttleRequest(); // Apply throttle to avoid overloading the system

    var myid = message.client.user.id.split(":")[0];
    const stars = ['✦','✯','✯','✰','◬','✵'];
    const star = stars[Math.floor(Math.random() * stars.length)];
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    let use_ = commands.map(e => e.use);
    const others = (use) => { return use === '' ? 'others' : use; }
    let types = shuffleArray(use_.filter((item, index) => use_.indexOf(item) === index).map(others));
    var cmd_obj = {};

    for (var command of commands) {
        let type_det = types.includes(command.use) ? command.use : "others";
        if (!cmd_obj[type_det]?.length) cmd_obj[type_det] = [];
        let cmd_name = command.pattern?.toString().match(/(\W*)([A-Za-z1234567890 ]*)/)[2];
        if (cmd_name) cmd_obj[type_det].push(cmd_name);
    }

    let final = '';
    var i = 0;
    for (var n of types) {
        for (var x of cmd_obj[n]) {
            i = i + 1;
            var newn = n.charAt(0).toUpperCase() + n.replace(n.charAt(0), "");
            final += `${final.includes(newn) ? '' : '\n\n╭════〘 *_' + newn + "*_ 〙════⊷❍\n"}\n┃${star}│ _${i}. ${x.trim()}_${cmd_obj[n]?.indexOf(x) === (cmd_obj[n]?.length - 1) ? `\n┃${star}╰─────────────────❍\n╰══════════════════⊷❍` : ''}`;
        }
    }

    let cmdmenu = final.trim();
    var menu = `╭═══〘 ${BOT_INFO.split(";")[0]} 〙═══⊷❍
┃${star}╭──────────────
┃${star}│
┃${star}│ _*Owner*_ : ${BOT_INFO.split(";")[1]}
┃${star}│ _*User*_ : ${message.senderName.replace( /[\r\n]+/gm, "" )}
┃${star}│ _*Mode*_ : ${MODE}
┃${star}│ _*Server*_ : ${__dirname.startsWith('/skl') ? "Heroku" : "Private (VPS)"}
┃${star}│ _*Available RAM*_ : ${used} of ${total}
┃${star}│ _*Version*_ : ${config.VERSION}
┃${star}│
┃${star}│
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│  ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃${star}│   ${BOT_INFO.split(";")[0]}
┃${star}│ 
┃${star}╰───────────────
╰═════════════════⊷

${cmdmenu}`;

    try {
        var _img = await skbuffer(BOT_INFO.split(";")[3] || `https://picsum.photos/800/500`);
    } catch (error) {
        var _img = await skbuffer(`https://i.imgur.com/B2YWSLk.jpg`);
    }

    await message.client.sendMessage(message.jid, {
        image: _img,
        caption: FancyRandom(menu)
    });
}));

Module({
    pattern: 'alive',
    fromMe: w,
    desc: 'Is bot alive?'
}, async (message, match) => {
    await throttleRequest(); // Apply throttle to avoid overloading the system
    await parseAlive(message, ALIVE);
});

Module({
    pattern: 'alive ?(.*)',
    fromMe: true,
    dontAddCommandList: true
}, async (message, match) => {
    if (match[1]) {
        await require('./manage').setVar("ALIVE", match[1], message);
    }
});

Module({
    on: 'button',
    fromMe: w,
}, async (message, match) => {
    await throttleRequest(); // Apply throttle to avoid overloading the system
    var myid = message.client.user.id.split(":")[0];
    var { button } = message;
    if (button) {
        if (button.includes(myid) && button.startsWith("commands")) {
            return await message.sendReply(FancyRandom(await getListFromCommand(commands)));
        }
        if (button.includes(myid) && button.startsWith("ping")) {
            const start = new Date().getTime();
            await message.client.sendMessage(message.jid, { text: FancyRandom('Ping!') });
            const end = new Date().getTime();
            await message.sendReply(FancyRandom('Pong!\n ```' + (end - start) + '``` *ms*'));
        }
        if (button.includes(myid) && button.startsWith("support")) {
            return await message.sendReply(BOT_INFO.split(";")[4]);
        }
    }
});

Module({
    pattern: 'ping',
    fromMe: w,
    use: 'utility',
    desc: 'Measures ping'
}, async (message, match) => {
    await throttleRequest(); // Apply throttle to avoid overloading the system
    const start = new Date().getTime();
    let sent_msg = await message.sendReply('*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*');
    const end = new Date().getTime();
    await message.edit('*ʟᴀᴛᴇɴᴄʏ: ' + (end - start) + ' _ᴍs_*', message.jid, sent_msg.key);
});

Module({
    pattern: 'uptime',
    fromMe: w,
    use: 'utility',
    desc: 'Shows system (OS) /process uptime'
}, async (message, match) => {
    await throttleRequest(); // Apply throttle to avoid overloading the system
    var ut_sec = require("os").uptime();
    var ut_min = ut_sec / 60;
    var ut_hour = ut_min / 60;
    ut_sec = Math.floor(ut_sec);
    ut_min = Math.floor(ut_min);
    ut_hour = Math.floor(ut_hour);
    ut_hour = ut_hour % 60;
    ut_min = ut_min % 60;
    ut_sec = ut_sec % 60;
    var uptime_os = (`_System (OS) : ${ut_hour} Hour(s), ${ut_min} minute(s) and ${ut_sec} second(s)_`);
    var sec_num = parseInt(process.uptime(), 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var uptime_process = (`_Process : ${hours} Hour(s), ${minutes} minute(s) and ${seconds} second(s)_`);
    return await message.sendReply(`                 _*[ UPTIME ]*_\n\n *${uptime_os}*\n *${uptime_process}*`);
});
