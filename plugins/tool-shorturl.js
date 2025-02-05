// ❗ ATUR APIKEYNYA DULU SEBELUM LAPOR OWNER!

import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
	let title = `— *S H O R T E D  U R L* —`
    let caption = 'Please select the URL type, sis'
const sections = [
   {
	title: htki + " TYPE URL " + htka,
	rows: [
	    {title: "TinyUrl", rowId: ".short " + args[0] + " tinyurl"},
	    {title: "LinkPoi", rowId: ".short " + args[0] + " linkpoi"},
	    {title: "Bitly", rowId: ".short " + args[0] + " bitly"},
	    {title: "OuO", rowId: ".short " + args[0] + " ouo"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: null,
  title: title,
  buttonText: "Shorted Link",
  sections
}

if (!args[0]) return m.reply('Wheres the link?')
if (!args[0].startsWith('https://')) throw 'Enter url with *https://* prefix'
if (!args[1]) return conn.sendMessage(m.chat, listMessage, { quoted: m })

let tesk = '🚀 *ʟɪɴᴋ:* '
let pros = '_*ᴄ ᴏ ɴ ᴠ ᴇ ʀ ᴛ ɪ ɴ ɢ . . .*_'
//TINY
if (args[1] == "tinyurl") {
try {
	let tiny = await (await fetch(`https://hardianto.xyz/api/short/tinyurl?url=${args[0]}&apikey=hardianto`)).json()
m.reply(pros).then(_ => conn.reply(m.chat, `${tesk}${tiny.result}`,m))
} catch {
m.reply(pros).then(_ => conn.reply(m.chat, `${tesk}${await shortUrl(args[0])}`,m))
}
}
//--------------

//LINKPOI
if (args[1] == "linkpoi") {
	let poi = await(await fetch(`https://linkpoi.ga/api.php?url=${args[0]}`)).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${poi.shorturl.replace('\/','/')}`,m))
}
//------------

//BITLY
if (args[1] == "bitly") {
	let bit = await (await fetch(global.API('xteam', '/shorturl/bitly', { url: args[0] }, 'apikey'))).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${bit.result.link}`,m))
}
//------------

//OuO
if (args[1] == "ouo") {
	let ouo = await (await fetch(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${lolkey}&url=${args[0]}`)).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${ouo.result}`,m))
	}
}
handler.help = ['short <url> <type>']
handler.tags = ['internet']
handler.command = /^(short(url)?)$/i

export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
