let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) await conn.sendButton(m.chat, `*There are still votes in this chat!*`, author, null, [
                ['hapus', `${usedPrefix}-vote`]
            ], m)
            let caption = `${htjava} MULAI VOTE ${htjava}
${dmenub} *${usedPrefix}upvote* - to agree
${dmenub} *${usedPrefix}devote* - to disagree
${dmenub} *${usedPrefix}checkvote* - to check vote
${dmenub} *${usedPrefix}removevote* - to remove the vote
${dmenuf}`
            await conn.sendButton(m.chat, caption, author, null, [
                ['upvote', `${usedPrefix}upvote`],
                ['devote', `${usedPrefix}devote`]
            ], m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['startvote [reason]']
handler.tags = ['vote']
handler.command = /^(start|mulai|\+)vote$/i

export default handler
