const fs = require("fs");

module.exports.run = async(bot, message, args, con) => {
    fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }

        var namelist = "";
        var desclist = "";
        var usage = "";

        let result = jsfiles.forEach((f, i) => {
          let props = require(`./${f}`);
          namelist = "command name: " + props.help.name;
          desclist = "command description: " + props.help.description;
          usage = "command usage: " + props.help.usage;

          message.channel.send(`**${namelist}** \n${desclist} \n${usage}`);
        });
    });
}

module.exports.help = {
    name: "help",
    description: "show all commands",
    usage: "!help"
}