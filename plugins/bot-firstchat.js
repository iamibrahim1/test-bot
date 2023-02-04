import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `👋Hi, ${Halo()}

${user.banned ? '📮Sorry, you got banned and cant use this bot anymore' : `💬 Anyone can${this.user.name} help?`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : '📮Note: Dont spam the bot', [user.banned ? 'OWNER' : 'OWNER', user.banned ? '.owner' : '.owner'], m)
    user.pc = new Date * 1
}


function Hello() {
     const time = moment.tz('Asia/Karachi').format('HH')
     let res = "Good morning 🌆"
     if (time >= 4) {
         res = "Good morning 🌄"
     }
     if (time > 10) {
         res = "Good afternoon ☀️"
     }
     if (time >= 15) {
         res = "Good afternoon 🌇"
     }
     if (time >= 18) {
         res = "Good night 🌙"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)
