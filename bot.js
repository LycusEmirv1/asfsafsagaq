const Discord = require('discord.js');

const client = new Discord.Client();

const ayarlar = require('./ayarlar.json');

const chalk = require('chalk');

const db = require('quick.db');


const fs = require('fs');

const moment = require('moment');

const Jimp = require('jimp');

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

require('./util/eventLoader')(client);



var prefix = ayarlar.prefix;



const log = message => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);

};



client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

fs.readdir('./komutlar/', (err, files) => {

  if (err) console.error(err);

  log(`${files.length} komut yüklenecek.`);

  files.forEach(f => {

    let props = require(`./komutlar/${f}`);

    log(`Yüklenen komut: ${props.help.name}.`);

    client.commands.set(props.help.name, props);

    props.conf.aliases.forEach(alias => {

      client.aliases.set(alias, props.help.name);

    });

  });

});






client.on('message', async message => {
if (message.content.toLowerCase() === prefix + "ördek") {

    let embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle("Vak Vak...")
    .setImage(("https://random-d.uk/api/v1/images/"+ Math.floor(Math.random() * (1 - 20) + 60)+".jpg"))
    message.channel.send(embed)

}});



client.on('message', async message => {
if (message.content.toLowerCase() === prefix + "kedi") {

  let {body} = await superagent
  .get(`aws.random.cat/meow`);

  let kedi = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.author.username} | İşte senin kedin!`)
  .setImage(body.file);

  message.channel.send(kedi)

}});




const superagent = require("superagent");

client.on('message', async message => {
if (message.content.toLowerCase() === prefix + "köpek") {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let kopek = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.author.username} | İşte senin köpeğin!`)
  .setImage(body.url);

  message.channel.send(kopek)

}});





client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === "yasakla" || command === "ban") {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu Komutu kullanmanız için `Üyeleri Yasakla` Yetkisine sahip olmalısınız.")
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Sunucudan yasaklayacağım kişiyi etiketlemelisin.");
    if(!member.bannable) 
      return message.reply("Sunucudan atamadım. Belirlediğin kişinin yetkisi benim yetkimden yüksek.")
    let sebep = args.slice(1).join(' ');
    if(!sebep) sebep = "Lütfen bir sebep belirtin.";
    
    await member.ban(sebep)
      .catch(error => message.reply(`Üzgünüm sunucudan yasaklayamadım. HATA: ${error}`));
    message.channel.sendMessage(`${message.author.tag} sunucudan ${member.user.tag} kişisini yasakladı. \nSebep: **${sebep}**`);
  }
  });






client.on("message", message => {
    const dmchannel = client.channels.find("name", "giriş-çıkış");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Gönderen: ${message.author.tag}`,
            description: `Bota Özelden Gönderilen DM: ${message.content}`
        }})
    }
});




// Ayarlanan sayıya ulaştığında mesaj gönderelim ve sayacı sıfırlayalım
 

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler ${message.guild.name}! Başarıyla ${sayac[message.guild.id].sayi} kullanıcıya ulaştık! Sayaç sıfırlandı!`)
                .setColor('#ac85ff')
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
 
// Sunucuya birisi girdiği zaman mesajı yolluyalım
 
client.on("guildMemberAdd", async member => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    const channel = member.guild.channels.find("name", "giriş-çıkış")
    channel.send(`**${member.user.tag}** Katıldı ${sayac[member.guild.id].sayi} olmamıza son ${sayac[member.guild.id].sayi - member.guild.members.size} üye kaldı!`)
})
 
client.on("guildMemberRemove", async member => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    const channel = member.guild.channels.find("name", "giriş-çıkış")
    channel.send(`**${member.user.tag}** Ayrıldı ${sayac[member.guild.id].sayi} olmamıza son ${sayac[member.guild.id].sayi - member.guild.members.size} üye kaldı!`)
})



client.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});


client.on("guildMemberAdd", member => {

  if (db.has(`otoR_${member.guild.id}`) === false) return;
  var rol = member.guild.roles.get(db.fetch(`otoR_${member.guild.id}`));
  if (!rol) return;
  
  member.addRole(rol)
  
})

client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "bilgilerim2") {
        const Durum = user.presence.status;
        const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        const durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const embed = new Discord.RichEmbed()
      .setColor(Durm)
      .addField("İsim ve ID", `${user.tag}, (${user.id})`, false)
      .addField("Kayıt Tarihi", `${user.createdAt}`, false)
      .addField("Durum", `${durm}`, false)
      .addField("Oynadığı Oyun", `${user.presence.game ? user.presence.game.name : 'Oynamıyor'}`, false)
      .addField("Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`, false)
      .setThumbnail(user.avatarURL)
      message.channel.send(embed)
    }
});


client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ters" || command === "tersyaz") {
        const mapping = '+"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        // Komut kullanıldığında '!'  Karakteri ile başla. 
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Lütfen ters yazmak istediğiniz bir yazı giriniz.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
        )
    }
});



 client.on('message', msg => {
                if (msg.content.startsWith(prefix + "çekiliş")) {
                  msg.channel.send(`Çekilişi Kazanan: ${msg.guild.members.random().displayName}`);
                  }
                  });

