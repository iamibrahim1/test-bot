let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `There is no voting in this group!`, author, null, [
    ['vote', `${usedPrefix}+vote`],
    ['menu', `${usedPrefix}menu`]
], m)
    delete conn.vote[id]
    m.reply(`Berhasil!`)
}
handler.help = ['deletevote']
handler.tags = ['vote']
handler.command = /^(delete|hapus|-)vote$/i

export default handler
