import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} titkok slideshow video url`
	if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkey}&url=${text}`)
		let anu = await res.json()
		if (anu.status != '200') throw Error(anu.message)
		anu = anu.result
		if (anu.length == 0) throw Error('Error : no data')
		let c = 0
		for (let x of anu) {
			if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `Sending 1 of ${anu.length} image slide.\n_(The rest will be sent via private chat.)_` }, { quoted : m })
			else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
			c += 1
		}
	} catch (e) {
		console.log(e)
		throw `invalid slideshow url / media isn't available.`
	}
}

handler.menu = ['tiktokslide <url>']
handler.tags = ['search']
handler.command = /^((tt|tiktok)slide)$/i

handler.premium = true
handler.limit = true

export default handler
