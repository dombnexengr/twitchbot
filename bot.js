var tmi = require("tmi.js")
var channelName = "dombnexen"
var prefix = "!"

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
    if (message == "hello") {
        client.say(channelName, "Hello Enigmas")
    }
    
    
    //command handler code
    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, channel, self) 
    } catch (err) {
        //client.say(channelName, "Command Doesnt Exist.")
        return;
    }
})
