let handler = async(m, { conn, text, args, usedPrefix, command }) => {

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} harrypotter ibrahim
  *List Effect:*
shadow
pubg
bannerlol
cup
cup1
romance
smoke
burnpaper
ovemessage
undergrass
love
coffe
woodheart
woodenboard
summer3d
wolfmetal
nature3d
underwater
golderrose
summernature
fallleaves
flamming
harrypotter
carvedwood`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
  let images = `https://api.lolhuman.xyz/api/photooxy1/${thm}?apikey=${global.lolkey}&text=${text1}`
  let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
        }
handler.help = ['photooxy']
handler.tags = ['maker']
handler.command = /^(oxy|photooxy)$/i

export default handler
