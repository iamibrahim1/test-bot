import { spawn } from 'child_process';
let handler = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Sedang merestart bot...')
    await global.db.write()
    process.send('reset')
  } else throw 'Error. The place run does not support the debounce featuree.'
}
handler.help = ['debounce' + (process.send ? '' : ' (Doesnt work)')]
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
export default handler
