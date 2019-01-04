const Discord = require('discord.js');

const cevaplar = [
    "Anlatmaya Gerek Yok! Görüyorsunuz. 5mm **Ɛ>**",
    "Eh İşte 10cm **Ɛ==========>**",
    "B A M Y A L A N D I N I Z 1cm **Ɛ=>**",
    "Oha AMK Bu Ne Böyle! 25cm **Ɛ=========================>**",
    "Sanırım O Bamyaya Biraz Süt İçirmen Lazım 5cm **Ɛ=====>**",
    "Tam Tutturmuşsun AMK 31cm **Ɛ==============================>**",
    "Ne Denebilirki 20cm **Ɛ=====================>**",
    "Kardeşim Sadece Şunu Merak Ediyorum. Nasıl Sığdırdın Sen Bunu O Pantolona AMK! 50m **Ɛ==================================================>**"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    message.channel.send(cevap)
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'kaçcm', 
  description: '`Senin mal kaç cm?',
  usage: 'kaçcm'
};