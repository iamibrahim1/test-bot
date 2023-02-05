let handler = async(m, { conn, text, args, usedPrefix, command }) => {

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} buoys|helo|banh
  *List Effect:*
 arcade8bit
 battlefield4
 pubg
 tiktok`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://api.lolhuman.xyz/api/photooxy2/${thm}?apikey=${global.lolkey}&text1=${text1}&text2=${text2}`
  let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], fakes, adReply)
            }

handler.command = /^(oxy2|photooxy2)$/i

export default handler
