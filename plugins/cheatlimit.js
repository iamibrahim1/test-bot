import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let cit = ['money',
'limits',
'levels',
'limits',
'exp',
'potions',
'aqua',
'trash',
'wood',
'rock',
'strings',
'iron',
'diamonds',
'emeralds',
'gold',
'coals',
'common',
'uncommon',
'mythic',
'legendary',
'foodpet',
'Fox',
'dragon',
'pets',
'wine',
'Apple',
'rock',
'diamond',
'vineyard',
'bibitapel',
'orange seeds',
'mango seeds',
'banana seeds',
'bottle',
'centaur',
'electionrb',
'gold bars',
'gold usual',
'exp',
'gardenboc',
'gardenboxs',
'griffin',
'healthmonster',
'orange',
'can',
'cardboard box',
'wood',
'take',
'koinexpg',
'cat',
'horse',
'kyubi',
'centaur food',
'griffin food',
'kyubi food',
'food dragon',
'petfood',
'foodphonix',
'mango',
'inducement',
'phonix',
'banana',
'change',
'rubbish',
'wolf',
'swords',
'ticketcoin',
'bait']
let user = global.db.data.users[m.sender]

    let listSections = []
	Object.keys(cit).map((v, index) => {
	listSections.push([htki + 'Cheat Num. ' + ++index + ' ' + htka, [
          ['Infinity ' + cit[v], usedPrefix + command +' cheat ' + cit[v], '\n⌚ *Desc:* To chat ' + cit[v]]
        ]])
	})
	if (!args[0]) return conn.sendList(m.chat, htki + ' 📺 Cheat Infinity 🔎 ' + htka, `⚡ Please select Cheat in the button below...\n*Text to send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change the text again`, author, `☂️ Cheat Here☂️`, listSections, m)
	if (args[0] == 'cheat') {
		conn.reply(m.chat, `*Succes Cheat Infinity ${args[1]}*`, fakes, fakefb)
		user[args[1]] = Infinity
		}
}
handler.help = ['cheat'].map(v => v + ' *hehe..*')
handler.tags = ['xp']
handler.command = /^(cheat)$/i
handler.private = true

export default handler
