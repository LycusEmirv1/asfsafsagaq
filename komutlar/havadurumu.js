const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Bir Yer Gir!**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Saat Dilimi',`UTC${location.timezone}`, true)
          .addField('Derece Tipi',location.degreetype, true)
          .addField('🌡Sıcaklık',`${current.temperature} Derece`, true)
          .addField('🌆Hissedilen Sıcaklık', `${current.feelslike} Derece`, true)
          .addField('☁️Rüzgar',current.winddisplay, true)
          .addField('💨Rüzgar Hızı',current.windspeed)    
          .addField('💧Nem', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

      
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['havadurumu'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'hava-durumu',
  category: 'kullanıcı',
  description: 'İstediğiniz şehrin hava durumunu gösterir.',
  usage: 'hava-durumu'
};
