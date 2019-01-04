const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
var owner = "262307433932652544";

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0xCC0000)
  .addField("**Yetkili Komutları**", `+reklamtara = Herkesin "oynuyor" kısmını kontrol eder. \n+unban = Banlanan Kişinin Banını Kaldırır. \n+hastebin = Yazdığınız Metni Hastebine Kopyalar. \n+translate = Yazdığınız Metni Çevirir. \n+gsustur = Kullanıcıyı Geçiçi Olarak susturur. \n+mute = Kullanıcıyı Muteler. \n+unmute = Kullanıcın mutesini kaldırır. \n+slowmode = Kanalı Slowmode Alır. \n+unban = Kullanıcının Banını Kaldırır. \n+ban = Kişiyi Banlar. \n+sayac = Yazdığınız kanalda sayaç ayarlar.`)
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
  name: 'yetkili',
  description: 'Tüm Yetkili komutları gösterir.',
  usage: 'yetkili'
};