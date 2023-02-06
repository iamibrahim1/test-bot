import { dafontSearch, dafontDown } from '../lib/dafont.js'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Please Enter Queries'
  if (command == 'dafonts') {
  try {
    let res = await dafontSearch(text)
	let row = Object.values(res).map((v, index) => ({
		title: v.judul,
		description: '\n⌚ style: ' + v.style + '\n⏲️ total: ' + v.total + '\n📎 link: ' + v.link,
		rowId: usedPrefix + 'dafontsdown ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Please select ${command} Search in the button below...\n*Text to send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change text again`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	} catch (e) { throw eror }
}

if (command == 'dafontsdown') {
try {
let res = await dafontDown(text)
let row = Object.values(res).map((v, index) => ({
		title: v.judul,
		description: '\n⌚ style: ' + v.style + '\n⏲️ isi: ' + v.isi + '\n⏲️ output: ' + v.output + '\n📎 down: ' + v.down,
		rowId: usedPrefix + 'get ' + v.down
	}))
	let button = {
		buttonText: `☂️ ${command} Search Here ☂️`,
                description: `⚡ Please select apkpure ${command} in the button below...\n*Text to send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change the text again `,		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	} catch (e) { throw eror }
}

}
handler.tags = ['tools']
handler.command = ['dafonts', 'dafontsdown']
handler.owner = false

handler.exp = 0
handler.limit = true

export default handler
