const Discord = module.require('discord.js');
var request = require('request');
var cheerio = require('cheerio');

function getStatData(location, $) {

    var selector = $('.stats-stat .value').eq(location).text();

    var stat_array = $.parseHTML(selector);

    var stat = 0;

    if (stat_array == null || stat_array.lengh == 0) {
        return -1;

    } else {
        stat = stat_array[0].data;
    }

    return stat;
}

module.exports.run = async (bot, message, args) => {

    var UR_L = "http://csgo.tracker.network/profile/" + args[0];

    if (!args[0]) {
        return message.channel.send(":x: Lütfen özel id veya STEAMID64 giriniz");
    }

    request(UR_L, function(err, resp, body) {

        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if (KD == -1) {
            message.channel.send(":x: Hesabın gizli yada yanlış id veya STEAMID64 girdin");
            return;
        }

        var WIN = getStatData(1, $);
        var HS = getStatData(4, $);
        var MONEY = getStatData(5, $);
        var SCORE = getStatData(6, $);
        var KILLS = getStatData(7, $);
        var DEATHS = getStatData(8, $);
        var MVP = getStatData(9, $);
        var BS = getStatData(13, $);
        var BD = getStatData(14, $);
        var HR = getStatData(15, $);

        var STAT = new Discord.RichEmbed()

            .setTitle("__***CSGO Stats***__")
            .setURL(UR_L)
            .setColor("0x#FF0000")
            .addField("Total KD", KD, true)
            .addField("Win", `${WIN}%`, true)
            .addField("Total Hostages Saved", HR, true)
            .addField("Total Money", MONEY, true)
            .addField("Total Score", SCORE, true)
            .addField("Total Kills", KILLS, true)
            .addField("Total Deaths", DEATHS, true)
            .addField("MVP", MVP, true)
            .addField("Total Bombs Set", BS, true)
            .addField("Total Bombs Defused", BD, true)
            .addField("Total Headshots", HS, true);


        message.channel.send(STAT);

    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'csgo',
  description: 'CSGO bilgilerinizi söyler',
  usage: 'csgo'
};