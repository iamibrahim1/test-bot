let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `use *${usedPrefix}liststore* to see a list of saved messages.`
let msgs = global.db.data.msgs
if (!(text in msgs)) throw `'${text}' is not registered in the message list.`
delete msgs[text]
m.reply(`\n [💬] successfully deleted the message in the List with the name '${text}'.\n`)
}
handler.help = ['list'].map(v => 'del' + v + ' <text>')
handler.tags = ['store']
handler.command = /^dellist$/i
handler.group = true
handler.admin = true
export default handler
