
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!text) return m.reply(`Reply pictures with commands
    ${usedPrefix + command} effect
*List effect:*
• blur
• brightness
• circle
• contrast
• delete
• fade
• flip
• grayscale
• invert
• opacity
• opaque
• sepia
`)
    
    let img = await q.download?.()
    let url = await uploadImage(img)
  
  let thm = args[0]

    let images = `https://violetics.pw/api/jimp/${thm}?apikey=beta&img=${url}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
            }
//lo mau apa??
handler.help = ['jimp'].map(v => v + ' <efek>')
handler.tags = ['maker']
handler.command = /^(jimp)$/i

export default handler
