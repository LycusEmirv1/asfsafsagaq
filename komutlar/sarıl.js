const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete();
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(' ❌ Sarılmak İstediğin birisini etiketlemelisin❌ ');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("RANDOM")
    .setDescription(message.author.username + ` ${mesaj}'a ` + ' Sarıldı. 🤗')
    .setImage("https://media.giphy.com/media/KL7xA3fLx7bna/giphy.gif");
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sarıl'],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'İstediğiniz Kişiye sarılırsınız.',
  usage: 'sarıl'
};