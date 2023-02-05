import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, conn, usedPrefix, command }) {
await conn.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = await conn.getName(m.sender)
	let namamu = namae ? namae : 'Gapunya Nama'
	
	const sections = [
	{
	title: htjava + " 𝙲𝙷𝙾𝙾𝚂𝙴 𝚈𝙾𝚄𝚁 𝙰𝙶𝙴" + htjava,
	rows: [
	    {title: " A C A K ", rowId: '.daftar ' + namamu + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: htki + " 𝙰𝙻𝚁𝙴𝙰𝙳𝚈 𝙾𝙻𝙳 " + htka,
	rows: [
	    {title: emojis + " 30 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.30 '},
	    {title: emojis + " 29 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.29 '},
	    {title: emojis + " 28 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.28 '},
	{title: emojis + " 27 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.27 '},
	{title: emojis + " 26 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.26 '},
	{title: emojis + " 25 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.25 '},
	{title: emojis + " 24 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.24 '},
	{title: emojis + " 23 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.23 '},
	{title: emojis + " 22 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.22 '},
	{title: emojis + " 21 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.21 '}
	]
    },
    {
	title: htki + " 𝗠𝗔𝗦𝗜𝗛 𝗠𝗨𝗗𝗔 " + htka,
	rows: [
	    {title: emojis + " 20 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.20 '},
	    {title: emojis + " 19 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.19 '},
	    {title: emojis + " 18 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.18 '},
	{title: emojis + " 17 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.17 '},
	{title: emojis + " 16 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.16 '},
	{title: emojis + " 15 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.15 '},
	{title: emojis + " 14 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.14 '},
	{title: emojis + " 13 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.13 '},
	{title: emojis + " 12 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.12 '},
	{title: emojis + " 11 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.11 '},
	{title: emojis + " 10 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.10 '},
	{title: emojis + " 9 ʏᴇᴀʀꜱ", rowId: '.daftar ' + namamu + '.9 '}
	]
    },
]

const listMessage = {
  text: 'Please select your age at the bottom button...',
  footer: `*ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔> Want a custom name? type *${usedPrefix + command} name.age*\nEx. ${usedPrefix + command} ${conn.getName(m.sender)}|18`,
  title: htki + ' ʀᴇɢɪsᴛᴇʀ ' + htka,
  buttonText: "Click Here !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] You are already registered\Want to re-register? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
 if (!name) throw 'Name cannot be empty (Alphanumeric)'
   if (!age) throw 'Age cannot be empty (Number)'
  age = parseInt(age)
if (age > 30) throw '*No way!*,\nIts so old already 🗿'
   if (age < 5) throw '*No!*,\nLot of pedos 🗿'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `*${htki} ᴜsᴇʀs ${htka}*
${dmenub} *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
${dmenub} *ɴᴀᴍᴇ:* ${name}
${dmenub} *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
${dmenub} *sɴ:* ${sn}
${dmenuf}

ᴜꜱᴇʀ ᴅᴀᴛᴀ ꜱᴛᴏʀᴇᴅ ɪɴ ʙᴏᴛ ᴅᴀᴛᴀʙᴀꜱᴇ, ɢᴜᴀʀᴀɴᴛᴇᴇᴅ ꜱᴇᴄᴜʀᴇ ᴡɪᴛʜᴏᴜᴛ ꜱʜᴀʀᴇ (. ❛ ᴗ ❛.) ${cmenua}
`
    conn.send2ButtonDoc(m.chat, cap, author, 'ᴍᴇɴᴜ', '.menu', 'ᴅᴏɴᴀsɪ', '.donasi', fakes, adReplyS)
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(register|verify|daftar|reg(is)?|verif)$/i

export default handler
