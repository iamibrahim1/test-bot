
let handler = async (m, { conn, text, args, usedPrefix, command }) => {

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
if (!b[1]) throw 'Format\n' + usedPrefix + command + ' halo |ya|gak'
if (b[12]) throw 'Most options, Format\n' + usedPrefix + command + ' halo |ya|gak'

for (let c = 1; c < b.length; c++) {
a.push([b[c]])
			}
			
			let cap = `*Polling Request By* ${name}\n*Message:* ${text.split('|')[0]}`
			return conn.sendPoll(m.chat, cap, a, m)

}
handler.help = ['poll questions|options|options']
handler.tags = ['group'] 
handler.command = /^po(l((l?ing|ls)|l)|ols?)$/i

export default handler
