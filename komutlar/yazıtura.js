const Discord = require('discord.js');

const chancejs = require('chance');

const chance = new chancejs();



const cevaplar = [

	"YAZI-TURA:__TURA__**",

	"YAZI-TURA:__YAZI__**"

];



exports.run = function(client, message) {

	

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	

	if (cevap === "YAZI-TURA:__YAZI__**") {

		

		 const embedyazı = new Discord.RichEmbed()

		.setColor(0xf4b942)

		.setDescription(cevap)

		.setThumbnail("https://iaahbr.tmgrup.com.tr/9baa3a/0/0/0/0/0/0?u=http://i.ahaber.com.tr/galeri/yasam/1-tlnin-diger-ulke-paralari-karsisindaki-degeri/15.jpg")

		message.channel.send(embedyazı);

		

	} else if (cevap === "YAZI-TURA:__TURA__**") {

		

		const embedtura = new Discord.RichEmbed()

		.setColor(0xf4b942)

		.setDescription(cevap)

		.setThumbnail("https://cdn.discordapp.com/attachments/455591987865714688/506464380884615172/15408209023102062427968.jpg")

		message.channel.send(embedtura);

		

	}

		



};  



exports.conf = {

  enabled: true, 

  guildOnly: false, 

  aliases: [],

  permLevel: 0 

};



exports.help = {

  name: 'yazıtura', 

  description: 'Yazı-Tura atar.',

  usage: 'yazıtura'

};