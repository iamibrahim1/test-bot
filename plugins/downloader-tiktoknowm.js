import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) throw 'Masukkan Link'
try {
    let listSections = []
	listSections.push(['No. ' + ++index, [
           ['Method A', usedPrefix + command + ' ' + args[0] + ' a', '\n⌚ *By:* ' + author],
           ['Method B', usedPrefix + command + ' ' + args[0] + ' b', '\n⌚ *By:* ' + author],
           ['Method C', usedPrefix + command + ' ' + args[0] + ' c', '\n⌚ *By:* ' + author]
                  ]])
        if (args[0]) return conn.sendList(m.chat, htki + ' 📺 Tiktok Search 🔎 ' + htka, `⚡ Please select Tiktok Search in the button below...\n*Text you send:* ${args[0]}\n\nRetype *${usedPrefix + command}* your text to change the text again`, author, `☂️ Tiktok Search Here ☂️`, listSections, m)

if (args[1] == 'a') {
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.send2ButtonVid(m.chat, json.result.link, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
    }
    if (args[1] == 'b') {
    let res = await fetch(`https://api.lolhuman.xyz/api/tiktok2?apikey=${global.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.send2ButtonVid(m.chat, json.result.link, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
    }
    if (args[1] == 'c') {
    let res = await fetch(`https://api.lolhuman.xyz/api/tiktok3?apikey=${global.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.send2ButtonVid(m.chat, json.result.link, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
    }
    } catch (e) {
    throw eror
    }
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader', 'premium']
handler.command = /^(tiktoknowm)$/i
handler.premium = false
export default handler
