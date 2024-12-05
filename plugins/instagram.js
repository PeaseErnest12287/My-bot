const { Module } = require('../main');
const { Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const got = require("got");
const { pinSearch } = require("./misc/gis");
const { fromBuffer } = require('file-type');
const axios = require('axios');
const setting = require('../config');
const { getPost, getStalk, getStory, skbuffer } = require('raganork-bot');
const { downloadGram, pin, story, tiktok, igStalk, fb } = require('./misc/misc');
const Config = require('../config');
const s = require('../config');

var need = "*_Need Instagram link!*";
var downloading = "_*Downloading*_";
var need_acc = "*_Need an Instagram username!*";
var fail = "*_Download failed! Check your link and try again_*";
var need_acc_s = "_Need an Instagram username or link!_";

let sourav = setting.MODE == 'public' ? false : true;
let hnd = setting.HANDLERS !== 'false' ? setting.HANDLERS.split("")[0] : "";

function BypassCertificateCheck() {
    if (process.env.NODE_TLS_REJECT_UNAUTHORIZED != 0) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    }
}

async function processRequestWithDelay(msg, q) {
    let stepCount = 0;

    // Send initial fetching message
    let fetchingMsg = await msg.sendReply("*Fetching, please wait...*");

    // Start the timer for periodic updates
    const interval = setInterval(async () => {
        stepCount += 1;
        switch (stepCount) {
            case 1:
                await msg.sendReply("*Still fetching...*");
                break;
            case 2:
                await msg.sendReply("*Still fetching...*");
                break;
            case 3:
                await msg.sendReply("*Still fetching...*");
                break;
            case 4:
                await msg.sendReply("*Still fetching...*");
                break;
            case 5:
                await msg.sendReply("*Still fetching...*");
                break;
            case 6:
                await msg.sendReply("*Sorry, the process is taking too long. Please try again later.*");
                clearInterval(interval);
                await msg.sendReply("*The process was stopped. Tell the creator to update the system for faster performance.*");
                break;
            default:
                clearInterval(interval);
        }
    }, 10000); // Notify every 10 seconds

    // Now process the request
    try {
        let res = await downloadGram(q);
        if (!res) {
            clearInterval(interval);
            return await msg.sendReply(fail);
        }

        // Send the downloaded media
        for (let media of res) {
            let buffer = await skbuffer(media);
            let { mime } = await fromBuffer(buffer);
            await msg.client.sendMessage(msg.jid, { [mime.includes("video") ? 'video' : 'image']: buffer }, { quoted: msg.data });
        }
        clearInterval(interval);
        await msg.sendReply("*Download complete!*");
    } catch (error) {
        clearInterval(interval);
        await msg.sendReply("_Something went wrong, Please try again!_");
    }
}

Module({
    pattern: 'insta ?(.*)',
    fromMe: sourav,
    desc: 'Instagram post/reel/tv/highlights downloader',
    usage: 'insta link or reply to a link',
    use: 'download'
}, (async (msg, query) => {
    BypassCertificateCheck();

    let q = query[1] || msg.reply_message?.text;  // Use text from reply if available

    if (!q) {
        return await msg.sendReply(need);
    }

    if (q.includes("stories")) {
        return await msg.sendReply("*_Use .story command!*");
    }

    if (!q.includes('instagram.com')) {
        return await msg.client.sendMessage(msg.jid, { text: need }, { quoted: msg.data });
    }

    const getid = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|s|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/;
    const url = getid.exec(q);

    if (url != null) {
        // Process the request with delays
        await processRequestWithDelay(msg, url[0]);
    }
}));
