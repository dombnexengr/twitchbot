exports.run = (client, message, args, user, channelName, self) => {
    client.ping().then(function(data) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(channelName, `@${user.username}, your ping is ${ping}`)
    })
}
