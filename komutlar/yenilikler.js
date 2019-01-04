const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
var owner = "262307433932652544";

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor(0xCC0000)
  .addField("**Yenilikler:**","+translate Güncellendi! \n+sigara Güncellendi! \n+ördek Eklendi! \n+zekam Eklendi! \n+tersyaz Eklendi! \n+espri Eklendi! \n+kasaaç Eklendi! \n**Tarih** = 21.11.2018 ")
  
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Tüm yenilikleri  gösterir.',
  usage: 'yenilikler'
};