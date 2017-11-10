const Discord = require('discord.js');
const client = new Discord.Client();
const YTDL = require("ytdl-core");
const embed = new Discord.RichEmbed();
const token = require('./settings.json').token;
const fs = require('fs');
// const ddiff = require('return-deep-diff');
const chalk = require('chalk');
require('./util/eventLoader')(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


client.on('ready', () => {
  client.user.setPresence({ game: { name: '</>', type: 0 } });
});
// Hook
// const hook = new Discord.WebhookClient('365124406969630731', 'mcq188rN55RZVoXOUuFq6b_PRVBq5Ai1YV5SmKwcqSD8TlbAIaKXqwpCAjI-1YQ8CUlO');
// // var args = message.content.split(/[ ]+/);
//
// client.on("message", message => {
//   // var args = message.content.split(/[ ]+/);
//   module.exports = member => {
//     let channel = member.channel;
// hook.send(`Dobrodosao ${member.user.username} na ${channel.name}!`);
// // if (message.content.startsWith("!obav"))
// // hook.send(args.join(" ").substring(5));
// }
// });
//Divine Realms
client.on('message', message => {
  if (message.channel.type === 'dm') return;
if(message.guild.id === "237171768693882890" && message.content === "!staff")
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "DivineRealms Official",
      icon_url: client.user.avatarURL
    },
    title: "DivineRealms",
    url: "",
    description: "Forum: [DivineRealms](http://www.divinerealms.us) IP: mc.divinerealms.us",
    fields: [{
        name: "Vlasnici",
        value: "Neeonn i petarm2001"
        },
        {
          name: "SuVlasnik",
          value: "SadicWolf_"
        },
        {
          name: "Discord Manager",
          value: "PickledPotato"
        },
        {
          name: "Admini",
          value: "MojangFTW i ItsJustCoffee"
        },
      // {
      //   name: "Masked links",
      //   value: "You can put [masked links](http://google.com) inside of rich embeds."
      // },
      // {
      //   name: "Markdown",
      //   value: "You can put all the *usual* **__Markdown__** inside of them."
      // }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© PickledPotato"
    }
  }
})});
//reklama
client.on('message', message => {
  if (message.channel.type === 'dm') return;
if(message.guild.id === "237171768693882890" && message.content === "!divinerealms")
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "DivineRealms Official",
      icon_url: client.user.avatarURL
    },
    title: "DivineRealms",
    url: "",
    description: "Forum: [DivineRealms](http://www.divinerealms.us) IP: mc.divinerealms.us",
    // fields: [{
    //     name: "Vlasnici",
    //     value: "Neeonn i petarm2001"
    //     },
    //     {
    //       name: "SuVlasnik",
    //       value: "SadicWolf_"
    //     },
    //     {
    //       name: "Discord Manager",
    //       value: "PickledPotato"
    //     },
    //     {
    //       name: "Admini",
    //       value: "MojangFTW i ItsJustCoffee"
    //     },
      // {
      //   name: "Masked links",
      //   value: "You can put [masked links](http://google.com) inside of rich embeds."
      // },
      // {
      //   name: "Markdown",
      //   value: "You can put all the *usual* **__Markdown__** inside of them."
      // }
    // ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© PickledPotato"

    }
  }
})});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
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
client.on('message', message => {
if (message.channel.type === 'dm') return;
});
client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', 'Trial Staff');
  if (mod_role && message.member.roles.has("name", "Trial Staff")) permlvl = 2;
  let admin_role = message.guild.roles.find('name', 'Staff');
  if (admin_role && message.member.roles.has("name", "Staff")) permlvl = 3;
  let owner_role = message.guild.roles.find("name", "Owner");
  if (owner_role && message.member.roles.has("name", "Owner")) permlvl = 4;
  if (message.author.id === "154924680770355200") permlvl = 5;
  return permlvl;
};

