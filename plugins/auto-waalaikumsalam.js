let handler = async (m, { conn }) => {
let caption = `*waalikumsalam*


_📚 Read below!_
"People who say greetings like this get 30 rewards, then, people who are in front of or hear them reply with the same sentence, namely "Wa'alaikum salam warahmatullahi wabarakatuh" or add another (waridhwaana). This means that apart from praying for safety, you also ask Allah SWT"
`

conn.sendButton(m.chat, caption, author, null, [
        ['Waalaikumsalam', 'Waalaikumsalam'],
    ], m, adReplyS)
}
handler.customPrefix = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i
handler.command = new RegExp

export default handler
