const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^pull/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('you don't have an atm yet !')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `Success attracted by ${count} Money 💹`, m)
  } else conn.reply(m.chat, `[❗] There is not enough money in your bank to withdraw ${count} money 💹`, m)
}
handler.help = ['pull'].map(v => v + ' <amount>')
handler.tags = ['rpg']
handler.command = /^pull([0-9]+)|pull|pull$/i

export default handler
