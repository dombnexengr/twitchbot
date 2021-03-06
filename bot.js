var tmi = require("tmi.js")
var channelName = "dombnexen"

var config = {
    options: {
        debug: true
    }, 
    connection: {
        cluster: "aws", 
        reconnect: true
    },
    identity: {
        username: "dombnexen",
        // get yours at http://twitchapps.com/tmi
        password: "oauth:9x0elqi1bt56bz7kdf14wb3dv01aup" //client.login(process.env.password);//password secret for twitch
    },
    channels: [channelName]
}

var client = new tmi.client(config)
client.connect();

client.on("connected", (address, port) => {
    client.action(channelName, "The bot has connected!")
})


//chat responses

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!eginfo") {
        client.say(channelName, "Check Our Enigma website! http://enigmaprojectsgr.com/")
    }
})

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!discord") {
        client.say(channelName, "Join our Discord!!! https://discord.gg/mM7cUja")
    }
})
    
client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!lurk") {
        client.say(channelName, "Thank you for the lurk! Enjoy your stay!")
    }
})
