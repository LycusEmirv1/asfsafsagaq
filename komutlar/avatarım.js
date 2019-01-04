const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setImage(message.author.avatarURL)
 
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['avatar'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'avatarım', //adını belirledik (kullanmak için gereken komut)
  description: 'Avatarınızı Gösterir', //açıklaması
  usage: 'avatarım' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz