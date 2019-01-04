const Discord = require('discord.js');





exports.run = function(client, message, args) {
    
    var öneri = args.slice(0).join(' ');
    var guildID = "454776311907483660"
    var channelID = "506475677894180885"

    if (!öneri) {
        return message.reply("Bir Mesaj Belirtin! Doğru Kullanım: **+öneri <mesaj>**")
    } else {

        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .addField("Eylem:", "öneri")
            .addField("Kullanıcı:", message.author.tag)
            .addField("ID", message.author.id)
            .addField("Öneri", öneri)

        client.guilds.get(guildID).channels.get(channelID).send(embed)
        message.channel.send("Öneriniz Alınmıştır! Teşekkür Ederiz.")
    };

};



exports.conf = {

  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['ping','p'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)

};



exports.help = {

  name: 'öneri', //adını belirledik (kullanmak için gereken komut)
  description: 'Önerilirenizi Botun Yapımcısına İletir!', //açıklaması
  usage: 'öneri' //komutun kullanım şekli (mesela hava <bölge>)

};



//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz

//bu ise bizim komut taslağımız

//bunun üzerinden gideceğiz