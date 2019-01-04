const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "sanane amk",
    "boşver",
    "daha sonra",
    "imkansız amk",
    "yapacağınız işi sikiyim",
    "enes abi seni siksin"
];


exports.run = function(client, message, args) {
    var soru = args.join(' ')
    
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    
    if(!soru) return message.reply('Bir Soru Belirt. **Doğru Kullanım**: +8ball <soru>')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: '8ball', //adını belirledik (kullanmak için gereken komut)
  description: 'Sihirli 8ball Sorularınızı Cevaplar', //açıklaması
  usage: '8ball' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz