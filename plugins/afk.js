const { Module } = require('../main');
const Lang = require('./misc/lang').getString('afk');
const config = require('../config');

let AFK_DB = {
    isAfk: false,
    reason: false,
    lastseen: 0
};

const currentTimestamp = Math.round((new Date()).getTime() / 1000);

function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);
    return `${h > 0 ? h + " " + Lang.HOUR + ", " : ""}${m > 0 ? m + " " + Lang.MINUTE + ", " : ""}${s > 0 ? s + " " + Lang.SECOND : ""}`;
}

function sendAfkReply(message) {
    const replyText = Lang.AFK_TEXT + '\n' + 
        (AFK_DB.reason ? '\n*' + Lang.REASON + ':* ```' + AFK_DB.reason + '```' : '') + 
        (AFK_DB.lastseen ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(currentTimestamp - AFK_DB.lastseen) + ' ago```' : '');
    return message.sendReply(replyText);
}

Module({ on: 'text', fromMe: false }, async (message) => {
    if (AFK_DB.isAfk && !message.fromMe) {
        // Check if it's a group message where the bot or admin is mentioned
        if ((message.isGroup && message.mention?.includes(message.myjid + "@s.whatsapp.net")) || 
            (message.isGroup && message.mention?.includes(config.SUDO?.split(",")[0] + "@s.whatsapp.net")) ||
            // Or it's a personal message
            (!message.isGroup && !message.fromMe)) {
            await sendAfkReply(message);
        }
    }
});

Module({ on: 'text', fromMe: true }, async (message) => {
    if (AFK_DB.isAfk && !message.id.startsWith('3EB0') && (message.fromMe || message.sender.split("@")[0] === config.SUDO?.split(",")[0])) {
        const buttons = [{
            buttonId: 'afk disable_button',
            buttonText: { displayText: 'Yes, disable afk' },
            type: 1
        }];
        const buttonMessage = {
            text: "*Looks like you are back online. Use '.afk disable' to disable afk*",
            footer: 'AFK manager',
            buttons: buttons
        };
        await message.sendReply(buttonMessage.text);
    }
});

Module({ pattern: 'afk ?(.*)', fromMe: true, desc: Lang.AFK_DESC }, async (message, match) => {
    if (match[1] === "disable" && (message.fromMe || message.sender.split("@")[0] === config.SUDO?.split(",")[0])) {
        // Disable AFK status
        AFK_DB.lastseen = 0;
        AFK_DB.reason = false;
        AFK_DB.isAfk = false;
        return await message.sendReply(Lang.IM_NOT_AFK);
    } else if (!AFK_DB.isAfk) {
        // Set AFK status with an optional reason
        AFK_DB.lastseen = currentTimestamp;
        AFK_DB.reason = match[1] || false;
        AFK_DB.isAfk = true;
        await message.send(Lang.IM_AFK + (AFK_DB.reason ? ('\n*' + Lang.REASON + ':* ```' + AFK_DB.reason + '```') : ''));
    }
});
