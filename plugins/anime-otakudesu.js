import { otakudesu } from 'hxz-api'
import fetch from 'node-fetch'
//let jimp = require('jimp')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} Anime`
    const result = await otakudesu(text)
    
let otaku = `
*TITLE:* ${result.judul}
*RATE:* ${result.rate}
*PRODUCER:* ${result.produser}
*TYPE:* ${result.tipe}
*STATUS:* ${result.status}
*EPISODE:* ${result.episode}
*DURATION:* ${result.durasi}
*RELEASE:* ${result.rilis}
*STUDIO:* ${result.studio}
*GENRE:* ${result.genre}
*DESC:* ${result.desc}
*BATCHES:* ${result.batch}

*BATCHSD:* ${result.batchSD}

*BATCHHD:* ${result.batchHD}`
let gambar = await(await fetch(result.img)).buffer()
await conn.sendFile(m.chat, gambar, '', otaku, m)
}

handler.help = ['otakudesu'].map(v => v + ' <Apa>')
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i

export default handler
