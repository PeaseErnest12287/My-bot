/* Copyright (C) 2022 Sourav KL11.
Licensed under the GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/

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
        return await msg.client.sendMessage(msg.jid, {
            text: need
        }, { quoted: msg.data });
    }

    const getid = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|s|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/;
    const url = getid.exec(q);

    if (url != null) {
        try {
            var res = await downloadGram(url[0]);
        } catch {
            return await msg.sendReply("_Something went wrong, Please try again!_");
        }

        if (res === false) {
            return await msg.sendReply(fail);
        }

        let quoted = msg.reply_message ? msg.quoted : msg.data;
        for (var i in res) {
            let media = await skbuffer(res[i]);
            let { mime } = await fromBuffer(media);
            await msg.client.sendMessage(msg.jid, { [mime.includes("video") ? 'video' : 'image']: media }, { quoted });
        }
    }
}));

Module({
    pattern: 'fb ?(.*)',
    fromMe: sourav,
    desc: 'Facebook video downloader',
    usage: 'fb link or reply to a link',
    use: 'download'
}, (async (msg, query) => {
    BypassCertificateCheck();

    let q = query[1] || msg.reply_message?.text;

    if (!q) {
        return await msg.sendReply("*Need Facebook link*");
    }

    if (/\bhttps?:\/\/\S+/gi.test(q)) {
        q = q.match(/\bhttps?:\/\/\S+/gi)[0];
    }

    try {
        var res = await fb(q);
    } catch (error) {
        return await msg.sendReply("_Something went wrong, Please try again!_");
    }

    let sent_msg = await msg.sendReply('_*Hold on, downloading will take some time..*_');
    const end = new Date().getTime();
    await msg.sendReply({ url: res.url }, "video");
    return await msg.edit('*_Download complete!_*', msg.jid, sent_msg.key);
}));

Module({
    pattern: 'ig ?(.*)',
    fromMe: sourav,
    desc: 'Gets account info from Instagram',
    usage: 'ig username',
    use: 'search'
}, (async (msg, match) => {
    BypassCertificateCheck();

    // Ensure the user provides a username
    let username = match[1]?.replace(/^@/, '');  // Remove the '@' if it exists
    if (!username) {
        return await msg.sendReply(need_acc);
    }

    try {
        var res = await igStalk(encodeURIComponent(username));  // Fetch the data using the cleaned username
    } catch {
        return await msg.sendReply("_Server busy or error occurred!_");
    }

    // Send Instagram data to the user
    await msg.client.sendMessage(msg.jid, {
        image: { url: res.profile_pic },
        caption: '_*Name:*_ ' + `${res.full_name}` + '\n_*Followers:*_ ' + `${res.followers}` + '\n_*Following:*_ ' + res.following + '\n_*Bio:*_ ' + `${res.bio}` + '\n_*Private account:*_ ' + `${res.is_private ? "Yes" : "No"}` + '\n_*Posts:*_ ' + `${res.posts}`
    }, {
        quoted: msg.data
    });
}));

Module({
    pattern: 'story ?(.*)',
    fromMe: sourav,
    desc: 'Instagram stories downloader',
    usage: '.story username or link',
    use: 'download'
}, (async (msg, query) => {
    BypassCertificateCheck();

    let user = query[1] || msg.reply_message?.text;  // Use text from reply if available

    if (user.includes("/reel/") || user.includes("/tv/") || user.includes("/p/")) {
        return await msg.sendReply("*_Use .story command with a username only!*");
    }

    if (!user) {
        return await msg.sendReply(need_acc_s);
    }

    user = !/\bhttps?:\/\/\S+/gi.test(user) ? `https://instagram.com/stories/${user}/` : user.match(/\bhttps?:\/\/\S+/gi)[0];

    try {
        var res = await downloadGram(user);
    } catch {
        return await msg.sendReply("*_Sorry, server error_*");
    }

    if (!res) {
        return await msg.sendReply("*_User has no stories!_*");
    }

    if (res.length < 3) {
        for (var i in res) {
            await msg.sendReply({ url: res[i] }, res[i].includes("mp4") ? "video" : "image");
        }
    } else {
        let StoryData = [];
        for (var i in res) {
            StoryData.push({
                title: "Story " + Math.floor(parseInt(i) + 1),
                description: res[i].includes("mp4") ? "Video" : "Photo",
                rowId: `${hnd}upload ${res[i]}`
            });
        }

        const sections = [{
            title: "Click and send to download.",
            rows: StoryData
        }];
        const listMessage = {
            text: " ",
            footer: "_Total stories: " + res.length + "_",
            title: "_Download your stories_",
            buttonText: "View all",
            sections
        };

        await msg.client.sendMessage(msg.jid, listMessage);
    }
}));

Module({
    pattern: 'tiktok ?(.*)',
    fromMe: sourav,
    desc: 'TikTok downloader',
    usage: '.tiktok reply or link',
    use: 'download'
}, (async (msg, query) => {
    let link = query[1] || msg.reply_message?.text;

    if (!link) {
        return await msg.sendReply("_Need a TikTok URL_");
    }

    link = link.match(/\bhttps?:\/\/\S+/gi)[0];  // Ensure URL format

    let result;
    try {
        result = (await tiktok(link)).result;
        await msg.sendReply({ url: result }, 'video');
    } catch (error) {
        await msg.sendReply("```" + `Download failed\n\nResponse: ${result}` + "```");
    }
}));
