const queue = []; // Queue to store pending requests
let isProcessing = false; // To track if the bot is currently processing a request

// Function to handle the request processing
async function processQueue() {
    if (isProcessing || queue.length === 0) return;  // If already processing or no requests in queue, return

    isProcessing = true;  // Mark as processing
    const { m, match, effect } = queue.shift();  // Get the next request from the queue

    try {
        if (!m.reply_message.image) {
            await m.sendMessage("_Reply to an image!_");
            return;
        }

        let q = await m.reply_message.download();
        let res = await edit(q, effect);  // Apply the effect
        await m.sendReply({ url: res }, "image");

        // Add a small delay before processing the next request
        await delay(2000);  // Wait 2 seconds before processing the next one

    } catch (error) {
        console.log('Error processing image:', error);
        await m.sendMessage('An error occurred while processing the image. Please try again.');
    } finally {
        isProcessing = false;  // Mark as done
        processQueue();  // Process the next request in the queue
    }
}

// Delay function for introducing lapse time
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Add the user request to the queue
function enqueueRequest(m, effect) {
    queue.push({ m, effect });
    processQueue();  // Start processing the queue if not already doing so
}

// Module definitions for all the commands
Module({ pattern: 'wanted ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a wanted effect' }, (async (m, match) => {
    enqueueRequest(m, 'wanted');
}));

Module({ pattern: 'mission failed ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a mission failed effect' }, (async (m, match) => {
    enqueueRequest(m, 'missionfailed');
}));

Module({ pattern: 'delete ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a delete file effect' }, (async (m, match) => {
    enqueueRequest(m, 'delete');
}));

Module({ pattern: 'respect ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a respect effect' }, (async (m, match) => {
    enqueueRequest(m, 'respect');
}));

Module({ pattern: 'wasted ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a wasted effect' }, (async (m, match) => {
    enqueueRequest(m, 'wasted');
}));

Module({ pattern: 'blur ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a blur effect' }, (async (m, match) => {
    if (!match[1]) return await m.sendMessage("Need any value (1 - 100)\neg: .blur 10");
    enqueueRequest(m, 'blur');
}));

Module({ pattern: 'draw ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a drawing effect' }, (async (m, match) => {
    enqueueRequest(m, 'draw');
}));

Module({ pattern: 'sketch ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a sketch effect' }, (async (m, match) => {
    enqueueRequest(m, 'sketch');
}));

Module({ pattern: 'rip ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a rip effect' }, (async (m, match) => {
    enqueueRequest(m, 'rip');
}));

Module({ pattern: 'scary ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a scary effect' }, (async (m, match) => {
    enqueueRequest(m, 'scary');
}));

Module({ pattern: 'mission passed ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a mission passed effect' }, (async (m, match) => {
    enqueueRequest(m, 'missionpassed');
}));

Module({ pattern: 'reject ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a rejected effect' }, (async (m, match) => {
    enqueueRequest(m, 'rejected');
}));

Module({ pattern: 'jail ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a jail effect' }, (async (m, match) => {
    enqueueRequest(m, 'jail');
}));

Module({ pattern: 'contrast ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a contrast effect' }, (async (m, match) => {
    enqueueRequest(m, 'contrast');
}));

Module({ pattern: 'ytcomment ?(.*)', fromMe, use: "template edit", desc: 'Makes a youtube comment image with image,text and username' }, (async (m, text) => {
    if (!text[1]) return await m.sendMessage("Need any text");
    enqueueRequest(m, 'ytcomment');
}));

Module({ pattern: 'burn ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a burn effect' }, (async (m, match) => {
    enqueueRequest(m, 'burn');
}));

Module({ pattern: 'fire ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a fire effect' }, (async (m, match) => {
    enqueueRequest(m, 'fire');
}));

Module({ pattern: 'trash ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a trash effect' }, (async (m, match) => {
    enqueueRequest(m, 'trash');
}));

Module({ pattern: 'approve ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to an approved effect' }, (async (m, match) => {
    enqueueRequest(m, 'approved');
}));

Module({ pattern: 'trigger ?(.*)', fromMe, use: "template edit", desc: 'Edits photo to a triggered effect' }, (async (m, match) => {
    enqueueRequest(m, 'triggered');
}));
