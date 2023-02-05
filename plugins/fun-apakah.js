import fetch from 'node-fetch'
let handler = async (m, { text, args, command }) => {
  if (!args[0]) throw `Use example .${command} halo`
  m.reply(`
*Question:* ${m.text}
*Answers:* ${['Yes', 'Maybe so', 'Maybe', 'Probably not', 'No', 'Impossible'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['is'].map(v => v + ' <teks>')
handler.tags = ['shell', 'fun']
handler.command = /^is$/i

export default handler
