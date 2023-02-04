/**
 * Jangan Di Hapus!!
 * 
 * Buatan Zenss
 * Github: https://github.com/RaaaGH
 * 
 *
 *
 * Gatau Males Pengen Beli Truk
 *GW TAU GW KASI WM NNTI JUGA DI HAPUS 🗿🤟
 *
 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.confess = conn.confess ? conn.confess : {}
    if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nnumber|sender's name|message\n\n*Note:* sender's name can be a pseudonym or anonymous.\n\n*Example:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Name|Hello.\n\n「Ibrahim」`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*How to use :*\n\n${usedPrefix + command} number|sender's name|message\n\n*Note:* sender's name can be a pseudonym or anonymous.\n\n*Example:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Your father|Hello.\n\n「Ibrahim」`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Number not registered on WhatsApp.';
    if (jid == m.sender) throw 'can not send a message confess to yourself.'
    let mf = Object.values(conn.confess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let txt = `Hai @${data.jid.split('@')[0]},You received a confess message.\n\nFrom: *${name}*\nMessage: \n${pesan}\n\nWould you like to reply to this message? can sis. Sis, just type your message, I'll pass it on to *${name}*.`.trim();
        await conn.sendButton(data.jid, txt, wm, 0, [['Balas Pesan', '.balasconfess']], null)
        .then(() => {
            m.reply('Successfully sent message confess.')
            conn.confess[id] = {
                id,
                from: m.sender,
                Name: name,
                recipient: data.jid,
                message: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('eror');
    }
}
handler.tags = ['reply']
handler.help = ['confes'].map(v => v + ' <number|name|message>')
handler.command = /^(confes)$/i
handler.private = true

export default handler
