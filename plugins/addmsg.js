const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `reply to messages with commands *${usedPrefix + command}*`;
	if (!text) throw `v: ${usedPrefix + command} <teks>\n\nExample:\n${usedPrefix + command} test`;
	let msgs = global.db.data.msgs
	if (text in msgs) throw `'${text}' has been registered in the List Msg`
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
	m.reply(`managed to add ${text} to List Msg.\n\nakks by typing his name`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'stiker', 'gif'].map(v => 'add' + v + ' <test>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/

export default handler
