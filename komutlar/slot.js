const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
    var cumleler= [
        '**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🥕 : 🍭\n🍬 : 🍬 : 🍬 **<** \n🍓 : 🍉 : 🍦\n------------------\n| : : : : **Kazandın!** : : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍬 : 🍦 \n🍫 : 🍓 : 🍬 **<** \n🍉 : 🥕 : 🍭\n------------------\n| : : :  **Kaybettin!**  : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🍉 : 🍭\n🍓 : 🍓 : 🍓 **<** \n🍬 : 🥕 : 🍫\n------------------\n| : : : : **Kazandın !** : : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🍓 : 🍬\n🍉 : 🥕 : 🍭 **<**\n🍓 : 🍬 : 🍦\n------------------\n| : : :  **Kaybettin !**  : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🍓 : 🍭\n🍉 : 🍉 : 🍉 **<**\n🥕 : 🍬 : 🍦\n------------------\n| : : : : **Kazandın!** : : : : |','**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍓 : 🍉\n🍬 : 🍦 : 🍫 **<**\n🍭 : 🍬 : 🥕\n------------------\n| : : :  **Kaybettin!**  : : : |'];
  var cumle = cumleler[Math.floor(Math.random() * cumleler.length)];
 
    message.channel.send('**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍬 : 🍦\n🍫 : 🍓 : 🍬 **<**\n🍉 : 🥕 : 🍭\n------------------').then( msg => {
 
            setTimeout(() => {
 
                msg.edit('**[  🎰 l SLOTS ]** \n------------------\n🍉 : �� : 🍭\n🍓 : 🍬 : 🍦 **<**\n🍫 : 🍓 : 🍬\n------------------');
 
            }, 1000);
 
            setTimeout(() => {
 
                msg.edit('**[  🎰 l SLOTS ]** \n------------------\n🍫 : 🍓 : 🍬\n🍉 : 🥕 : 🍭 **<**\n🍓 : 🍬 : 🍦\n------------------');
 
            }, 1500);
 
            setTimeout(() => {
 
                msg.edit('**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍓 : 🍉\n🍬 : 🍦 : 🍫 **<**\n🍭 : 🍬 : 🥕\n------------------');
 
            }, 2000);
 
            setTimeout(() => {
 
                msg.edit('**[  🎰 l SLOTS ]** \n------------------\n🍓 : 🍬 : 🍉\n🍉 : 🍓 : 🥕 **<**\n🍭 : 🍫 : 🍓\n------------------');
 
            }, 2500);
 
            setTimeout(() => {
 
                msg.edit(cumle);
 
            }, 3000);
 
 
        });
 
    };
   
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['slots2'],
 permLevel: 0
};
 
exports.help = {
 name: 'slot2',
 description: 'Slot Çevirir',
 usage: 'slot2'
};