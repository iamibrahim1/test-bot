import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `No hashes`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'You do not have permission to remove this sticker prompt'
    delete sticker[hash]
    let str = `*Successfully removed CMD!*`
    conn.reply(m.chat, str, m, { contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hi, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}


handler.help = ['cmd'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database', 'premium']
handler.command = ['delcmd']
handler.premium = true

export default handler
