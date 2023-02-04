let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'The user doesnt exist in the database'
    m.reply(`${global.db.data.users[who].joinlimit} Join Limit Left=͟͟͞͞🏀`)
}
handler.help = ['joinlimit [@user]']
handler.tags = ['xp']
handler.command = /^(joinlimit)$/i
export default handler 
