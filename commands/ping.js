exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}

module.exports.help = {
    name: "ping",
    description: "return pong",
    usage: "!ping"
}