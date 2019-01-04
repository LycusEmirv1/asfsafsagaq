const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı Üstadım.');

    var Games = [

        "+yardım Yeniden Güncellendi",
    
        "+sigara Eklendi",
        
		"+reklamtara Aktif!",
		
		"+mesajküçült Aktif",
		
        "+yenilikler Güncellendi",
        
        "+fbi Eklendi!!",
      
        "+zekam Eklendi",
      
        "Bot 7/24 Hostlanmıştır!!",
		
        `${client.users.size} Kullanıcı İçin Teşekkürler`,
        
        `${client.guilds.size} Sunucu İçin Teşekkürler`,
        
        `Rıca Etsem Beni Eklermisin +davet`,



        `🔥Yapımcı Mehmet#4698`


    ];
	
    module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giri� yap�ld�!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarland�!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/mehmet17711");
        }, 2 * 2500);

};