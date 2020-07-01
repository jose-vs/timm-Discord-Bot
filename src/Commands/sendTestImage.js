module.exports = { 
    name: 'sendpics', 
    description: 'sends an image', 
    execute(message) { 
        message.channel.send("OK sending selfie...", {files: ["./images/Capture.PNG"]});
    }
}