exports.run = (client, message, args) => {
    message.channel.send(":smoking: **Yak Yak Yak**").then(async msg => {
                    setTimeout(() => {
            message.react(':smoking:');
        }, 1000);
          setTimeout(() => {
            message.react(':smoking::cloud::cloud::cloud:');
        }, 1500);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud:');
        }, 1800);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud:');
        }, 2300);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud::cloud:');
        }, 2800);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud::cloud::cloud:');
        }, 3300);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud:');
        }, 3800);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud:');
        }, 4300);
        setTimeout(() => {
            msg.edit('���:cloud:');
        }, 4800);
    setTimeout(() => {
            msg.edit('**Sigaranız bitti**');
        }, 5300);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sigara'],
  permLevel: 0
};

exports.help = {
  name: 'sigaraiç',
  description: 'Sigara içersiniz',
  usage: 'sigaraiç'
};