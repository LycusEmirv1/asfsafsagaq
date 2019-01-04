const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
    var soru = args.join(' ')
    
    if(!soru) return message.reply('Bir İşlem Belirtin. **Doğru Kullanım**: +hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        }catch(err) {
            message.channel.send('Hatalı İşlem **' + err)
        }

        const embed = new Discord.RichEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)

        message.channel.send(embed)
    }
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'hesapla', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirtilen işlemi Yapar', //açıklaması
  usage: 'hesapla <işlem>' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz