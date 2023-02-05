import { wikipedia } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
try {
  if (!text) throw `Example of using ${usedPrefix}${command} Minecraft`
  let json = await wikipedia(text)
  m.reply(`*JUDUL*
${json.title}
*LINK:*
${json.img}

*Article:*
${json.articles}
`.trim())
} catch (e) {
m.reply("Not found")
 }
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['education']
handler.command = /^(wiki|wikipedia)$/i

export default handler