client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'döviz') {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var euro = JSON.parse(body);
      message.channel.send(new Discord.RichEmbed().setDescription(`Dolar satış: ${info.selling} \nDolar alış: ${info.buying} \n\nEuro satış: ${euro.selling}TL \nEuro alış: ${euro.buying}TL`).setColor('RANDOM').setTitle('Anlık Döviz Kurları'))    }
})
    }
})
    }
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "espri") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "Okeyde kıza elin nasıl dedim. Ojeli dedi.", "Ben Şoka girdim. O Migrosa.", "Canım sıkkın kanka sonra gel", "Can bedenden çıkmazsa nolur? \n+Matamatik dersine geç kalır.", "Adamın biri televizyona çıkmış indirememişler.", "Bir romanı 7 kız yazarsa nolur? \n-  seven kızın romanı."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    return message.channel.send(sonuc);
}
});

  client.on('messageDelete', async (message) => {
    const logs = message.guild.channels.find('name', 'mod-log');
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
        await message.guild.createChannel('mod-log', 'text');
    }
    if (!logs) {
        return console.log('mod-log kanalı oluşturmanız lazım.')
    }
    const entry = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    }).then(audit => audit.entries.first())
    let user;
    if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
        user = entry.executor.username
    } else {
        user = message.author
    }
    const logembed = new Discord.RichEmbed()
        //.setTitle('Message Deleted')
        .setAuthor(user.tag, message.author.displayAvatarURL)
        .addField(`** ${message.author.username} Tarafından mesaj silindi. ${message.channel.name} Kanalında.**\n\n`, message.content)
        .setColor(message.guild.member(client.user).displayHexColor)
        .setFooter(`<#${message.channel.id}>`)
        .setTimestamp()
    //console.log(entry)
    logs.send(logembed);
})
  
 client.on("channelDelete", async channel => {
    var logs = channel.guild.channels.find(c => c.name === 'mod-log');
    if (!logs) return console.log("mod-log kanalını bulamadım.");
    const cembed = new Discord.RichEmbed()
      .setTitle("Kanal Silme")
      .setColor("RANDOM")
      .setDescription(` **${channel.type} kanalı**,**${channel.name}**, isimli Kanal silindi.`)
      .setTimestamp(new Date())
    logs.send(cembed)
  });



client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kasaaç') {
    var sans = ["Bok", "Stattrak AWP | Asiimov", "Karambit | Doopler 🗡", "Hatıra USP-S | Leş Onaylandı", "Kancalı Bicak | Fade 🗡", "Desert Eagle | Kizil Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi 🗡", "Hatıra Faction Bicaği 🗡"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.reply(`Sana **${sonuc}** Çikti`)
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@501089353620258831>') {
        if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
            msg.channel.sendMessage('Prefixim **+** Yardım menüsü için +yardım yazabilirsin.'); 
        } else {
        msg.channel.send('Prefixim **+** Yardım menüsü için +yardım yazabilirsin.');
        }
    }
});




client.reload = command => {

  return new Promise((resolve, reject) => {

    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];

      let cmd = require(`./komutlar/${command}`);

      client.commands.delete(command);

      client.aliases.forEach((cmd, alias) => {

        if (cmd === command) client.aliases.delete(alias);

      });

      client.commands.set(command, cmd);

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name);

      });

      resolve();

    } catch (e){

      reject(e);

    }

  });

};



client.load = command => {

  return new Promise((resolve, reject) => {

    try {

      let cmd = require(`./komutlar/${command}`);

      client.commands.set(command, cmd);

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name);

      });

      resolve();

    } catch (e){

      reject(e);

    }

  });

};



client.unload = command => {

  return new Promise((resolve, reject) => {

    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];

      let cmd = require(`./komutlar/${command}`);

      client.commands.delete(command);

      client.aliases.forEach((cmd, alias) => {

        if (cmd === command) client.aliases.delete(alias);

      });

      resolve();

    } catch (e){

      reject(e);

    }

  });

};


client.on('guildCreate', guild => {
  let channel = client.channels.get("506490191142453249")//botun girdigi sunucuyu kanala gönderelim
  guild.channels.random().createInvite({temporary: false, maxAge: 0, maxUses: 0, unique: false}).then(davet => 
   channel.send(davet.url)                                                                                                  
   );
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Giriş ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Kurucu ", guild.owner.user.tag)
      .addField("Sunucu ID", guild.id, true)
      .addField("Toplam Kullanıcı", guild.memberCount, true)
      .addField("Toplam Kanal", guild.channels.size, true)
  channel.send(embed);
});
client.on('guildDelete', guild => { 
  let channel = client.channels.get("506490191142453249")//botun çıktıgı sunucuyu kanala gönderelim

  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Çıkış ${guild.name}`)
      .setThumbnail(guild.iconURL)
      .addField("Kurucu", guild.owner.user.tag)
      .addField("Sunucu ID", guild.id, true)
      .addField("Toplam Kullanıcı", guild.memberCount, true)
      .addField("Toplam Kanal", guild.channels.size, true)
  channel.send(embed);

}); 

client.on('message', msg => {

  if (msg.content.toLowerCase() === 'sa') {

		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {

			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^'); 

		} else {

		msg.reply('Aleyküm selam, hoş geldin ^^');

		}

	}

});

client.on("guildMemberAdd", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    });


client.on("guildMemberRemove", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })


client.elevation = message => {

  if(!message.guild) {

	return; }

  let permlvl = 0;

  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;

  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;

  if (message.author.id === ayarlar.sahip) permlvl = 4;

  return permlvl;

};



var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;



client.on('warn', e => {

  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));

});

client.on("guildMemberAdd", member => {

  var channel = member.guild.channels.find("name", "giriş-çıkış")//ismi istediğiniz gibi ayarlıyabilirsiniz
  if (db.has(`otoR_${member.guild.id}`) === false) return;
  var rol = member.guild.roles.get(db.fetch(`otoR_${member.guild.id}`));
  if (!rol) return;
  
  member.addRole(rol)
  channel.send(':loudspeaker: :inbox_tray: `' + `${rol.name}` + '` Rolü verildi! Hoşgeldin! `' + member.user.tag + '`');
  
  member.send ("Aramıza hoşgeldin!")
  
})

client.on('error', e => {

  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));

});

  
client.login(ayarlar.token);