import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} snak_url_video*\n\nExample :\n${usedPrefix + command} url`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		let anu = await fetch(`https://api.lolhuman.xyz/api/snackvideo?apikey=${global.lolkey}&url=${text}`)
		let json = await anu.json()
		if (anu.status != '200') throw Error(anu.message)
		await conn.sendMessage(m.chat, { video: { url: json.result.link}, caption: json.result.title }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`Invalid likee url.`)
	}
}
handler.help = ['Snakvideo']
handler.tags = ['downloader']
handler.command = /^snakvideo$/i
