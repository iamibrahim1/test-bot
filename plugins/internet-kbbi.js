import { kbbi } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) throw `Example use ${usedPrefix}${command} halo`
    try {
    const res = await kbbi(text)
    let caption = `
${res.map(v => `
*📌${v.title}*

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

Note:
p = Particle: word class which includes prepositions, conjunctions, interjections, articles, greetings
n = noun: noun
`.trim()
await conn.sendButton(m.chat, caption, wm, Buffer.alloc(0), [
                ['Next', `${usedPrefix + command}`]
            ], m)
} catch {
throw eror
}
}
handler.help = ['kbbi <text>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler
