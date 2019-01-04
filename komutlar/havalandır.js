const Discord = require('discord.js');

const cevaplar = [
    "https://media1.tenor.com/images/399447e3e21b6bd28ff021e95778171d/tenor.gif?itemid=4953836",
    "https://media1.tenor.com/images/467f08d10781cd4a811df173f61cd686/tenor.gif?itemid=5415991",
    "https://media1.tenor.com/images/91d68d9145a3b14c4c1a85b83478d370/tenor.gif?itemid=5650932",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir kişi belirtmeniz lazım. **Doğru Kullanım**: +havalandır <kişi>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'havalandır', 
  description: 'Türk Hava Yolları',
  usage: 'havalandır'
}