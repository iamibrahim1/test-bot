import fetch from 'node-fetch'
const teks = '0 - Yes\n1 - No\n2 - I Dont Know\n3 - Maybe\n4 - Maybe No\n5 - Back to previous question'

export async function before(m) {
	if (global.db.data.users[m.sender].banned) return
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0
	let aki = global.db.data.users[m.sender].akinator
	if (!aki.sesi || m.quoted.id != aki.soal.key.id) return
	if (!somematch(['0','1','2','3','4','5'], m.text)) return this.sendMessage(m.chat, { text: `[!] Answer with numbers 1, 2, 3, 4, or 5\n\n${teks}` }, { quoted: aki.soal })
	let { server, frontaddr, session, signature, question, progression, step } = aki
	if (step == '0' && m.text == '5') return m.reply('You have reached the first question')
	let res, anu, soal
	try {
		if (m.text == '5') res = await fetch(`https://api.lolhuman.xyz/api/akinator/back?apikey=${global.lolkey}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
		else res = await fetch(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${global.lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${m.text}`)
		anu = await res.json()
		if (anu.status != '200') {
			aki.sesi = false
			aki.soal = null
			return m.reply('Akinator session expired.')
		}
		anu = anu.result
		if (anu.name) {
			await this.sendMessage(m.chat, { image: { url: anu.image }, caption: `🎮 *Akinator Answer* 🎮\n\nDia adalah *${anu.name}*\n_${anu.description}_`, mentions: [m.sender] }, { quoted: m })
			aki.sesi = false
			aki.soal = null
		} else {
			soal = await this.sendMessage(m.chat, { text: `🎮 *Akinator* 🎮\n_step ${anu.step} ( ${anu.progression.toFixed(2)} % )_\n\n@${m.sender.split('@')[0]}\n    ${anu.question}\n\n${teks}`, mentions: [m.sender] }, { quoted: m })
			aki.soal = soal
			aki.step = anu.step
			aki.progression = anu.progression
		}
	} catch (e) {
		aki.sesi = false
		aki.soal = null
		m.reply('Fitur Error!')
	}
	return !0
}

function somematch( data, id ){
	let res = data.find(el => el === id )
	return res ? true : false;
}
