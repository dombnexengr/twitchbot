exports.run = (client, message, args, user, channel, self) => {
    client.discord().then(function(data) {
        client.say(channel, `@${user.username}, Our Discord is https://discord.gg/mM7cUja`)
    })
}

