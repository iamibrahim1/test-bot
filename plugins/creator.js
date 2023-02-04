import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'owner') {
 let vcard = `BEGIN:VCARD\VERSION:3.0\nO:WhatsApp;I am Owner Ibrahim;Bot;;Md\nFN:I am the owner of Ibrahim Bot WhatsApp, Md\nNICKNAME:👑 ibrahim bot\nORG:Kahfi\nTITLE:soft\nitem1.TEL;waid=923229931076:+92 322-9931076\nitem1.X-ABLabel:📞 Owner Number\nitem2.URL:https://iamibrahim.tk\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:theworldh95@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Ibrahim bot\nitem4.ADR:;;pkr Pakistan;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍My Location\nBDAY;value=date:🔖 13 January 2001\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hi *${name} @${who.split("@")[0]}*, Here is the owner *${conn.user.name}* sis`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'pengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=923229931076:+92 322-9931076\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Here is my developer kack who activated me.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
if (command == 'creator') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 🥺`, `theworldh95@gmail.com`, `pk Pakistan`, `🚀 https://iamibrahim.tk`, `👤 The owner of the cave is handsome`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🔥 Bot WhatsApp 🐣`, `📵 Don't spam/call me 😢`, `Nothing`, `pk Pakistan`, `🚀 https://iamibrahim.tk`, `🤖 Just ordinary bots that sometimes have errors ☺`]
  ], fakes)
  await conn.reply(m.chat, `Hello sis @${m.sender.split(`@`)[0]} That's my owner's number, don't spam it😉`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Hello sis @${m.sender.split(`@`)[0]} That's my developer team number, don't do anything wrong, sis😖`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
