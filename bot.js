const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

client.on('message', msg => {//msg
    if (msg.content === 'الوان') {
      if (msg.channel.id !== "470654400810057749") return;
      msg.channel.send({file : "https://d.top4top.net/p_925trmdy1.png"})
    }
  });;
  
const Client = require('discord.js');

client.on('message', message => {
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'لون'){
if (message.channel.id !== "470654400810057749") return;
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number ** ❌ `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
          if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
              
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color Changed Successfully** ✅ `)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){
     
      message.member.removeRole(message.guild.roles.find("name",`${x}`))
    
      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));
  
      
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
