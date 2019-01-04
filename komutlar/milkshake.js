const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Çilekli Milkshake**")
        .setImage("https://www.google.com.tr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiVsLC32uzdAhULmrQKHcVvB3cQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Ftr%2Fvekt%25C3%25B6r%2Fkremal%25C4%25B1-%25C3%25A7ilekli-milkshake-bir-cam-pipet-ile-i%25C3%25A7-%25C3%25A7izgi-film-simgesi-yal%25C4%25B1t%25C4%25B1lm%25C4%25B1%25C5%259F-nesne-gm903613332-249214961&psig=AOvVaw24BPKGEullraaYtkEetm6h&ust=1538737965230676")
        .setThumbnail("https://www.google.com.tr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiVsLC32uzdAhULmrQKHcVvB3cQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Ftr%2Fvekt%25C3%25B6r%2Fkremal%25C4%25B1-%25C3%25A7ilekli-milkshake-bir-cam-pipet-ile-i%25C3%25A7-%25C3%25A7izgi-film-simgesi-yal%25C4%25B1t%25C4%25B1lm%25C4%25B1%25C5%259F-nesne-gm903613332-249214961&psig=AOvVaw24BPKGEullraaYtkEetm6h&ust=1538737965230676")
        .setColor(0x00AE86)
        .addField("Lakabı", "The Milkshake!", true)
        .addField("Yetenekleri", `
        *Efsane bir görünüşü vardır!
   *Tadı çok güzeldir
   `, true)
   .addField("Tek bildiği cümle", `İç beniiii`, true)
   .addField("Kuzenleri", "Çikolatalı milkshake, Vanilyalı milkshake vb.")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'milkshake', 
  description: 'Milkshake hakkında bilgi verir',
  usage: 'milkshake'
};