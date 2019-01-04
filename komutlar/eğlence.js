const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
var owner = "262307433932652544";

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence Komutları")
  .setDescription('')
  .setColor(0xCC0000)
  .addField("**Eğlence ve Kullanıcı Komutları 1:**", `+avatar = Avatarınınızı Gösterir. \n+yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n+servericon = Sunucunun Resmini Atar. \n+hesapla = Belirtilen İşlemi Yapar. \n+şifre = İstediğiniz Hanede Karışık Şifre Oluşturur. \n+yazıtura = Yazı Tura Atar. \n+stresçarkı = stresçarkı çevirir. \n+steamstore = Steam Mağazadaki Oyunları Bulur. \n+slots = Slots Oyununu Oynar. \n+nahçek = Arkadaşınıza Nah Çekersiniz. \n+küçült = Mesaj Küçültür. \n+intihar = intihar edersiniz. \n+google = Google da Arama Yapar \n+emojiyazı = Yazıyı Emojiye Çevirir. \n+cowsay = Yazıyı İnek Yazısına Çevirir. \n+tekmeat = Kullanıcıya Tekme atarsınız. \n+korkut = Bot sizi korkutmaya çalışır. \n+söv = İstediğiniz kişiye söver \n+csgo = CSGO bilgilerinizi söyler. `)
  .addField("**Eğlence ve Kullanıcı Komutları 2:**", `+bilgilerim = Kendi Bİlgileriniz Görürsünüz. \n+8ball = Sorunuza Rastgele Cevap Verir. \n+resim = Size Rastgele Resim Gönderir. \n+köpek = Köpek Resimleri Atar. \n+trump = Çok gereksiz xD \n+aşkölçer = Etiketlediğiniz kişi  ile aşkınızı ölçer. \n+balıktut = Balık tutarsınız \n+fbi = FBI kapınıza gelir. \n+fortnite = Fortnite Hesabınızın istatisliklerini gösterir. \n+kgif = Komik gifler atar (komik değil) \n+tokat = Etiketlediğiniz kişiye tokat atar. \n+wasted = Fotoğrafınıza wasted ekler. \n+köpek = Köpek resmi atar. \n+kedi = Kedi resmi atar. \+nördek = Ördek resmi atar. `)
   .addField("**Yapımcı**", "Mehmet#4698")
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm Eğlence komutları gösterir.',
  usage: 'eğlence '
};