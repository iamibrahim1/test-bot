import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'What are you looking for?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video 🎥', usedPrefix + 'ytv ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url],
          ['Audio 🎧', usedPrefix + 'yta ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
        ]])
	})
return conn.sendList(m.chat, htki + ' 📺 YT Search 🔎 ' + htka, `⚡ Please select YouTube Search in the button below...\n*Text to send:* ${text}\n\nType repeat *${usedPrefix + command}* your text to change the text again`, author, `☂️ YouTube Search Here ☂️`, listSections, m)}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^y(outubesearch|ts(earch)?)$/i

export default handler
