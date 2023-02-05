
import fetch from 'node-fetch'
import fs from 'fs'

let toM = a => '@' + a.split('@')[0]
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let imgr = flaaa.getRandom()

if (command == 'when') {
return m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${(10).getRandom()} ${['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years', 'decades', 'centuries'.'].getRandom()} lagi ...
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}

if (command == 'will') {
return m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Yes', 'Maybe yes', 'Maybe', 'Maybe not', 'No', 'Impossible'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}

if (command == 'who') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    m.reply(`${toM(a)} He bang.🗿`, null, {
        mentions: [a]
    })
}

if (command == 'Why') {
return m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Because you are handsome', 'Because you are weeb :[', 'Because you were educated by revelation', 'Because I don't know', 'You have a genie', 'No way'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}

if (command == 'can') {
return m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}

if (command == 'mysterbox') {
let klb = `${pickRandom(['small', 'good', 'big'])}`
let klb1 = `${pickRandom(['small', 'good', 'big'])}`
let klb2 = `${pickRandom(['small', 'good', 'big'])}`
if (args[0] == 'small') {
let number1 = Math.floor(Math.random() * 10)
    let number2 = Math.floor(Math.random() * 100)
    let number3 = Math.floor(Math.random() * 1000)
    
    global.db.data.users[m.sender].limit += number1
    global.db.data.users[m.sender].exp += number2
    global.db.data.users[m.sender].money += number3
await conn.sendButton(m.chat, `*Result : ${args[0]}*
+ *${number1}* EXP Banh
+ *${number2}* Banh Limit
+ *${number3}* Money Banh`, wm, null, [
                ['Ngechit', `${usedPrefix}ngechit`]
            ], fakes, adReply)
}
if (args[0] == 'reasonable') {
let angka1 = Math.floor(Math.random() * 1000)
    let angka2 = Math.floor(Math.random() * 10000)
    let angka3 = Math.floor(Math.random() * 100000)
    
    global.db.data.users[m.sender].limit += angka1
    global.db.data.users[m.sender].exp += angka2
    global.db.data.users[m.sender].money += angka3
await conn.sendButton(m.chat, `*Result : ${args[0]}*
+ *${angka1}* EXP Banh
+ *${angka2}* Limit Banh
+ *${angka3}* Money Banh`, wm, null, [
                ['Ngechit', `${usedPrefix}ngechit`]
            ], fakes, adReply)
}
if (args[0] == 'big') {
let angka1 = Math.floor(Math.random() * 10000)
    let angka2 = Math.floor(Math.random() * 100000)
    let angka3 = Math.floor(Math.random() * 1000000)
    
    global.db.data.users[m.sender].limit += angka1
    global.db.data.users[m.sender].exp += angka2
    global.db.data.users[m.sender].money += angka3
await conn.sendButton(m.chat, `*Result : ${args[0]}*
+ *${angka1}* EXP Banh
+ *${angka2}* Limit Banh
+ *${angka3}* Money Banh`, wm, null, [
                ['Ngechit', `${usedPrefix}ngechit`]
            ], fakes, adReply)
}
await conn.sendButton(m.chat, `*Please select below:*
  ${command}`, wm, null, [
                ['🎁 Box A', `${usedPrefix + command} ${klb}`],
                ['🎁 Box B', `${usedPrefix + command} ${klb1}`],
                ['🎁 Box C', `${usedPrefix + command} ${klb2}`]
            ], fakes, adReply)
}

}
handler.command = handler.help = ['when', 'will', 'who is', 'why', 'could', 'mysterybox']
handler.tags = ['shell']

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
