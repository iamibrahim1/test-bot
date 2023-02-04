let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `_*There are still absences in this chat!*_\n\n*${usedPrefix}deleteabsent* - to delete absences`, author, null, [
                ['deleteabsent', `${usedPrefix}deleteabsent`]
            ], m)
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Successfully started roll call!\n\n*${usedPrefix}absent* - for absent\n*${usedPrefix}checkattendance* - to check attendance\n*${usedPrefix}deleteabsent* - to delete attendance data`, author, null, [
                ['absent', `${usedPrefix}absent`]
            ], m),
        [],
        text
    ]
}
handler.help = ['startabsent [task]']
handler.tags = ['absent']
handler.command = /^startabsent$/i
handler.group = true
handler.admin = true
export default handler
