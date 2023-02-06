import {alquran} from '@bochilteam/scraper'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `example:\no${usedPrefix + command} 1 2\x\then the result is sura Al-Fatihah verse 2 along with audio, and only verse 1`
    if (isNaN(args[0]) || isNaN(args[1])) throw `example:\no${usedPrefix + command} 1 2\x\then the result is sura Al-Fatihah verse 2 along with the audio, and the verse is just 1`
    let api = await alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.id}
( Q.S ${api[args[0] - 1 ].asma.id.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, api[args[0] - 1].ayahs[args[1] - 1].audio.url, '', '', m)
}

handler.help = ['ayat'].map(v => v + ' *surah no*')
handler.tags = ['islam']
handler.command = /^(ayat(mp3|audio)|ayta)$/i
export default handler
