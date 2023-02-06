export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = `Bye🖐 *${this.user.name}* will left of the group!!`
    await this.sendButton(m.chat, caption, wm, null, [['Delete Expired', '/delexpired'], ['Check expired', '/checkexpired']], null)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
