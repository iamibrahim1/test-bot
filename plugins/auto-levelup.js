import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Not enough *${max - user.exp}* Again! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${this.getName(m.sender)} naik 🧬level\n.             ${user.role}`
        let str = `${this.getName(m.sender)} naik 🧬level\n.             ${user.role}

*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🧬Previous Levels : ${before}
• 🧬New Levels : ${user.level}
• At what hour : ${new Date().toLocaleString('id-ID')}

*Note:* The more frequently you interact with bots, the higher your level_
`.trim()
            let knights = await(await import('knights-canvas'))
            let image = await new knights.Up()
    .setAvatar(hwaifu.getRandom())
    .toAttachment();
  let data = image.toBuffer();
            try {
            let img = await levelup(teks, user.level)
            this.sendButton(m.chat, str, botdate, img, [['INVENTORY', '.inv']], m)
            } catch (e) {
            this.sendButton(m.chat, str, botdate, data, [['INVENTORY', '.inv']], m)
            }

    }
}
