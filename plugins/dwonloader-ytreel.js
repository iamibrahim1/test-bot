import axios from 'axios'
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Usage : ${usedPrefix + command} likee_url_video*\n\nExample :\n${usedPrefix + command} yt short reel`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		let anu = await fetch(`https://api.zeeoneofc.xyz/api/downloader/youtube-video?url=${text}&apikey=${global.keysxxx}`)
		let json = await anu.json()
		await conn.sendMessage(m.chat, { video: { url: json.result.download }, caption: json.result.title }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`Invalid likee url.`)
	}
}

handler.help = ['ytreel'].map(v => v + ' <url>')
handler.tags = ['downloader', 'premium']
handler.command = /^(ytreel)$/i
handler.premium = true
export default handler
