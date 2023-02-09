let handler = async (m, { conn, usedPrefix, command }) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = await conn.getName(who)
	let chat = global.db.data.chats[m.chat]
	let msgs = global.db.data.msgs
	let msg = (Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi} }))
	let listSections = []
	Object.values(msg).map((v, index) => {
	listSections.push([htki + ' ' + ++index + ' ' + htka, [
          ['Pesan: ' + v.nama, usedPrefix + 'getmsg ' + v.nama, '\n\n' + htjava + '\n' + dmenub + ' *ID:* ' + v.key.id + '\n' + dmenub + ' *Type:* ' + Object.keys(v.message) + '\n' + dmenub + ' *Jid:* ' + (v.key.remoteJid).replace(/@.+/, '') + '\n' + dmenuf]
        ]])
	})
	if (chat.getmsg === false) return conn.sendButton(m.chat, `you must enable getmsg by clicking the button below`, wm, null, [['Turn on getmsg', '.on getmsg']], m)
if (msg[0]) return conn.sendList(m.chat, htki + ' 📺 LIST MESSAGE 🔎 ' + htka, `⚡ Hi ${name} Here is a list of menus available in List store...\nAccess directly by typing name`, author, `☂️ ${command} Click Here ☂️`, listSections, m)
else throw `\nThere are no menus in the store list yet.\nType *${usedPrefix + command} <text>* to add a menu list.\n`
}
handler.help = ['store'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(store|shop)?$/i

export default handler
