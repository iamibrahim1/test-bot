import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
if (!text) throw '*Masukkan link*\n Example: https://soundcloud.com/prodkinka/snk'
let res = await axios('https://violetics.pw/api/downloader/soundcloud?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 Quality: ' + v.name,
		description: '\n⌚ Host: ' + json.result.hosting + '\n⏲️ Title: ' + json.result.meta.title + '\n⏲️ Duration: ' + json.result.meta.duration + '\n📎 URL: ' + v.url + '\n\n📎 Player URL: ' + json.result.player.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Here☂️`,
		description: `⚡ Hai ${name}, Please select ${command} Search in the button below...\n*Text to send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change the text again`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	} catch {
	if (!text) throw '*Insert links*\n Example: https://soundcloud.com/prodkinka/snk'
let res = await axios('https://violetics.pw/api/downloader/soundcloud?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.dlink
	conn.sendFile(m.chat, json.result.dlink, json.result.title + '.mp3', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${json.result.title}
`.trim(), m, null, { fileLength: fsizedoc, seconds: fsizedoc, mimetype: 'audio/mp4', contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hi, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(json.result.thumb)).buffer(),
    sourceUrl: json.result.dlink
     }}
  })
	}
}
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^s(oundcloud(d(own|l))?|cd(own|l))$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler
