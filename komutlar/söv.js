const ayarlar = require("../ayarlar.json");

exports.run = async (client, msg, args) => {
    let kufur=[
      "Amına kodumun jedayı seni",
      "Babanın annesinin amına koyayım orul orul orospu evladı",
      "Ulan orospu evladı ananın amına teletabinin antenlerini sokar göbeğindeki televizyondan ulusal porno yayını yaparımananı özgürlük heykelinin yanmayan meşalesinde siker şehri duman ederimhollywood bulvarında donla gezen ananın amına topuklu ayakkabı sokayımananı ikiz kulelerinin yedinci katına cıkartır amına uçakla girerim",
      "Seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
      "Senin ananın amına mancınıkla patates atayım",
      "Senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
      "Ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
      "Senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
      "Ananın amını keserim cebime koyarım sıkıldıkça sikerim",
      "Ananın amına sınav yapar 2 milyon kişiyi sokarım",
      "Amına barut döker sürtünmeyle yakarım orospu evladı",
      "Seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
      "O tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
      "Küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
      "Küfür ederdim ama anan çok yordu",
      "Öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
      "Senin götünü keser çorap lastiği yaparım.",
      "Ulan orospu evladı ananın amına teletabinin antenlerini sokar göbeğindeki televizyondan ulusal porno yayını yaparımananı özgürlük heykelinin yanmayan meşalesinde siker şehri duman ederimhollywood bulvarında donla gezen ananın amına topuklu ayakkabı sokayımananı ikiz kulelerinin yedinci katına cıkartır amına uçakla girerim",
    ]
       let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor('RANDOM'),
   description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
  }});
    if(member.id === "262307433932652544")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (':no_entry_sign: | Yapımcıma söver miyim sence değişik insan?')
  }})
    if(member.id === "501089353620258831")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: | Benimi Kandıracaksın Oruspu Cocugu!`)
  }})
    if(member.id === "262294471968817154")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (':no_entry_sign: | Yapımcımın arkadaşına sövdürtecen ha hadi ordan yarram.')
  }})
  if(member.id === "192307329469906944")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (':no_entry_sign: | Bre amına kodumun çocuğu laflarına dikkat et.')
  }})
    if(member.id === "")return msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: ...`)
  }})
    if(member.id === client.user.id){
      msg.channel.send({embed: {
   color: Math.floor(ayarlar.renk),
   description: (`:no_entry_sign: Beni mi kandırcan orospu çocuğu ?`)
  }})
    }
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
  }})
    }
  
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['söv'],
    permLevel: 0,
    kategori: 'eğlence'
   };
  
  exports.help = {
    name: 'söv',
    description: 'İstediğiniz kişiye söver.',
    usage: 'söv <@kullanıcı>'
   }