const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');//or your config.json file.

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? ("RANDOM") : (Durum == "offline" ? ("RANDOM") : (Durum == "idle" ? ("RANDOM") : (Durum == "dnd" ? ("RANDOM") : ("RANDOM")))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Ad:', message.author.username + '#' + message.author.discriminator)
      .addField('ID:', message.author.id)
      .addField('Durum:', durm)
      .addField('Şu An Oynadığı Oyun:', message.author.presence.game ? message.author.presence.game.name : 'Şu An Oyun Oynamıyor')
      .addField('BOT Mu?', message.author.bot ? '\n ✔️' : '❌')
      console.log("-bilgilerim Komutu " + message.author.username + " Tarafından Kullanıldı.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı', 'kullanıcı bilgim', 'kbilgim', 'bilgilerim'],
  permLevel: 0
};

exports.help = {
  name: 'bilgilerim',
  description: 'Komutu kullanan kişi hakkında bilgi verir.',
  usage: 'bilgilerim'
};