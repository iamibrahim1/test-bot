import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw `Reply to stickers with commands *${usedPrefix + command}*`
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    if (!text) throw `Use:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} test`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (sticker[hash] && sticker[hash].locked) throw 'You do not have permission to change the order of this sticker'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    let str = `*Successfully Set CMD!*`
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


handler.help = ['cmd'].map(v => 'set' + v + ' <teks>')
handler.tags = ['database', 'premium']
handler.command = ['setcmd']
handler.premium = true

export default handler
