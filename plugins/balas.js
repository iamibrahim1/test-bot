import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let [number, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Please enter the number to be sent', m)
    if (!pesan) return conn.reply(m.chat, 'Please enter the message', m)
    if (text > 500) return conn.reply(m.chat, 'Long Text!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 SUCSESS 」*\n\nFrom : wa.me/${korban}\nMessage : ${pesan}\n\n${global.wm}`

    await conn.reply(korban + '@s.whatsapp.net', spam1, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    title: global.wm, 
    body: 'Hi, This is a reply to a message from the owner',  
    sourceUrl: snh, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })    

{

    let logs = `[!] Successfully sent message to number ${korban}`
    conn.reply(m.chat, logs, m)
}}
handler.command = /^(pesan|balas)$/i

export default handler
