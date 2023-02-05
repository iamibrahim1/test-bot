import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
  if (command == 'xnxxsearch') {
  if (!text) throw `Example of use ${usedPrefix}${command} japan`
  let links = `https://api.lolhuman.xyz/api/xnxxsearch?apikey=${global.lolkey}&query=${text}`
let f = await fetch(links)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Title *${v.title}*
Link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], fakes, adReply)
    }
    
    if (command == 'xnxxdl') {
    if (!args[0]) throw `Example of use ${usedPrefix}${command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
    try {
  let json = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=${global.lolkey}&url=${text}`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}
  *duration:* ${x.result.duration}
  *view:* ${x.result.view}
  *rating:* ${x.result.rating}
  *like:* ${x.result.like}
  *dislike:* ${x.result.dislike}
  *comment:* ${x.result.comment}
  *tag:* ${Array.from(x.result.tag)}
  *description:* ${x.result.description}
  `
conn.sendFile(m.chat, x.result.link[2].link, 'asupan.mp4', caption, m)
} catch (e) {
throw eror
}
}

}

handler.help = ['xnxxdl', 'xnxxsearch'].map(v => v + ' <app>')
handler.command = ['xnxxsearch', 'xnxxdl']
handler.tags = ['nsfw']

export default handler
