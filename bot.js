const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(``,"")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', message => {
	    var prefix = "$";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Legends Server";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يرجى كتابة رسالة البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست ؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | تم ارسال الرسالة بنجاح الى جميع الاعضاء عددهم __${message.guild.members.size}__**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('「● الى الجميع」 :mega:')
       .addField('سيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });


client.on('message', async message =>{

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let sicon = message.author.displayAvatarURL;
  if(cmd === `$myid`) {
      var bots = new Discord.RichEmbed()

      .setDescription(`** Your id: ${message.author.id}  **`)
      .setColor('RANDOM')
      message.channel.send(bots);
  }
});





client.on('message', message => {
    var prefix = "$"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المنشن بشكل صحيح  ❌ **').catch(console.error);

}

});





client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`(__Legends إدارة __)

──▄────▄▄▄▄▄▄▄────▄───
─▀▀▄─▄█████████▄─▄▀▀──
─────██─▀███▀─██──────
───▄─▀████▀████▀─▄────
─▀█────██▀█▀██────█▀──


اهلا وسهلا بك في السيرفر , 

نقدر تواجدك معنا فضلاً القي نظرة على

 القوانين لتجنب حسابك من الحظر في

 شات  #rules

**"نتمنى لك وقت ممتع"**                                                                                                                 

                                                                                                                       —⤛ ${member} ⤜—
انت العضو رقم ${member.guild.memberCount} `)

}).catch(console.error)
})






client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| الاونلاين ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });





client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });	




client.on('message', message => {
    if (message.content.startsWith("$invite")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :mailbox_with_mail:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

-⌠${message.guild.name}⌡  هذا هو رابط سيرفر

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

- هذا الرابط صالح ل 100 مستخدم فقط

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

- هذا الرابط صالح لمده 24 ساعه فقط

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**`)
      message.author.sendEmbed(Embed11)
    }
});





client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "✵-「welcome」")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('**🌹أهلاً وسهلاً بك في السيرفرفضلاً قم بالأطلاع على قوانين السيرفر لتجنب تعرضك للحظر🌹**')
.setThumbnail(member.avatarURL)
  .setImage('https://www.askideas.com/media/13/Micky-Mouse-With-Welcome-Banner-Glitter.gif')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});





client.on('message', msg => {
	var prefix = "$";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**```ضع عدد الرسائل التي تريد مسحها```**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```تم مسح: " + textxt + "\ من الرسائل```").then(m => m.delete(3000));
        }    
    }
}
});






const jackeo = ['426500624025124864' , '365130926369538048' , '468541265869275157' , '222660552567160832' , '462387183295266856' , '466908980673904640' , '467594905460539402' , '224645204022394890' , '380681650503286795' , '323901816041635840' , '' , '' , '']; //Jackeo  حقوقي
client.on('message', message => { //Jackeo  حقوقي
var prefix = "$"; //Jackeo  حقوقي
  if (message.author.bot) return; //Jackeo  حقوقي
  if (!message.content.startsWith(prefix)) return; //Jackeo  حقوقي
    var argresult = message.content.split(` `).slice(1).join(' '); //Jackeo  حقوقي
      if (!jackeo.includes(message.author.id)) return; //Jackeo  حقوقي
  let command = message.content.split(" ")[0]; //Jackeo  حقوقي
  command = command.slice(prefix.length); //Jackeo  حقوقي
 //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي
  let args = message.content.split(" ").slice(1);  //Jackeo  حقوقي
 //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي
  if (command === "warn")  { //Jackeo  حقوقي
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **'); //Jackeo  حقوقي
          message.delete() //Jackeo  حقوقي
    message.channel.sendMessage(args.join(" ")).catch(console.error); //Jackeo  حقوقي
  } //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي  //Jackeo  حقوقي
   //Jackeo  حقوقي  //Jackeo
});






client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "$";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك وضع المنشن **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**الدليل**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)     
  }

});






client.on('message' , message => {
if (message.content === '$help') {
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
      .addField("**🌐 الأوامر العامه**","** **")
      .addField("**$myid**","**أمر اذا انت على الجوال ومو عارف تطلع اي دي حسابك تكتبه ويطلع لك**")
      .addField("**$members**","**أمر لاظهار حالات الأعضاء**")
       .addField("**$ping**","**أمرلاظهار سرعة البوت**")
       .addField("**$invite**","**أمرلارسال رابط السيرفر بالخاص**")
       .addField("**$id**","**أمرلأظهار معلومات حسابك**")   
	   .addField("**⬎Soon⬐**","**⬎Soon⬐**")
      .addField("**☢ اوامر الاداره**","** **")
       .addField("**$warn**","**لأعطاء انذار لشخص**")
       .addField("**$ban**","**لحظر الشخص**")
       .addField("**$bc**","**لأرسال رسالة جماعية**")
       .addField("**$clear**","**لمسح الشات برقم محدد**")	   
	   .addField("**⬎Soon⬐**","**⬎Soon⬐**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});




  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', '✵-「messages-log」');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل :\n \`${message.cleanContent}\`\n\nبعد التعديل :\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});


});



client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', '✵-「messages-log」');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});




client.login(process.env.BOT_TOKEN);
