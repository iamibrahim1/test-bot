
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    if (!text) return m.reply(`Reply pictures with commands
    ${usedPrefix + command} effect
*List effect:*
brazzers
Burn
Ddungeon
Deepfry
Dictator
Fire
Gay
Jail
lookwhatkarenhave
missionpassed
Ps4
Redple
Sharpen
Thanos
Sniper
Instagram
Scary
Moustache
Wasted
Utatoo
Rip
Wanted
Beautiful
Blur
Invert
Greyscale
Contrast
Sepia
Distort
Glitch
Approved
Rejected
3000years
Circle`)
    
    let img = await q.download?.()
    let url = await uploadImage(img)
    
    let images = `https://api.zeeoneofc.my.id/api/image-effect/${encodeURIComponent(text)}?apikey=${global.keysxxx}&url=${encodeURIComponent(url)}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${url}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
            }
//lo mau apa??
handler.help = ['photofilter'].map(v => v + ' <caption|reply>')
handler.tags = ['maker']
handler.command = /^(photofilter)$/i

export default handler
