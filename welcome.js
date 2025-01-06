const { MessageEmbed } = require("discord.js")

module.exports = client => {

    client.on('guildMemberAdd', member => {

        const channelID = '1030824513673367714'

        console.log(member)

        const message = `You will get 1 million $ <@${member.id}> !`

        const channel = member.guild.channels.cache.get(channelID)

        channel.send(message)

    })




}