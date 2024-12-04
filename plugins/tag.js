// main.js

const { Module } = require('../main');
const { getString } = require('./misc/lang');
const { readFileSync } = require('fs');
const { saveMessage } = require('./misc/saveMessage');
const Lang = getString('group');

// Tag all members or specific users
Module({
    pattern: 'tag ?(.*)', 
    use: 'group', 
    fromMe: true, 
    desc: "Tag all members or specific users"
}, (async (message, match) => {
    // Delete the original command message
    await message.delete();

    if (match[1] === "all" || !message.reply_message) return await message.sendReply("Please specify 'all' or reply to a message to tag users.");
    
    var target = message.jid;
    if (match[1] && /[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g.test(match[1])) 
        target = [...match[1].match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)][0];
    
    var group = await message.client.groupMetadata(target);
    var jids = [];
    
    if (match[1].includes('admin')) {
        var admins = group.participants.filter(v => v.admin !== null).map(x => x.id);
        admins.map(async (user) => {
            jids.push(user.replace('c.us', 's.whatsapp.net'));
        });   
    } else {
        group.participants.map(async (user) => {
            jids.push(user.id.replace('c.us', 's.whatsapp.net'));
        });
    }
    
    await message.forwardMessage(target, message.quoted, {detectLinks: true, contextInfo: {mentionedJid: jids}});
    await message.sendReply("Tagging complete!"); // Custom reply after tagging
}));

// Forward message to specified users
Module({
    pattern: 'forward ?(.*)', 
    use: 'utility', 
    fromMe: true, 
    desc: "Forwards a message to specified users"
}, (async (message, match) => {
    // Delete the original command message
    await message.delete();

    if (!message.reply_message) return await message.sendReply("Please reply to a message to forward it.");
    
    let Jids = [...match[1]?.match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)] || [message.jid];
    for (let jid of Jids) {
        await message.forwardMessage(jid, message.quoted, {detectLinks: true});
    }
    await message.sendReply("Message forwarded successfully!"); // Confirmation message
}));

// Send message to specified users
Module({
    pattern: 'send ?(.*)', 
    use: 'utility', 
    fromMe: true, 
    desc: "Sends a message to specified users"
}, (async (message, match) => {
    // Delete the original command message
    await message.delete();

    if (!message.reply_message) return await message.sendReply("Please reply to a message to send it.");
    
    if (!match[1]) match[1] = message.jid;
    let Jids = [...match[1]?.match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)] || [message.jid];
    
    for (let jid of Jids) {
        await message.forwardMessage(jid, message.quoted, {contextInfo: {isForwarded: false}, detectLinks: true});
        await new Promise((r) => setTimeout(r, 5000)); // Delay of 5 seconds
    }
    await message.sendReply("Messages sent successfully!"); // Final message after sending
}));

// Show bot information
Module({
    pattern: 'info ?(me)?', 
    use: 'utility', 
    fromMe: true, 
    desc: "Display bot information"
}, (async (message, match) => {
    // Delete the original command message
    await message.delete();

    if (match[1] === "me") {
        await message.sendReply("Current status: Healthy");
    } else {
        const infoMessage = `
*Bot Name:* Pease Ernest
*Creator:* Amani Honest (Pease Ernest)
*Version:* I am the first one
*Status:* Healthy
*Warning:* At times due to deployment issues I might die or sleep. Just contact the creator to revive me.
*Subscription:* I am free to use.
`;
        await message.sendReply(infoMessage);
    }
}));

// Display help message
Module({
    pattern: 'help', 
    use: 'utility', 
    fromMe: true, 
    desc: "Displays a list of available commands"
}, (async (message) => {
    // Delete the original command message
    await message.delete();

    const helpMessage = `
*Available Commands:*
1. .tag [all/admin] - Tag users in the group.
2. .forward [jid] - Forward a message to specified users.
3. .send [jid] - Send a message to specified users.
4. .autoStatusView - Toggle auto status view.
5. .autoReadMessages - Toggle auto read messages.
6. .commandSettings - Show current command settings.
7. .info - Display bot information.
8. .info me - Show current status of the bot.
9. .help - Display this help message.
`;
    await message.sendReply(helpMessage);
}));

// Settings for welcome and wait messages
let settings = {
    welcomeMessage: "Welcome to the group!",
    waitMessage: "Please wait while we process your request."
};

// Set configuration options
Module({
    pattern: 'set ?(.*)', 
    use: 'utility', 
    fromMe: true, 
    desc: "Set configuration options like welcome and wait messages"
}, (async (message, match) => {
    // Delete the original command message
    await message.delete();

    if (!match[1]) {
        return await message.sendReply("Please specify what you want to set. Options: `welcome` or `wait` followed by your message.");
    }

    const [option, ...messageParts] = match[1].split(" ");
    const newMessage = messageParts.join(" ");

    if (option === "welcome") {
        settings.welcomeMessage = newMessage || settings.welcomeMessage;
        await message.sendReply(`Welcome message has been set to: "${settings.welcomeMessage}"`);
    } else if (option === "wait") {
        settings.waitMessage = newMessage || settings.waitMessage;
        await message.sendReply(`Wait message has been set to: "${settings.waitMessage}"`);
    } else {
        await message.sendReply("Invalid option. Please use `welcome` or `wait`.");
    }
}));

// Auto-reply to specific greetings
const greetings = ["hi", "hello", "ssup", "yoh", "vipi"];
Module({
    pattern: '.*', 
    fromMe: true
}, (async (message) => {
    const text = message.body.toLowerCase();
    if (greetings.some(greeting => text.includes(greeting))) {
        await message.sendReply("Please Ernest here");
    }
}));
