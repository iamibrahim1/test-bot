import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix }) => {

  if (!text) throw `Usage Example${usedPrefix}spam call 92xxxxxxxx`
  let nomor = text.replace(/[^0-9]/gi, '').slice(2)
  if (!nomor.startsWith('8')) throw `Usage Example\n${usedPrefix}spamcall 628xxxxxxxx`
  m.reply('_*Wait for your request to be processed.....*_')
  let anu = await fetch(`https://id.jagreward.com/member/verify-mobile/${nomor}`).then(a => a.json())
  let spcall = `*Number* : _${anu.phone_prefix}_\n\n_successfully called you!_`
  conn.reply(m.chat, `${spcall}`.trim(), m)

  }

handler.help = ['spamcall <number>']

handler.tags = ['tools']

handler.command = /^(spamcall)$/i

handler.limit = true
handler.group = true

export default handler
