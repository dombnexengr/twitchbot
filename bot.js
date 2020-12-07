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
    });

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!discord") {
        client.say(channelName, "Join our Discord!!! https://discord.gg/mM7cUja")
    });

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!uptime") {
        client.say(channelName, "My stream has been live for {uptime}.")
    });

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!followage") {
        client.say(channelName, "{touser.name} has been following {channel.name} for {touser.followage}.")
    });

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!timezone") {
        client.say(channelName, "It is now $(date) $(time)")
    });

client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!lurk") {
        client.say(channelName, "$(touser) thank you for the lurk! Enjoy your stay!")
    });
    
client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!donate") {
        client.say(channelName, "If you realy want to donate me, i appreciate it so much it will help me alot to continue do my best and evolve my stream, the donation link is https://streamlabs.com/dombnexen")
    });
    
client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!so") {
        client.say(channelName, "Check out {target.name} over at {target.url} , they are playing {target.game}!	")
});
