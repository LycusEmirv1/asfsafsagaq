const superagent = require('superagent')
const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("Woof :dog2:")
    .setImage(body.message)
    message.channel.send({embed})
    

}

exports.conf = {
    enabled: true, //komutut açtık
    guildOnly: false, //sadece servere özel yapmadık
    aliases: [''], //farklı çağrılar ekledik
    permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
  };
  
  exports.help = {
    name: 'köpek', //adını belirledik (kullanmak için gereken komut)
    description: 'Köpek', //açıklaması
    usage: 'köpek' //komutun kullanım şekli (mesela hava <bölge>)
  };