let handler = async(m, { conn, text, args, usedPrefix, command }) => {

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} cake teks
  *List Efek:*
anonymhacker
aovwall
avatardota
avatarlolnew
beautifulflower
birthdaycake
birthdayday
cartoongravity
fpslogo
freefire
galaxybat
galaxystyle
galaxywallpaper
glittergold
glossychrome
goldplaybutton
greenbush
greenneon
heartshaped
hologram3d
lighttext
logogaming
lolbanner
luxurygold
mlwall
multicolor3d
noeltext
pubgmaskot
puppycute
royaltext
silverplaybutton
snow3d
starsnight
textbyname
textcake
watercolor
wetglass
wooden3d
writegalacy`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
  let images = `https://api.lolhuman.xyz/api/ephoto1/${thm}?apikey=${global.lolkey}&text=${text1}`
  let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
        }

handler.command = /^(epho|ephoto)$/i

export default handler
