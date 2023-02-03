
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `No absenteeism took place!`, author, null, [
        ['Startabsent', `${usedPrefix}startabsent`]
    ], m)
        throw false
    }
    
    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'You have been absent!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    
    let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*${htjava} DATE ${htjava}*\n${date}
${conn.absen[id][2]}

*${htjava} ABSENT LIST ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${dmenuf}
`
await conn.sendButton(m.chat, caption, author, null, [['absent', `${usedPrefix}absent`], ['checkattendance', `${usedPrefix}checkattendance`]], m, { mentions: conn.parseMention(caption) })


}
handler.help = ['absent']
handler.tags = ['absent']
handler.command = /^(absent|present)$/i

export default handler
