const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^saving/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('you dont have an atm yet!')
  if (user.bank > user.fullatm) return m.reply('Your bank is full!')
  if (count > user.fullatm - user.bank) return m.reply('The money doesn't fit in the bank')
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `Successful saving of ${count} Money 💹`, m)
  } else conn.reply(m.chat, `[❗] Your money is not enough to save ${count} money 💹`, m)
}
handler.help = ['saving'].map(v => v + ' <amount>')
handler.tags = ['rpg']
handler.command = /^saving([0-9]+)|saving|savingall$/i

export default handler
