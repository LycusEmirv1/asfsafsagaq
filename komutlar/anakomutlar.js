const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
var owner = "262307433932652544";

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0xCC0000)
  .addField("**Ana Komutlar**", "+yardım = BOT Komutlarını Atar. \n+bilgi = BOT Kendisi Hakkında Bilgi Verir. \n+ping = Botun Gecikme Süresini Söyler. \n+davet = BOT Davet Linkini Atar. \n+temizle = İstenen Sayıdaki Mesajları Siler. \n+öneri Önerilerinizi İletir. \n+botdurum = Botun Durumu Hakkında Bilgi Verir. \n+havadurumu = Havadurumunu Söyler. \n+rolinfo = Rol Hakkında bilgi verir. \n+döviz = Anlık Döviz Kurları")
   .addField("**Yapımcı**", "Mehmet#4698")
  
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
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Tüm Ana komutları gösterir.',
  usage: 'anakomutlar'
};