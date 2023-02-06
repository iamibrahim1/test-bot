async function handler(m, { isAdmin, isOwner }) {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw false
        }
    }
  if (!m.quoted) throw 'reply to the message!'
     let q = this.serializeM(await m.getQuotedObj())
     if (!q.quoted) throw 'the message you replied to did not contain a reply!'
     await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q']
handler.tags = ['tools']
handler.command = /^q$/i

export default handler 
