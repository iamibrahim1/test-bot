let handler = async (m, { conn, text }) => {
  if (!text) return
  let who = m.mentionedJid[0]
  if (!who) throw 'Tag one'
  let txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}
handler.help = ['save'].map(v => v + ' @mention <ContactName>')
handler.tags = ['owner']

handler.command = /^save$/

export default handler
