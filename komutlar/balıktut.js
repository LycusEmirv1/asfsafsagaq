const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Balık Tuttun Balığı Çekiyorsun..').then(message => {
   var baliklar = ['Sazan Tuttun! 🐟' ,'Köpek Balığı Tuttun İyi Para Eder Sat Sat :D' ,'Uskumru Tuttun! 🐟' ,'Mezgit Tuttun! Havyarıda Var hee ;) 🐟' ,'Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?' ,'Hamsi Tuttun! 🐟' ,'Levrek Tuttun! 🐟' ,'Hiçbirşey Tutamadın Maalesef! 🗑' ,'Alabalık Tuttun! 🐟' ,'Maalesef Balık Oltadan Kaçtı! 🗑' ,'İstavrit Tuttun! 🐟'];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'balıktut', 'balık-tut'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};