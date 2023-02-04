// Jangan buly saya om saya cuma bercanda:)


let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Question:* ${m.text}
*Answer:* ${pickRandom(['Yes','Definitely','Definitely can','No','Of course not','Definitely not'])}
`.trim(), m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}
handler.help = ['Is that true'].map(v => v + ' <text>')
handler.tags = ['shell']
handler.command = /^Isthattrue/i
handler.owner = false

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

