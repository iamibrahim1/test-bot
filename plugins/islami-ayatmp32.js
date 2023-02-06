
let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `example:\no${usedPrefix + command} 1 2\x\then the result is sura Al-Fatihah verse 2 along with the audio, and the verse is just 1`
    if (isNaN(args[0]) || isNaN(args[1])) throw `example:\no${usedPrefix + command} 1 2\x\then the result is sura Al-Fatihah verse 2 along with audio, and only verse 1`
    
let api = `https://api.lolhuman.xyz/api/quran/audio/args[0]/args[1]?apikey=${global.lolkey}`
await conn.sendFile(m.chat, api, 'quran.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})

}

handler.help = ['ayat2'].map(v => v + ' *surah no*')
handler.tags = ['islam']
handler.command = /^(ayat(mp32|audio2)|ayta2)$/i
export default handler
