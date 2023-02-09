const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `reply to the message with the command *${usedPrefix + command}*`;
if (!text) throw `usage: ${usedPrefix + command} <text>\n\nexample:\n${usedPrefix + command} test`;
let msgs = global.db.data.msgs
if (text in msgs) throw `'${text}' has been registered in List store`
msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
m.reply(`successfully added ${text} to List Store.\n\naccess by typing the name`.trim())
}
handler.help = ['list'].map(v => 'add' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^addlist$/i

handler.group = true
handler.admin = true

export default handler
