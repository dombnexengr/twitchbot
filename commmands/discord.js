exports.run = (client, message, args, user, channel, self) => {
    client.discord().then(function(data) {
        let discord = Math.floor(Math.round(data*1000))
        client.say(channel, `@${user.username}, Our Discord is https://discord.gg/mM7cUja`)
    })
}

