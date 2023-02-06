
import { toDataURL } from 'qrcode'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (!text && m.quoted && m.quoted.text) text = m.quoted.text

let caption = `Here is the result of the ${command}
Reply to this message to read Qr Type *.readqr* `
await conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', caption, m)

}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <text>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i


export default handler
