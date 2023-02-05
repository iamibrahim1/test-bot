import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
    let listSections = []
	listSections.push(['No. ' + ++index, [
         ['Method A', usedPrefix + command + ' a', '\n⌚ *By:* ' + author],
         ['Metode B', usedPrefix + command + ' b', '\n⌚ *By:* ' + author]
                  ]])
        if (!args[0]) return conn.sendList(m.chat, htki + ' 📺 Dark Search 🔎 ' + htka, `⚡ Please select Dark Search in the button below...\n*Text to send:* ${args[0]}\n\nRetype *${usedPrefix + command}* your text to change the text again`, author, `☂️ Dark Search Here ☂️`, listSections, m)

if (args[0] == 'a') {
let caption = `*⎔┉━「 Random darkjoke 」━┉⎔*
🤠 *Query* : ${command}`
        let images = global.API('xcdr', '/api/random/darkjoke', {}, 'apikey')
        await conn.sendButton(m.chat, caption, wm, images, [['Darkjoke','.darkjoke']] , m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
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
        if (args[0] == 'b') {
        let res = await bo.Darkjokes()
await conn.sendButton(m.chat, caption, wm, res, [['Darkjoke','.darkjoke']] , m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
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
} catch (e) {
    throw eror
    }
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke)$/i

export default handler
