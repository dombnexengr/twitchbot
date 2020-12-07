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
    
client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "!donate") {
        client.say(channelName, "If you realy want to donate me, i appreciate it so much it will help me alot to continue do my best and evolve my stream, the donation link is https://streamlabs.com/dombnexen")
    }
})

//timer
  const TwitchJS = require('twitch-js')
  
    const client = new TwitchJS.client({
    channels: ['channelName'],
    identity: {
      username: 'dombnexen',
      password: 'auth:9x0elqi1bt56bz7kdf14wb3dv01aup'
    }
  })
    
  let loopInterval
  client.on('chat', (channel, userstate, message, self) => {
    console.log(`Message "${message}" received from ${userstate['display-name']}`)
    if (self) return
    const msg = message.split(' ')
    if (msg[0].toLowerCase() === '$loop') {

      if (loopInterval) { // Check if set
        console.log('stop $loop')
        clearInterval(loopInterval) // delete Timer
        loopInterval = false
      } else {
        console.log('start $loop')
        loopInterval = setInterval(function () {
          client.say(channel, 'Test message') // client.say(channel, msg[1]) // ?
        }, 30000) // 60000ms = 60s = 1min
      }

    }
  })
