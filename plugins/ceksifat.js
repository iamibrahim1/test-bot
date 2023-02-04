import fetch from 'node-fetch'

let handler = async (m, { conn, command, text }) => {

	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) return conn.reply(m.chat, 'Masukan Namamu Udin!', m)
    let nm = 10
    let a = nm.getRandom()
    let b = nm.getRandom()
    let e = nm.getRandom()
    let f = nm.getRandom()
    let g = nm.getRandom()
    let h = nm.getRandom()
   let c = ['Kind','Arrogant','Stingy','Generous','Humble','Humble','Shy','Coward','Nosy','Crybaby']. getRandom( )
     let d = ['Diligent','Lazy','Helping','Gossiping','Jail','Not clear','Shoping','Chattan with Doi','Chattan on WA because Single','Sad' ,'lonely','happy'].getRandom()

let cksft = `${cmenut} *CHARACTERISTIC ${text}* 🔖
│
${cmenub} Name : *${text}*
${cmenub} Good morals : *${a}%*
${cmenub} Bad Morals : *${b}%*
${cmenub} People who : *${c}*
${cmenub} Always : *${d}*
${cmenub} Intelligence : *${e}%*
${cmenub} Delinquency : *${f}%*
${cmenub} Courage : *${g}%*
${cmenub} Afraid : *${h}%*
${cmenuf}
`
let msdpn = ['You will be a Wealthy person, a harmonious family, have a ' + b + ' have children, have a ' + d + ' have a vehicle, have a ' + b + ' house','You will be a Simple person, a harmonious family, have ' + c + ' have children, have ' + a + ' have a vehicle, have ' + a + ' house','You will be poor, a simple family, have ' + a + ' children, do not have a vehicle , rented house','You will be a Simple person, divorced family, have ' + e + ' children, have ' + b + ' vehicle, have ' + b + ' house',' You will be a Simple person, simple family, have ' + b + ' children, have ' + b + ' vehicles, have ' + a + ' houses','You will be poor, divorced families have ' + b + ' children, have ' + a + ' vehicle, have a ' + a + ' house','You will be a Rich person, a Simple family, have a ' + a + ' child, have a ' + a + ' vehicle, have ' + b + ' home','You will be a Simple, Harmonious family, have ' + a + ' children, have ' + c + ' vehicles, have ' + a + ' houses',' you will be people who are poor, don't have a family (single), don't have children, don't have a car, don't have a house','You will be a simple person, a simple family, have ' + d + ' children, have ' + a + ' a vehicle, have a ' + b + ' home','You will be a Simple person, a chaotic family, childless (Failed), have a ' + b + ' vehicle, have a ' + a + ' home',' you will be Very Rich, Very Harmonious family, have ' + e + ' children, have ' + f + ' vehicles, have ' + g + ' houses','You will be Very Poor people, Simple families, have ' + g + ' child, no car, rented house','You will be a Rich man, Narrow family, have ' + b + ' child, have ' + b + ' vehicle, have ' + b + ' home','You will be a Simple person, Cheap family, have ' + a + ' children, have ' + a + ' vehicle, have ' + a + ' house',' you will be a Simple person, divorced family, have ' + b + ' children, have ' + a + ' vehicle, rented house','You will be a Very Simple person, Sakinah family, have ' + a + ' children , have ' + a + ' vehicle, have ' + a + ' house','You will be a Simple person, Very Simple family, have ' + a + '' + a + ' children, have ' + a + ' vehicle, have ' + a + ' house','You will be a Simple person, Very Simple family, have ' + b + ' twins, have ' + c + ' vehicle, have ' + b + ' house', 'You will be a Simple person Simple family, have ' + b + ' twins and ' + a + ' another child, have ' + a + ' vehicle, have ' + a + ' house'].getRandom()

if (command == 'ceksifat') {
await conn.sendButton(m.chat, cksft, author, await(await fetch(hwaifu.getRandom())).buffer(), [['🎀 Menu', '/menu']], m, { mentions: conn.parseMention(cksft), fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
  }
  if (command == 'masadepannya') {
  await conn.sendButton(m.chat, msdpn, author, await(await fetch(hwaifu.getRandom())).buffer(), [['🎀 Menu', '/menu']], m, { mentions: conn.parseMention(msdpn), fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Ha, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
  }
}
handler.help = ['checkproperties', 'future'].map(v => v + ' <nama>')
handler.tags = ['shell', 'fun']
handler.command = ['checkproperties', 'future']

export default handler
