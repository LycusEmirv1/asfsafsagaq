const Discord = require('discord.js');
var Jimp = require("jimp");
exports.run = async (bot, message, args) => {


    if (message.channel.type === "dm") return;
    let meow = message.content.split(" ").slice(1);
    let args1 = meow.join(' ');
    let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
    if (!args1) {
        return message.reply(':x: **İllegal Birşey Girin (olmasada olur)**');
    }
    if (meow.length > 1) {
        return message.reply(':x: **Max 1 Kelime**');
    }
    const emb = new Discord.RichEmbed();
    emb.setAuthor("Trump şimdi " + meow + " illegal!", "http://blog.adsy.me/wp-content/uploads/2016/11/angry-side-face-trump-transparent.png");
    emb.setImage(illegal);
    message.channel.send({
        embed: emb
    })
}

exports.conf = {
    enabled: true, //komutut açtık
    guildOnly: false, //sadece servere özel yapmadık
    aliases: [''], //farklı çağrılar ekledik
    permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
  };
  
  exports.help = {
    name: 'trump', //adını belirledik (kullanmak için gereken komut)
    description: 'Trump İlleagal Yapar', //açıklaması
    usage: 'trump' //komutun kullanım şekli (mesela hava <bölge>)
  };