//Audio
const ytdl = require('ytdl-core');
client.on('message', message => {
// if (message.channel.type === 'dm') return;
if (message.content.startsWith('!play')) {
  if (message.channel.type === 'dm') return message.channel.send("[**Beat**] - This is a server-only command.");
  var args = message.content.replace('!play ', '\u200b')
  if(args.length < 3){message.channel.send(`[**Beat**] - Please specify a YouTube link.`)}
  if(!args.includes('youtube','youtu.be')) return;
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send(`[**Beat**] - Please be in a voice channel first!`);
  voiceChannel.join()
    .then(connnection => {
      const stream = ytdl(args.slice(1), { filter: 'audioonly' });
      message.channel.send("[**Beat**] - Song successfully loaded :ok_hand:").then
      const dispatcher = connnection.playStream(stream);
      dispatcher.on('end', () => voiceChannel.leave());
    });
  }
})
client.on('message', message => {
// const voiceChannel = message.member.voiceChannel;
// if (message.channel.type === 'dm') return message.channel.send("[**Beat**] - This is a server-only command.");
if (message.content.startsWith('!join')) {
  // if (message.channel.type === 'dm') return message.channel.send("[**Beat**] - This is a server-only command.");
  message.channel.send(`[**Beat**] - Just do !play (song_url)! :thumbsup:`)
  // voiceChannel.join()
  }
})
client.on('message', message => {
  if (message.channel.type === 'dm') return;
  const voiceChannel = message.member.voiceChannel;
if (message.content.startsWith('!?"#)=!)#=)"!=#)!")=#)=!"=)#)ajsdnaskjdhasudasi')) {
  message.channel.send(`[**Beat**] - I have left the voice channel. :wave:`)
  voiceChannel.leave()
  }
})
client.on('message', message => {
  if (message.channel.type === 'dm') return;
  const voiceChannel = message.member.voiceChannel;
})


//Bot talk
// client.on("message", message => {
// // let args = message.content.split(' ').slice(1);
// var args = message.content.split(/[ ]+/);
// var ids = ['154924680770355200','237171563760320514'];
//
// if(message.guild.id === "237171768693882890" && message.content === "!obavesti"){
//   if (message.author.id !== ids) return message.channel.send("[**Beat**] - ne moze");
//
//   if(args.lenght === 1){
//     message.channel.send("[**Beat**] - gde ti argument majmune?");
//   } else {
//     message.delete(setTimeout(function () {
//
//     }, 10));
//
//     message.channel.send(args.join(" ").substring(5));
//   }
// }
// })
//Obavesti
//Bot talk
// client.on("message", message => {
// // let args = message.content.split(' ').slice(1);
// var args = message.content.split(/[ ]+/);
//
//

//Anounce
client.on("message", message => {
// let args = message.content.split(' ').slice(1);
var args = message.content.split(/[ ]+/);

if(message.content.startsWith("!anno")){
  if (message.author.id !== '154924680770355200') return message.channel.send("[**Beat**] - Sorry but this command is only for **Beat** administrators.");
  client.channels.get("315161790063575040").send(args.join(" ").substring(5));
  }
})
// })
//Predlozi
client.on("message", message => {
var args = message.content.split(/[ ]+/)
const embed = new Discord.RichEmbed()
  .setDescription((args.join(" ").substring(8)))
  .setAuthor(`${message.author.username} predlaze da:`, `${message.author.displayAvatarURL}`)
  .setColor([0, 255, 153])
  .setFooter("PickledPotato, © 2017")
  .setTimestamp(new Date())
  if(message.guild.id === "237171768693882890" && message.content.startsWith("!predlog")){
    if(args.length === 1){
       message.channel.send("Nedostaje argument. `!predlog (tekst)` da pravilno postavite predlog.");
     } else {
    client.channels.get("361530755215654913").send({embed});
    message.delete(setTimeout(function () {

        }, 0));
        }};
    });
//Report
client.on("message", message => {
var args = message.content.split(/[ ]+/)
const embed = new Discord.RichEmbed()
  .setDescription((args.join(" ").substring(7)))
  .setAuthor(`${message.author.username}ova prijava:`, `${message.author.displayAvatarURL}`)
  .setColor([0, 255, 153])
  .setFooter("PickledPotato, © 2017")
  .setTimestamp(new Date())
  .addField("Hvala vam!", "Tako sto postavljate prijave, Vi nama omogucavate da lakse resimo probleme na serveru." )
  // .addField("Tako sto postavljate prijave, Vi nama omogucavate da lakse resimo probleme na serveru.")
  if(message.guild.id === "237171768693882890" && message.content.startsWith("!report")){
    if(args.length === 1){
       message.channel.send("Nedostaje argument. `!report (tekst)` da pravilno postavite prijavu.");
     } else {
    client.channels.get("361531026658557963").send({embed});
    message.delete(setTimeout(function () {

        }, 0));
        }};
    });
