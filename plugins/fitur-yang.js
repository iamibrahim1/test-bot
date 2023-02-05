let handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

if (!text) throw `Example:
${usedPrefix + command} Which is up`
let em = ['😀','😂','😃','🗿','🤤','😁','😐','🙂','☹️']

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let am = em.getRandom()
    conn.sendButton(m.chat, `The most *${text}* Is ${toM(a)} ${am}`, author, null, [['search again', '.yang ' + text]], m,{mentions: [a]})
    
}
handler.help = ['Which '].map(v => v + ' <text>')
handler.command = ['Which']
handler.tags = ['fun']

handler.group = true

export default handler
