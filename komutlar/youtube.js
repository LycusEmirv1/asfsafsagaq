const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Lütfen Bir Kelime Gir `)
        if(!link)return message.reply("Konsol hatası")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('Action:', 'Aranıyor...')

          .addField("Word:", `${args.slice(0).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter("Avatarın", message.author.avatarURL);
          
              message.channel.send(embed);
              message.author.send(`You have searched for ${link} in ${ message.guild.name}`);

        
    
}



exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [''], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'youtube', //adını belirledik (kullanmak için gereken komut)
  description: 'Youtube de sizin için arama yapar', //açıklaması
  usage: 'youtube' //komutun kullanım şekli (mesela hava <bölge>)
};