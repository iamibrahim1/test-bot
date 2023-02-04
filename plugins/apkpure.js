import { sandroid1 } from '../lib/scrape.js'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, 'Please Enter Queries', m)

  await m.reply('Searching...')
    let res = await sandroid1(text)
    let dapet = res.data
	let row = Object.values(dapet).map((v, index) => ({
		title: v.judul,
		description: '\n⌚ dev: ' + v.dev + '\n⏲️ rating: ' + v.rating + '\n👁️ thumb: ' + v.thumb + '\n📎 link: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ apkpure Search Here ☂️`,
		description: `⚡ Please select apkpure Search in the button below...\n*Text to send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change the text again`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['apkpure'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(apkpure)$/i
handler.owner = false

handler.exp = 0
handler.limit = true

export default handler
