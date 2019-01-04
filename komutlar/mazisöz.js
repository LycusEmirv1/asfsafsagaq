const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Belleğini yitirenlere ne mutlu, çünkü mazi ıstırap vericidir.**',
'**Mazi bir hayal, ati bir hülya idi ve insan ömrü hep bu kısacık anlardan ve belki de sadece tek bir andan ibaretti.**',
'**Mazi daima mevcuttur. Kendimiz olarak yaşayabilmek için, onunla her an hesaplaşmaya ve anlaşmaya mecburuz.**',
'**Gidene ırmak olmaz ve maziyi anmak olmaz.**',
];
var maziver = Math.floor(Math.random()*Random.length);
const mazi = new Discord.RichEmbed()
.setDescription(`${Random[maziver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(mazi)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'mazi',
description: 'Bot Tarafından Rasgele Mazi Söz Gönderilir',
usage: 'mazi'
};