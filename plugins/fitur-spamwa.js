let handler = async (m, { conn, text }) => {

let [number, message, amount] = text.split('|')
if (!number) throw '*[ ⚠️ ] PLEASE ENTER THE NUMBER TO SPAM THE MESSAGE!*\n*CORRECT USE:*\n*—◉ #spamwa number|text|amount*\n*amount:*\n *—◉ #spamwa 923xxxxxxxxx|hi :v|25*'
if (!message) throw '*[ ⚠️ ] PLEASE PUT THE MESSAGE INTO SPAM!*\n*USE CORRECT:*\n*—◉ #spamwa number|text|amount*\n*EXAMPLE:*\n*—◉ #spamwa 923xxxxxxxxx|respond :v|25*'
if (!amount&& isNaN(amount)) throw '*[ ⚠️ ] QUANTITY MUST BE A NUMBER!*\n*PROPER USE:*\n*—◉ #spamwa number|text|amount*\n*EXAMPLE:*\n *—◉ #spamwa 923xxxxxxxxx|respond :v|25*'

let fixedNumber = number.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = amount ? amount * 1 : 10
if (fixedJumlah > 10) throw '*[ ⚠️ ] TOO MANY MESSAGES! QUANTITY MUST BE LESS THAN 10 MESSAGES*️'
await m.reply(`*[❗] SPAM MESSAGE TO NUMBER ${number} WAS SUCCESSFULLY DONE*\n*NUMBER SENT:*\n*—◉ ${fixedJumlah} waktu!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, message.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
handler.private = true
handler.limit = true
export default handler
