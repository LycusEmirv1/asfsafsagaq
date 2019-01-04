const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args) => {
      
      let sebep = args.slice(0).join(" ");
      if (!sebep) return message.reply("AFK olma nedenini yazmalısın!");

      db.set(`afks_${message.author.id}`, sebep)
  
        message.reply(`artık **${sebep}** sebebi ile **AFK** modundasın!`)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Genel",
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};