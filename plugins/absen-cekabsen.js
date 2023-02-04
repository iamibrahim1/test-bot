
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, `_*There are no absences in this group!*_\n\n*${usedPrefix}startabsent* - to start absent`, author, null, [
                ['Startabsent', `${usedPrefix}startabsent`]
            ], m)
            
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*${htjava} DATE ${htjava}*\n${date}
${conn.absen[id][2]}

*${htjava} ALREADY ABSENT ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${dmenuf}
`
`
await conn.sendButton(m.chat, caption, author, null, [['absent', `${usedPrefix}absent`], ['checkattendance', `${usedPrefix}checkattendance`]], m, { mentions: conn.parseMention(caption) })

}
handler.help = ['checkattendance']
handler.tags = ['absent']
handler.command = /^checkattendance$/i
handler.group = true
export default handler
