const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const welcome = require('./welcome.js')

const prefix = '%';

const client = new Discord.Client({
    allowedMentions: {
        parse: [`users`, `roles`],
        repliedUser: true,

    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS",
    ],

});

const  randomRoast = ['Mẹ m béo bởi vì mỗi lần t chơi cô ấy, t cho cô ấy ăn bánh trứng tươi chà bông Karo Richy túi 156g 6 gói chất lượng', 'Không thể tát m vì m không có má', 'T biết m là 1 ng sòng phẳng. 1 là 1, 2 là 2, k có 3', 'T đang định xin sdt của mẹ m, nhưng quên mất t có rồi', 'T k thể làm m cáu, vì m không tri', 'Hiện tại m rất béo, nhưng không sao, m sẽ gầy']
const getRandomInt = (max) => Math.floor(Math.random() * max);

client.on("ready", () => {
    console.log("Hail Hydra")

    // Custom status
    client.user.setActivity(`me Quan`, { type: "PLAYING"})

    // Welcome message
    
    welcome(client)

})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Message array var
    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    // Help
if (command === 'help'){
    const embed = new MessageEmbed()
    .setColor('LUMINOUS_VIVID_PINK')
    .setTitle('Commands prefix: `%`')
    .setDescription('- *roast*\n- *momjoke*\n- *flirt*\n- *member* (membercount)\n- *reaction*\n- *warn*\n- *mute* (forever)\n- *kick*\n- *ban*\n- *steal* (only nitro)\n- *purge*')

    message.channel.send({ embeds: [embed] })
}


    // Roast 

    if(command === 'momjoke') {

        const member = message.mentions.members.first() || message.guild.members.cache.get(argument[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === argument.slice(0).join(" " || x.user.username === argument[0]));
        if (!argument[0]) {
            message.channel.send('Mẹ mày béo')
        } else {
            message.channel.send(`Mẹ mày béo ${member}`)
        }

    }

    // Flirt

if (command === 'flirt'){

    const embed = new MessageEmbed()
    .setColor('LUMINOUS_VIVID_PINK')
    .setTitle('Thực ra... t - tớ thích cậu nhiều lắm :point_right: :point_left:')
    .setDescription('Tớ làm 1 trang web cho cậu, cậu xem nhé <3 https://kietjojo.github.io/traitimdap/')

    message.channel.send({ embeds: [embed] })
}


    // Member count

if(cmd === `${prefix}member`){
    const embed = new MessageEmbed()
    .setColor('LUMINOUS_VIVID_PINK')
    .addField(`Membercount`, `${message.guild.memberCount}`, true)

    message.channel.send({ embeds: [embed] })
}

    // Embed 

    if (command === 'reaction'){

        const embed = new MessageEmbed()
        .setColor('LUMINOUS_VIVID_PINK')
        .setTitle('Phan ung cua tao')
        .setDescription('Phan ung cua tao')
        .setThumbnail('https://cdn.discordapp.com/attachments/965570993777152082/1031631312416677928/305450579_2186617068178263_8565631918851190600_n.jpg')
        .setImage('https://cdn.discordapp.com/attachments/965570993777152082/1031631312416677928/305450579_2186617068178263_8565631918851190600_n.jpg')
        //.setTimestamp()
        //.setFooter(`Embed created by ${message.author.tag}`)

        message.channel.send({ embeds: [embed] })
    }

// Warn command

if(command === `warn`) {

    const member = message.mentions.members.first() || message.guild.members.cache.get(argument[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === argument.slice(0).join(" " || x.user.username === argument[0]));
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You cant do that.")
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("I cant do that.")
    if (message.member === member) return message.channel.send("Wtf bro")
    if (!member.kickable) return message.channel.send("This one is turtle dog i cant warn him bro.")
    if (!argument[0]) return message.channel.send("You must specify your bro in this command!")

    let reason = argument.slice(1).join(" ") || 'No reason given.'

    const dmEmbed = new MessageEmbed()
    .setDescription(`:muscle:   You are being **WARNED** in ${message.guild.name} | ${reason}`)
    .setColor("LUMINOUS_VIVID_PINK")

    const embed = new MessageEmbed()
    .setDescription(`:muscle:   ${member} has been **WARNED** | ${reason} `)
    .setColor("LUMINOUS_VIVID_PINK")

    message.channel.send({ embeds: [embed] })
    member.send({ embeds: [dmEmbed] }).catch(err => {console.log("This user is an introvert !")})


}

// Kick command

if (command === 'kick') {
    const member = message.mentions.members.first() || message.guild.members.cache.get(argument[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === argument.slice(0).join(" ") || x.user.username === argument[0])
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You cant do that HAHAHA.")
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("I cant do that")
    if (message.member === member) return message.channel.send("That's commit suicide bro ... DONT DO THAT AGAIN!!")
    if (!member.kickable) return message.channel.send("I cant do that because they are too powerful !")
    if (!argument[0]) return message.channel.send("You must specify your bro in this command!")

    let reason = argument.slice(1).join(" ") || 'No reason given.'

    const dmEmbed = new MessageEmbed()
    .setDescription(`:muscle:   You were **KICKED** from ${message.guild.name} | ${reason}`)
    .setColor("LUMINOUS_VIVID_PINK")

    const embed = new MessageEmbed()
    .setDescription(`:muscle:   ${member} has been **KICKED** | ${reason}`)
    .setColor("LUMINOUS_VIVID_PINK")

    member.send({ embeds: [dmEmbed] }).catch(err => {console.log("This user is an introvert !")})

    member.kick().catch(err => {message.channel.send("There was an error kicking this member.")})

    message.channel.send({ embeds: [embed] })

}

// Ban command
if (command === 'ban') {
    const member = message.mentions.members.first() || message.guild.members.cache.get(argument[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === argument.slice(0).join(" ") || x.user.username === argument[0])
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You cant do that HAHAHA.")
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I cant do that")
    if (message.member === member) return message.channel.send("That's commit suicide bro ... DONT DO THAT AGAIN!!")
    if (!member.kickable) return message.channel.send("I cant do that because they are too powerful !")
    if (!argument[0]) return message.channel.send("You must specify your bro in this command !")

    let reason = argument.slice(1).join(" ") || 'No reason given.'

    const dmEmbed = new MessageEmbed()
    .setDescription(`:muscle:   You were **BANNED** from ${message.guild.name} | ${reason}`)
    .setColor("LUMINOUS_VIVID_PINK")

    const embed = new MessageEmbed()
    .setDescription(`:muscle:   ${member} has been **BANNED** | ${reason}`)
    .setColor("LUMINOUS_VIVID_PINK")

    member.send({ embeds: [dmEmbed] }).catch(err => {console.log("This user is an introvert !")})

    member.ban().catch(err => {message.channel.send("There was an error banning this member.")})

    message.channel.send({ embeds: [embed] })

}


// Purge command

if (command === 'purge') {

    const amount = parseInt(args[0])

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You cant do that HAHAHA.");
    if (!amount) return message.channel.send("Please specify the amount of messages you want to delete.");
    if (amount > 100 || amount < 1) return message.channel.send("Please select a number *between* 1 and 100.");

    message.channel.bulkDelete(amount + 1).catch(err => {
        message.channel.send("Due to Discord Limitations, I cant delete messages older than 14 days.")
    })

    //embed for purge 
    
    // const embed = new MessageEmbed()
    // .setColor("LUMINOUS_VIVID_PINK")
    // .setDescription(`**${amount}** messages were **SUS** so I deleted them :eyes:`)

    // message.channel.send({ embeds: [embed] })
    
}


// Steal

if(command === 'steal'){

    if (!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send("You cant do that HAHAHA.")
    if (!args.length) return message.channel.send("Please send an emoji steal !")

    for (const emojis of args) {
        const parsedEmoji = Discord.Util.parseEmoji(emojis);
        if (parsedEmoji.id) {
            const extension = parsedEmoji.animated ? ".gif" : ".png"
            const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`
            const emojiName = argument.slice(1).join(" ");

            message.guild.emojis
            .create(
                url,
                emojiName || parsedEmoji.name
            )
            .then(emoji => {

                const embed =new MessageEmbed()
                .setColor("LUMINOUS_VIVID_PINK")
                .setDescription(`Added ${emoji}, with the name "${emojiName}"`)

                message.channel.send({ embeds: [embed] })

            }).catch(err => {message.channel.send("There was an error ! This may be because your server has reached emoji limit.")})
        }
    }


}

// Mute

if (command === 'mute'){
    
    const muteRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes("muted"))
    const muteUser = message.mentions.members.first();
    const muteReason = argument.slice(1).join(" ") || `No Reason Given.`

    if (!argument[0]) return message.channel.send("You must specify someone in this command !");
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You cant do that HAHAHA.");
    if (!muteUser) return message.channel.send("You have to mention a valid member to mute.");
    if (!muteRole) return message.channel.send("There is no role called muted.")

    muteUser.roles.add(muteRole).catch(err => {console.log("Error.")})

    const embed = new MessageEmbed()
    .setColor("LUMINOUS_VIVID_PINK")
    .setDescription(`:muscle:   ${muteUser.user.username} was **MUTED** | ${muteReason} `)

    const dmEmbed = new MessageEmbed()
    .setColor("LUMINOUS_VIVID_PINK")
    .setDescription(`:muscle:   You were **MUTED** in ${message.guild.name} | ${muteReason} `)

    message.channel.send({ embeds: [embed] })
    muteUser.send({ embeds: [dmEmbed] }).catch(err => {console.log('This user is an introvert !')}) 


}

// Random roast

if (command === 'roast') {
    message.channel.send(randomRoast[getRandomInt(randomRoast.length)]);
  }


})




client.login("TOKEN")