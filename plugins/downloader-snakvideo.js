
import fetch from 'node-fetch'

   let handler = async (m, { conn, args }) => {
	  if (!args[0]) throw 'Input URL'   
    let res = await fetch(`https://api.lolhuman.xyz/api/snackvideo?apikey=${global.lolkey}&url=${args[0]}`)
    let json = await res.json()
    if (json.status != '200') throw Error(anu.message)
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.send2ButtonVid(m.chat, json.result.link, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
    }
handler.help = ['Snakvideo']
handler.tags = ['downloader']
handler.command = /^snakvideo$/i