//Helpop
client.on("message", message => {
var args = message.content.split(/[ ]+/)
const embed = new Discord.RichEmbed()
  .setDescription((args.join(" ").substring(7)))
  .setAuthor(`${message.author.username} pita:`, `${message.author.displayAvatarURL}`)
  .setColor([0, 255, 153])
  .setFooter("PickledPotato, © 2017")
  .setTimestamp(new Date())
  .addField("Hvala na strpljenju!", "Na vase pitanje ce odgovoriti cim dodje staff clan!")
  if(message.guild.id === "237171768693882890" && message.content.startsWith("!helpop")){
    if(args.length === 1){
       message.channel.send("Nedostaje argument. `!helpop (tekst)` da pravilno postavite pitanje.");
     } else {
    client.channels.get("361530735104098314").send({embed});
    message.delete(setTimeout(function () {

        }, 0));
        }};
    });
//Member commands
// client.on("message", message => {
// // let args = message.content.split(' ').slice(1);
// var args = message.content.split(/[ ]+/);
//
// if(message.content.startsWith("!predlozi")){
//   if(args.length === 1){
//     message.channel.send("[**Beat**] - Nisi definisao argument");
//   }} else {
//     message.delete(setTimeout(function () {
//
//     }, 0));
//
//     client.channels.get("361530755215654913").send({embed: {
//             color: 3447003,
//             author: {
//               name: "DivineRealms Official",
//               icon_url: client.user.avatarURL
//             },
//             title: "DivineRealms",
//             url: "",
//             description: "Forum: [DivineRealms](http://www.divinerealms.us) IP: mc.divinerealms.us",
//             fields: [{
//                 name: `Predlog od ${message.author.username}`,
//                 value: args.join(" ").substring(5)
//               }]
//   }})};
// });
//nesto
client.on("message", message => {
if(message.content.startsWith("!ok"))
message.channel.send({embed: {
    color: 105722,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "DivineRealms Official",
    url: "http://www.divinerealms.us",
    description: "Novi update!",
    fields: [{
        name: "Duels",
        value: "Uputstvo: /duel (ime igraca)"
      },
      {
        name: "Kits",
        value: "Gapple, Iron & PotPvP"
      },
      {
        name: "Arene",
        value: "Crystal, Ender Kingdom & Desert"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© PickledPotato"
    }
  }
})
});
// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content.startsWith('!avatar')) {
    // send the user's avatar URL
    message.author.send(`[**Beat**] - **${message.author.username}**, this is your avatar:  ${message.author.avatarURL}`);

  }


 if (message.content.startsWith(prefix + 'id')) {
   message.author.send(`[**Beat**] - **${message.author.username}**, your profile ID is **${message.author.id}**`)
  //  message.channel.send("[**Beat**] - Info has been sent to DM")
 }



//JoinedAt
if (message.content.startsWith(prefix + "JoinedAt")) {
  if (message.channel.type === 'dm') return message.channel.send("[**Beat**] - This is a server-only command.");
  message.channel.send(`**${message.author.username}** you joined this server at: ${message.member.joinedAt}`)

  }

});

//Client Events
client.on('channelCreate', channel => {
  console.log(`${channel.type} channel pod imenom ${channel.name} je napravljen ${channel.createdAt} sa ID od ${channel.id}`);
  // if (channel.type === 'text') return channel.send('**Uspesno si napravio novi channel.**');
});

client.on('channelDelete', channel => {
  console.log(`${channel.type} pod imenom ${channel.name} je uspesno obrisan.`);
});

client.on('channelPinsUpdate', (channel, time) => {
  console.log(`Pinovane poruke za ${channel.name} su se update ${time}`);
});

client.on('messageDelete', msg => {
  console.log(`Poruka koja je sadrzala '${msg.cleanContent}' je obrisana sa kanala ${msg.channel}`);
});

client.on('messageDeleteBulk', messages => {
  console.log(`${messages.size} je obrisana`);
});

var prefix = "!"
client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  var guild = message.guild;
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');
  var argresult = args.join(" ")
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "giverole")) {
    if (message.channel.type === 'dm') return message.channel.send("[**Beat**] - This is a server-only command and this is only for **Beat** administrators.");
    if (message.author.id !== '154924680770355200') return message.channel.send("[**Beat**] - Sorry but this command is only for **Beat** administrators.");
    message.member.addRole("295260382409392131 ")
  }


