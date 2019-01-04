const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/yDm4Ry6XU77Py/giphy.gif",
          color: 0xD97634,
		  description: "**:peach: Türk bayrağı !**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'bayrak',
  description: 'Türk bayrağı Gôsterir',
  usage: 'bayrak'
};
