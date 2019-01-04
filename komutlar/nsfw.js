const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Bu kanal NSFW(Not Safe For Work) kanalı değil! Ayarlardan bunu açabilirsin!')
 }})

    const subreddits = [
        "NSFW_GIF",
        "nsfw_gifs",
        "porninfifteenseconds",
        "porn_gifs",
        "nsfw_Best_Porn_Gif",
        "adultgifs"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setImage(url)
                message.channel.send({ embed });
        })
}
exports.conf = {
  aliases: ['nsfw'],
  permLevel: 0
};
exports.help = {
  name: 'nsfw-gif'
};