//By Hinata
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'

export async function all(m) {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let name = await this.getName(who)
	let chat = global.db.data.chats[m.chat]
    let { isBanned } = global.db.data.chats[m.chat]
    let { banned } = global.db.data.users[m.sender]
    let { group } = global.db.data.settings
    let setting = global.db.data.settings
    let user = global.db.data.users[m.sender]
    

    if (chat.autoReply) {
    // ketika ada yang kirim anu
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Open this link')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `${htjava} *Invite Bots to Groups* ${htjava}
${dmenub} 7 days / Rp 2$
${dmenub} 30 days / Rp 5$
${dmenuf}
`.trim(), wm, 'Bot owner', '.owner', m)
await this.reply(nomorown + '@s.whatsapp.net', `Someone wants to kidnap ya :v \n\nfrom: @${m.sender.split("@")[0]} \n\message: ${m.text}`, m, { mentions: [m.sender] })
    }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'reactionMessage') {
    let caption = `*${htki} Attention ${htka}*\n*detected* ${name} @${who.split("@")[0]} Again Sending Reaction\n*Message:* [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Bot owner' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
        
    // ketika ada yang kirim anu
    if (m.mtype === 'paymentMessage') {
    let caption = `*${htki} Attention ${htka}*\n*detected* ${name} @${who.split("@")[0]} Asking for Money Again :>\n*Message:* [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Bot owner' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'productMessage') {
    let caption = `*${htki} Attention ${htka}*\n*detected* ${name} @${who.split("@")[0]} More Promotions :>\n*Order:* [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Bot owner' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'orderMessage') {
    let caption = `*${htki} Attention ${htka}*\n*${htki} Attention ${htka}*\n*detected* ${name} @${who.split("@")[0]} More Orders :>\n*Order:* [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Bot owner' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'stickerMessage') {
    this.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
    
    // ketika ada yang kirim anu
    if (m.text.includes('🗿')) {
    this.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
        
    // ketika ada yang kirim anu
    
    // bot
    if (/^(aktif|w(ey|oi)|bot|ha[iy]|we|oy|p)$/i.test(m.text)) {
    let apsih = ["Why",
"What is it",
"Naon Meng",
"Yeah, bots here",
"Luwak white coffee password",
"Hmmm, why",
"What",
"Ok the bot is active",
"2, 3 bottle caps",
"Active bot"]
        let caption = `*${apsih.getRandom()}* sis ${name} @${who.split("@")[0]} 🗿`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Bot owner' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    }

    return !0
}

