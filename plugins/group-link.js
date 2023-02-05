import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Can only be opened in groups'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Im not in that group 🗿'
    if (!me.admin) throw 'Im not admin bro 🗿'
    await conn.sendHydrated(m.chat, `*${htki} L I N K ${htka}*`, botdate, null, 'https://www.whatsapp.com/otp/copy/'+'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), 'C O P Y', nomorown, nameown, [
      ['LIST GROUP', '/listgroup'],
      ['ANTILINK', '/on antilink']
    ], null)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i


export default handler
