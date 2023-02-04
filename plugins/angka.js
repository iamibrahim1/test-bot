let bonus = `${Math.floor(Math.random() * 3000)}`.trim()

let handler = async (m, { conn, command, text, args }) => {

    if (args.length == 0) return conn.reply(m.chat, `Please enter your number choice`, m)
    if (args[0] == '0' || args[0] == '1' || args[0] == '2' || args[0] == '3' || args[0] == '4' || args[0] == '5' || args[0] == '6' || args[0] == '7' || args[0] == '8' || args[0] == '9') {
    let random = `${pickRandom(['2','9','19','25','36','58','70','92','100','500'])}`

  conn.reply(m.chat, `
*「 GUESS THE NUMBERS 」*

Your numbers : ${text}
Bot Number : ${pickRandom(['0','1','2','3','4','5','6','7','8','9'])}

Are Your Numbers With Bots The Same?

+${bonus} XP!
`.trim(), m)
    global.db.data.users[m.sender].exp += bonus * 1
        } else {
      conn.reply(m.chat, `Choose Numbers 0 to 9!`, m)
    }
}
handler.help = ['number'].map(v => v + ' <0-9>')
handler.tags = ['game']
handler.command = /^number/i

handler.tigame = true
handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
