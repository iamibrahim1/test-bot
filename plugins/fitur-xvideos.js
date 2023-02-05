mport fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
  if (command == 'xvideossearch') {
  if (!text) throw `Example of use ${usedPrefix}${command} japan`
  let links = `https://api.zahwazein.xyz/searching/xvideos?apikey=${global.zenzkey}&query=${text}`
let f = await fetch(links)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Title *${v.title}*
Link: ${v.url}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], fakes, adReply)
    }
    
    if (command == 'xvideosdl') {
    if (!args[0]) throw `Example of use ${usedPrefix}${command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
    try {
  let json = await fetch(`https://api.zahwazein.xyz/downloader/xvideos?apikey=${global.zenzkey}&url=${text}`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}`
conn.sendFile(m.chat, x.result.files.high, 'asupan.mp4', caption, m)
} catch (e) {
throw eror
}
}

}

handler.help = ['xvideosdl', 'xvideossearch'].map(v => v + ' <app>')
handler.command = ['xvideossearch', 'xvideosdl']
handler.tags = ['nsfw']

export default handler
