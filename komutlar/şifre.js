const Discord = require('discord.js');
const generator = require('generate-password')



exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('Bir Uzunluk Belirt. **Doğru Kullanım**: +şifre <uzunluk>')

    

    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(password);


};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'şifre', //adını belirledik (kullanmak için gereken komut)
  description: 'Rastgele Şifre Oluşturur', //açıklaması
  usage: 'şifre <uzunluk>' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz