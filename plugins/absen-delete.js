let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, `_*There are no absences in this group!*_\n\n*${usedPrefix}startabsent* - untuk memulai absen`, author, null, [
                ['startabsent', `${usedPrefix}startabsent`]
            ], m)
    delete conn.absen[id]
    m.reply(`Done!`)
}
handler.help = ['deleteabsent']
handler.tags = ['absent']
handler.command = /^deleteabsent$/i
handler.group = true
handler.admin = true
export default handler
