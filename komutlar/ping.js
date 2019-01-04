const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Ping = " + client.ping + "ms!")
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['ping'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'ping', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir', //açıklaması
  usage: 'ping' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz