let handler = async(m, {conn, command, usedPrefix, text}) => {
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let i = 0
  if (global.db.data.users[m.sender].catatan.length == 0) return m.reply('You don't have any notes yet!')
  let txt = '🗒️Note list\n\n'
  for (let ct in global.db.data.users[m.sender].catatan) {
    i += 1
    txt += '*' + i + '.* ' + global.db.data.users[m.sender].catatan[ct].title + '\n'
  }
  if (text.length == 0) return await conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/15e31900512863624ed57.jpg', txt, 'Usage:\n' + usedPrefix + 'seenote 1\nDelete record:\n' + usedPrefix + 'deletenote 1', 'Okey', 'Ok', m)
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  if (catatan.length == 0) return m.reply('You have no notes yet!')
  let n = Number(split[0]) - 1

  let isi = global.db.data.users[m.sender].catatan[n] != undefined ? global.db.data.users[m.sender].catatan[n].isi : 'Records not found!'
conn.reply(m.chat, `${isi}`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['delnote']
handler.tags = ['tools']
handler.command = /^delnote$/i

export default handler
