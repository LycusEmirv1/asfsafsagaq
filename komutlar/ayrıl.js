exports.run = async (client, message) => {
    if (!message.member.voiceChannel) { return message.channel.send("Beni bulunduğum odadan çıkarman için bir sesli kanalda bulunmam gerek!"); }
  
    message.member.voiceChannel.leave();
    return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voiceChannel}.`);
  };

  
  exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
  };
  
  exports.help = {
    name: "ayrıl",
    description: "Sesli Kanaldan ayrılır",
    usage: "ayrıl",
    usageDelim: "",
  };
  