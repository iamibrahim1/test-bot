import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (m.isGroup) return
	let aki = global.db.data.users[m.sender].akinator
	if (text == 'end') {
		if (!aki.sesi) return m.reply('You are not currently in an Akinator session')
		aki.sesi = false
		aki.soal = null
		m.reply('Successfully logged out of Akinator session.')
	} else {
		if (aki.sesi) return conn.reply(m.chat, 'You are still in an Akinator session', aki.soal)
		try {
			let res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${global.lolkey}`)
			let anu = await res.json()
			if (anu.status !== 200) throw Error('Emror')
			let { server, frontaddr, session, signature, question, progression, step } = anu.result
			aki.sesi = true
			aki.server = server
			aki.frontaddr = frontaddr
			aki.session = session
			aki.signature = signature
			aki.question = question
			aki.progression = progression
			aki.step = step
			let txt = `🎮 *Akinator* 🎮\n\n@${m.sender.split('@')[0]}\n${question}\n\n`
			txt += '0 - Yes\n'
                        txt += '1 - No\n'
                        txt += '2 - I don't know\n'
                        txt += '3 - Maybe\n'
                        txt += '4 - Maybe Not\n\n'
                        txt += `*${usedPrefix + command} end* to quit Akinator session`
			let soal = await conn.sendMessage(m.chat, { text: txt, mentions: [m.sender] }, { quoted: m })
			aki.soal = soal
		} catch (e) {
			console.log(e)
			m.reply('Fitur Error!')
		}
	}
}

handler.menu = ['akinator']
handler.tags  = ['game']
handler.command = /^(akinator)$/i

handler.limit = true

export default handler
