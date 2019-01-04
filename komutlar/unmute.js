const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Admin izniniz yok yada hatalı komut")
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Kullanıcı Bulunamadı")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "Muted")) return message.channel.send('There are\'t in muted.')
    if (!reason) return message.channel.send('Muteyi Kaldırmak için sebep gir')
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
      message.reply("Usage: +unmute <kullanıcı> <rsebep>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "mod-log");
  if (!muteChannel) return message.channel.send('**Lütfen ‘mod-log’ Kanalı Oluşturun**')

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .setColor('#00FF80')
      		  .setFooter("Bot Version 1.1.0", "https://cdn.discordapp.com/avatars/453870812311584779/72734a7ab1876a3d63e565e70f378fc2.png?size=2048")
        modlog.send(muteembed)
  
  
}


exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [''], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'unmute', //adını belirledik (kullanmak için gereken komut)
  description: 'İstediğiniz kişiyi susturur', //açıklaması
  usage: 'unmute' //komutun kullanım şekli (mesela hava <bölge>)
};