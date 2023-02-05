
import fetch from 'node-fetch'
import { szippydl } from '../lib/scrape.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} zippy share download link`
   let res = await szippydl(args[0])
   let done = `*title:* ${res.title}
*extension:* ${res.extension}
*filesize:* ${res.filesize}
*upload:* ${res.upload}
*link:* ${res.link}`
 if (res.link) return conn.send2ButtonDoc(m.chat, done, author, '🔖 Get', usedPrefix + 'get ' + res.link, 'ℹ️ Menu', '.menu', fakes, adReply)
 else throw eror
}
handler.help = ['zippyshare'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(zippy(share)?(ser)?(sher)?(sare)?)$/i

export default handler
