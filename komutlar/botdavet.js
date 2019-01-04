const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .addField("BOT DAVET", " [LiveAndroid'i Davet Et](https://discordapp.com/oauth2/authorize?client_id=501089353620258831&scope=bot&permissions=2146958591)", )
  .addField("DESTEK SUNUCUSU", " [Destek Sunucusuna Katıl](https://discord.gg/QRgFGsy)", )
  .setImage("") 
  .setColor('RANDOM')

return message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};