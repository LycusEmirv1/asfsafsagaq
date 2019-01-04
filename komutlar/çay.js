const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
const cays = [
    "https://66.media.tumblr.com/6330301cd2b8f1b22b744e9a3827d926/tumblr_o0wnt6Ut3F1s22rc8o1_500.gif",
    "https://78.media.tumblr.com/d588b97065f414d6f04a14c208f7552d/tumblr_mha7irQNqR1ro330po1_500.gif",
    "https://66.media.tumblr.com/4758e33a96ba02f55c7655eda690eba2/tumblr_ofnnw9g5tt1sjt6sco1_r1_500.gif",
    "https://data.whicdn.com/images/225583229/original.gif",
    "https://thumbs.gfycat.com/DizzyDazzlingIsabellinewheatear-size_restricted.gif",
    "https://media1.tenor.com/images/0be1778609d79edcbdc784ee5ce7f237/tenor.gif?itemid=11156755",
    "https://media.giphy.com/media/yRfAnAN8G5NqU/giphy.gif",
    "https://media3.giphy.com/media/8kp7UBefk6vq8/giphy.gif?cid=3640f6095beecca06852726b7377b7f2",
];
  
  var cay = cays[Math.floor(Math.random() * cays.length)];
  
    let adam = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('| Kime çay **ısmarlıcan?**')
      
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("RANDOM")
    .setDescription(message.author.username + ` ${adam} ` + 'a çay ısmarladı.')
    .setImage(cay)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karadenizçay'],
  permLevel: 0
};

exports.help = {
  name: 'çay',
  description: 'İstediğiniz Kişiye çay ısmarlarsınız.',
  usage: 'çay'
};