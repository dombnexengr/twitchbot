exports.run = (client, message, args, user, channelName, self) => {
    client.discord().then(function(data) {
        let discord = Math.floor(Math.round(data*1000))
        client.say(channelName, `@${user.username}, Our Discord is https://discord.gg/mM7cUja`)
    })
}

