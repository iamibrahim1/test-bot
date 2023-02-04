export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        let caption = `
  *${conn.getName(m.sender)}* @${m.sender.split("@")[0]} *stop AFK* ${user.afkReason ? ' after ' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `.trim()
  let kataafk = ['want to sleep', 'want to help', 'To grandpas house', 'take care of the candles', 'buy ice pop', 'elope', 'play marbles', 'hide and seek', 'push renk', 'push up joni', 'exercise', 'masturbation', 'beraq', 'open bo', 'asked by mother', 'work']
    conn.sendButton(m.chat, caption, wm, null, [['AFK Again', '.afk ' + kataafk.getRandom()]], m, { mentions: conn.parseMention(caption) })
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        let caption = `
  *Don't tag* *${conn.getName(jid)}* @${jid.split("@")[0]}!
  He's AFK *${reason ? 'with reason ' + reason : 'no reason'}*
  During ${(new Date - afkTime).toTimeString()}
  `.trim()
    conn.sendButton(m.chat, caption, wm, null, [['Stop', '/tts id how come it stopped']], m, { mentions: conn.parseMention(caption) })
    }
    return true
}
