let handler = m => m

export async function all(m) {
    let user = global.db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (user.premiumTime != 0 && user.premium) {
        if (new Date() * 1 >= user.premiumTime) {
            await m.reply(`your premium time is up!`)
            user.premiumTime = 0
            user.premium = false
        }
    }
}
