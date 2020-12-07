var tmi = require("tmi.js")
var channel = "dombnexen"

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
        password: "oauth:drcpv4njerm9wrv48j04590pztvel3" //client.login(process.env.password);//password secret for twitch
    },
    channels: [channel]
}

var client = new tmi.client(config)
client.connect();

client.on("connected", (address, port) => {
    client.action(channel, "The bot has connected!")
})

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "hi") {
        client.say(channel, "hey pal.")
    }
})
