const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    var channel = client.channels.find('name', 'sunucu-tanıt')
    const asdf = await client.channels.get(message.channel.id).createInvite()
    message.delete();
    const embed = new Discord.RichEmbed()
        .setTitle("» Sunucun Başarıyla Tanıtıldı | Sunucu Tanıtma")
        .setDescription("**Sunucun Tanıtıldı » **https://discord.gg/MwkaBHm**")
        .setFooter("Sunucu Tanıtıldı")
    message.channel.send(embed)
    const invite = new Discord.RichEmbed()
        .setAuthor("» Sunucun Başarıyla Tanıtıldı | Sunucu Tanıtma")
        .addField('**» Tanıtan: **', message.author.username + '#' + message.author.discriminator)
        .addField('**» Sunucu Adı: **', message.guild.name)
        .setDescription(asdf.url)
    channel.send(invite)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'sunucutanıt',
    description: 'Sunucuzu Tanıtır',
    usage: 'sunucutanıt'
};