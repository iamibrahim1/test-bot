let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `if you find an error message, report it using this command\n\nexample:\n${usedPrefix + command} good afternoon owner, I found an error like this <copy/tag the error message>`
     if (text.length < 10) throw `Report too short, at least 10 characters!`
     if (text.length > 1000) throw `Report too long, maximum 1000 characters!`
     let text = `*${command.toUpperCase()}!*\n\nFrom : *@${m.sender.split`@`[0]}*\n\nMessage : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Message sent to bot owner, if ${command.toLowerCase()} is just for fun it will not be responded._`)
}
handler.help = ['report'].map(v => v + ' <text>')
handler.tags = ['info']
handler.command = /^(reports|masalah|report?|lapor|bug[gs]|bug)$/i
export default handler
