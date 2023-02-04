let handler = async (m, { conn, text, usedPrefix, command }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let caption = `*${conn.getName(m.sender)}* @${m.sender.split("@")[0]} *Now again AFK*\n*With Reason*${text ? ': ' + text : ''}`
    let kataafk = ['want to sleep', 'want to help', 'To grandpas house', 'take care of the candle', 'buy ice pop', 'elope', 'play marbles', 'hide and seek', 'push renk', 'push up joni ', 'exercise', 'masturbation', 'beraq', 'open bo', 'asked by mother', 'work']
    conn.sendButton(m.chat, caption, wm, null, [['Ikut Afk', '.afk ' + kataafk.getRandom()]], m, { mentions: conn.parseMention(caption) })
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.group = true
handler.command = /^afk$/i

export default handler
