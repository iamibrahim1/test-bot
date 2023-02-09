let handler = async(m, { conn, command, usedPrefix, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
  let fail = 'Incorrect format, example:\n' + usedPrefix + command + ' ' + name + '|1. Cook\n2. Eat'
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return m.reply('Title not available!\n\nReason: Already used')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'title': title,
    'isi': isi
  }
  global.db.data.users[m.sender].catatan.push(cttn)
  conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/7989b4e60a9dedfcdbbec.jpg', `Record created successfully!\To view the record. Type: ${use Prefix}view notes`, wm, 'View notes', '.viewnotes', m)
}

handler.help = ['makeanote']
handler.tags = ['tools']
handler.command = /^(bu(kacatatan|at(note|ctt))|add(catatan|(note|ctt)))$/i

export default handler
