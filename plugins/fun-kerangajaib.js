let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm alien?`
    m.reply(`"${[
    'Maybe someday',
         'Not really',
         'Not both',
         'I do not think so',
         'Yes',
         'Try asking again',
         'There isnt any'
     ].getRandom()}."`)
}
handler.help = ['magicshells'].map(v => v + ' <text>')
handler.tags = ['shells', 'fun']

handler.command = /^(magicshells)?$/i

export default handler
