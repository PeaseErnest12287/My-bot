const simpleGit = require('simple-git');
const git = simpleGit();
const { Module } = require('../main');
const { update } = require('./misc/koyeb'); // Adjusted for Koyeb, no Heroku
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
const { skbuffer } = require('raganork-bot');

const ownerId = Config.OWNER_ID || 'your-owner-id-here'; // Replace with actual owner ID

Module({
    pattern: 'update ?(.*)',
    fromMe: true,
    desc: "Updates bot",
    use: 'owner'
}, async (message, match) => {
    if (match[1] == "start") return;

    await git.fetch(); // Fetch the latest changes from GitHub
    const commits = await git.log(['main' + '..origin/main']); // Check for commits ahead of local

    if (commits.total === 0) {
        return await message.sendReply("Bot is up to date!");
    }

    // Prepare the update log
    let changelog = "_Pending updates:_\n\n";
    commits.all.forEach((commit, index) => {
        changelog += `${index + 1}• *${commit.message}*\n`;
    });
    changelog += "\nUse `.update start` to apply the updates.";

    const Message = { text: changelog };
    await message.client.sendMessage(message.jid, Message);
});

Module({
    pattern: 'update start',
    fromMe: true,
    use: 'owner',
    dontAddCommandList: true,
    desc: "Updates bot"
}, async (message) => {
    await git.fetch(); // Fetch latest changes from GitHub
    const commits = await git.log(['main' + '..origin/main']);

    if (commits.total === 0) {
        return await message.client.sendMessage(message.jid, { text: "Bot is up to date." });
    }

    // Show confirmation to update
    const confirmMessage = "Do you want to update all the following changes?\n\n" + commits.all.map((commit, index) => {
        return `${index + 1}. ${commit.message}`;
    }).join('\n');
    
    // Confirm with the owner
    await message.client.sendMessage(message.jid, { text: confirmMessage });

    // Wait for confirmation (you can customize this to add a button or prompt for "yes" / "no")
    const isConfirmed = await getUserConfirmation(message); // Implement your confirmation logic

    if (!isConfirmed) {
        return await message.sendReply("Update canceled.");
    }

    // Start the update
    await message.sendReply("Starting update...");

    // Streamline Git operations for faster updates
    try {
        await git.reset('hard', ['origin/main']); // Reset local changes to match remote
        await git.pull(); // Pull latest changes

        // Optional: You can run build or install commands after the update (like npm install)
        // await execSync('npm install');

        await message.sendReply("Successfully updated!");
    } catch (error) {
        console.error("Update failed: ", error);
        await message.sendReply("Update failed! Please check the logs.");
    }
});

// Function to get user confirmation for updates (you can implement your own logic for this)
async function getUserConfirmation(message) {
    // Example confirmation logic
    // You could send a message asking for confirmation and then check the response
    const response = await message.client.waitForMessage(message.jid, 30 * 1000); // Wait for 30 seconds for response
    if (response && response.body.toLowerCase() === 'yes') {
        return true;
    }
    return false;
}
