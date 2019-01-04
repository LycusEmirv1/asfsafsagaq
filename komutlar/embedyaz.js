const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "262307433932652544") return message.channel.send("| Bu komutu sadece yapımcım **kullanabilir!**"); //Buraya kendi ID nizi yazın. Başkalarının komutu kullanmasını istiyorsanız burayı silin.
  
  let embedmesaj = args.slice(0).join(' ');
if (embedmesaj.length < 1) return message.reply('| Yazmam için herhangi bir şey yazmalısın!');
  message.delete();
  
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#FFB900")
  .setDescription(embedmesaj)
  .setFooter("LiveAndroid Bot | Embed", client.user.avatarURL)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embed'],
  permLevel: 4
};

exports.help = {
  name: 'embed-yaz',
  description: 'İstediğiniz şeyi embedli şekilde bota yazdırır.',
  usage: 'embed-yaz [Yazdırmak istediğiniz şey]'
};
