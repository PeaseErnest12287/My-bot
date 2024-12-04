const { isAdmin, isFake, antifake, pdm, parseWelcome, antipromote, antidemote } = require('./misc/misc');
const { setAutoMute, setAutounMute, delAutounMute, delAutoMute, stickCmd, getSticks, unstickCmd } = require('./misc/scheduler');
const greeting = require('./sql/greeting');
const { Module } = require('../main');
const { ALLOWED, HANDLERS, ADMIN_ACCESS, SUDO } = require('../config');

var handler = HANDLERS !== 'false' ? HANDLERS.split("")[0] : "";

function tConvert(time) {
  time = time.toString().match(/^([01]\d|2[0-3])( )([0-5]\d)(:[0-5]\d)?$/) || [time];
  if (time.length > 1) {
    time = time.slice(1);
    time[5] = +time[0] < 12 ? ' AM' : ' PM';
    time[0] = +time[0] % 12 || 12;
  }
  return time.join('').replace(" ", ":");
}

// Utility function to extract data from a quoted message
async function extractData(message) {
  return message.quoted?.message?.extendedTextMessage?.text || '';
}

// Automute functionality
Module({
  pattern: "automute ?(.*)",
  fromMe: false,
  warn: "This works according to IST (Indian standard time)",
  use: 'group'
}, async (message, match) => {
  let adminAccesValidated = ADMIN_ACCESS ? await isAdmin(message, message.sender) : false;
  if (message.fromOwner || adminAccesValidated) {
    match = match[1]?.toLowerCase();
    if (!match) return await message.sendReply("*Wrong format!*\n*.automute 22 00 (For 10 PM)*");
    if (match.includes("am") || match.includes("pm")) return await message.sendReply("_Time must be in HH MM format (24 hour)_");
    if (match === "off") {
      await delAutoMute(message.jid);
      return await message.sendReply("*Automute has been disabled in this group ❗*");
    }
    var mregex = /[0-2][0-9] [0-5][0-9]/;
    if (!mregex.test(match.match(/(\d+)/g)?.join(' '))) return await message.sendReply("*_Wrong format!_\n_.automute 22 00 (For 10 PM)_");
    var admin = await isAdmin(message);
    if (!admin) return await message.sendReply("_I'm not an admin_");
    await setAutoMute(message.jid, match.match(/(\d+)/g)?.join(' '));
    await message.sendReply(`*_Group will auto mute at ${tConvert(match.match(/(\d+)/g).join(' '))}, rebooting.._*`);
    process.exit(0);
  }
});

// Function to handle stick commands
Module({
  pattern: "stickcmd ?(.*)",
  fromMe: true,
  desc: "Sticks commands on stickers. And if that sticker is sent, it will work as a command!",
  usage: ".stickcmd kick",
  warn: "Only works on stickers",
  use: 'utility'
}, async (message, match) => {
  if (!match[1] || !message.reply_message || !message.reply_message.sticker) return await message.sendReply("_Reply to a sticker_\n_Ex: *.stickcmd kick*_");
  try {
    await stickCmd(await extractData(message), match[1]);
  } catch {
    return await message.sendReply("_Failed!_");
  }
  await message.client.sendMessage(message.jid, { text: `_Sticked command ${match[1]} to this sticker! Reconnecting..._` }, { quoted: message.quoted });
});