//ThePvpGod 284444519716487168
//People from esh14d 295184367045836800

  //if(message.content.startsWith(prefix + "giverole")){
    //guild.member(message.mentions.users.first()).addRole(`312628278856908801`).catch(error => console.log(error));
  //} else
// if(commandIs("say", message)){
//   if(args.lenght === 1){
//     message.channel.send("You did not define an argument! Correct usage is `!say Hello`");
//   } else {
//     message.channel.send(args.join(" ").substring(4));
//   }
// } else

  if(message.content.startsWith(prefix + "potato")){
    message.channel.send("[**Beat**] - This is a potato http://bsnscb.com/potato-wallpapers.html");
}else
if(message.content.startsWith(prefix + "stajeaca")){
  if (message.author.id !== '154924680770355200') return message.channel.send("[**Beat**] - Sorry but this command is only for **Beat** administrators.");
  message.channel.send("[**Beat**] - https://en.wikipedia.org/wiki/Pig");
}else
if(message.content.startsWith(prefix + "dinkle")){
    if (message.author.id !== '154924680770355200') return message.channel.send("[**Beat**] - Sorry but this command is only for **Beat** administrators.");
message.channel.send("```Dinkle is a lemon```");
}else
if(message.content.startsWith(prefix + "doge")){
  message.channel.send("[**Beat**] - http://imgur.com/a/psaZY")
} else
// if(message.content.startsWith(prefix + "bestmix")){
// message.author.send("[**Beat**] - Best mix (my opinion) is https://www.youtube.com/watch?v=2x1F2koqQFM :fire:");
// // message.channel.send("[**Beat**] - Info has been sent to DM");
// }else
// if(message.content === (prefix + "help")){
// message.author.send("[**Beat**] - Not many commands are added because the bot is in **BETA**! !invite to join my server for help :potato:");
// }else
if(message.content.startsWith(prefix + "vol")){
message.channel.send("[**Beat**] - To change the volume right click the bot and lower the 'User Volume'")
}else
if(message.content.startsWith(prefix + "invite")){
  message.author.send("[**Beat**] - My server is https://discord.gg/Xx2HzQ5 You can ask for help there!");
;
} else
// Clear
if (message.content.startsWith(prefix + 'clear')) {
  message.channel.send("[**Beat**] - `!clear` command is currently disabled due to bug fixes. It will be out soon.")
} else

// if(message.guild.id === "237171768693882890" && message.content === "!predlozi"){
//   client.channels.get("361530755215654913").send(`**${message.author.username}** misli da treba da se doda: ` + args.join(" ").substring(5));
//
// } else

//game
// client.on('message', message => {
// var args = message.content.split(/[ ]+/);
//   if(message.content.startsWith(prefix + "setgame")) {
//     message.delete(setTimeout(function () {
//
//     }, 0));
//     if (message.author.id !== '154924680770355200') return message.channel.send("[**Beat**] - Sorry but this command is only for **Beat** administrators.");
//        else {
//     client.user.setPresence(args.join(" ").substring(5));
//             }
//           }
// 			 });
if(message.content.startsWith(prefix + "PickledPotato")) {
    message.channel.send("[**Beat**] - **PickledPotato** is the founder of **Beat** project. For more information you can feel free to ask him! `PickledPotato#1713`")
}

if (message.content.startsWith(prefix + "setgame")) {
      if (message.author.id !== '154924680770355200') return message.channel.send("[**Beat**] - Sorry but this command is only for **Beat** administrators.");
      client.user.setPresence({ game: { name: 'mc.divinerealms.us', type: 0 } });
      message.delete(setTimeout(function () {

      }, 10));

  } else
  if(message.content.startsWith(prefix + "ping")) {
    message.delete(setTimeout(function () {

    }, 10));
    message.channel.send('[**Beat**] - Pinging...').then(sent => {
      sent.edit(`[**Beat**] - Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms (**${message.author.username}**)`);
  });
} else

// //Message
module.exports = message => {
  if (message.channel.type === 'dm') return;
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};

});

client.login(process.env.MzEyNTg3MjcxNDE5MzMwNTcw.DOc2Hg.2weAbcUnrpiTup2c5D-aF0_wHw8);
