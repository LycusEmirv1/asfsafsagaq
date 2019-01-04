const hastebin = require('hastebin-gen');
const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
  hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)

      .setURL(hastLink)
      .addField('Link: ', `${hastLink}`)
       message.channel.send({embed: hastEmb})
  }).catch(console.error);  
}

exports.conf = {
    enabled: true, //komutut açtık
    guildOnly: false, //sadece servere özel yapmadık
    aliases: ['hbin'], //farklı çağrılar ekledik
    permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
  };
  
  exports.help = {
    name: 'hastebin', //adını belirledik (kullanmak için gereken komut)
    description: 'Yazdığınız şeyi hastebine aktarır', //açıklaması
    usage: 'hastebin' //komutun kullanım şekli (mesela hava <bölge>)
  };