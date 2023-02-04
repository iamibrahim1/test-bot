let { MessageType, Presence } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { command, conn, text }) => {
	this.anonymous = this.anonymous ? this.anonymous : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let room = Object.values(this.anonymous).find(room => room.check(who))
	if (!room) throw 'you are not in anonymous chat'
	let other = room.other(who)
  var name
  if (text) name = text
  else name = conn.getName(m.sender)
	var number = who.split('@')[0]
	let tks = `➔ Nomor: ${m.sender.split`@`[0]}
➔ Nama: ${name}`
    this.reply(m.chat, 'Sending Contacts...')
	if (other) this.reply(other, `Partner sends you contacts`)
	if (other) this.sendHydrated(other, `${htki} ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛs ${htka}`, tks, await conn.profilePictureUrl(m.sender, 'image').catch(_ => './thumbnail.jpg'), `wa.me/${m.sender.split`@`[0]}`, 'ᴛᴜʀɴ ᴄʜᴀᴛ ᴘᴀʀᴛɴᴇʀ', null,null, [['ʟᴇᴀᴠᴇ', '.leave'],[null,null],[null,null]], 0,  { mentionedJid: [m.sender]})
}
handler.help = ['sendcontact']
handler.tags = 'anonymous'
handler.command = /^(send contact)$/i
handler.private = true

export default handler
