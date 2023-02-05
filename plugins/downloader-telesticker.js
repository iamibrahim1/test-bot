import xfar from 'xfarr-api'
import { stickerTelegram } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

try {
	if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let ras = await xfar.downloader.telesticker(args[0])
		await m.reply(`Sending ${ras.length} stickers...`)
	let row = Object.values(ras).map((v, index) => ({
		title: `📌 Tele Sticker: ${1 + index}`,
		description: '\nBy: ' + author,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Here ☂️`,
		description: `⚡ Hi ${name}, Please select ${command} Search in the button below...\n*Text to send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change the text again`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	} else if (args && args.join(' ')) {
		let [query, page] = args.join(' ').split('|')
		let ris = await stickerTelegram(query, page)
		if (!ris.length) throw `Query "${args.join(' ')}" not found`
		m.reply(ris.map(v => `*${v.title}*\n_${v.link}_`).join('\n\n'))
	} else throw 'Input Query / Telesticker Url'
	} catch {
	if (!text) throw '*Enter links*\n Example: https://t.me/addstickers/LINE_Menhera_chan_ENG'
let ros = await axios('https://api.lolhuman.xyz/api/telestick?apikey=${global.lolkey}&url=' + text)
let json = ros.data
let dapet = json.result.sticker
	let row = Object.keys(dapet).map((v, index) => ({
		title: `📌 Tele Sticker: ${1 + index}`,
		description: '\n⏲️ Name: ' + json.result.name + '\n⏲️ Title: ' + json.result.title,
		rowId: usedPrefix + 'get ' + dapet[v]
	}))
	let button = {
		buttonText: `☂️ ${command} Search Here  ☂️`,
		description: `⚡ Hi ${name}, Please select ${command} Search in the button below...\n*Text to send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change the text again`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	}
}
handler.help = ['telesticker']
handler.tags = ['downloader']
handler.command = /^(telestic?ker|stic?kertele)$/i

export default handler
