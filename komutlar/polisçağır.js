const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Polis Çağırdı Kaçın 🔫')
    .setImage(`http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif `)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['polis'],
  permLevel: 0
};

exports.help = {
  name: 'polisçağır',
  description: 'Polis Çağırır',
  usage: 'PolisÇağır',
};