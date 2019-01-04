const Discord = require("discord.js");
var cowsay = require("cowsay");

exports.run = (client, msg, args) => {

    let text = args.join(" ");

    msg.channel.send("```" + cowsay.say({
        text : text
    }) + "```")
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cowsay',
  description: 'istediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};