import didyoumean from 'didyoumean'
import similarity from 'similarity'
export async function before(m, { match, usedPrefix }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	if (help.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, help)
		let sim = similarity(noPrefix, mean)
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
		let name = await this.getName(who)
		let caption = `👋 Hi ${name} @${who.split("@")[0]},\nWhat do you mean:\n*${usedPrefix + mean}*\nSimilarity: *${Number(sim * 100).toFixed(2)}%*`
		/* Button List Section */
		let spas = "                "
      const sections = [{
	title: spas + " [ SELECT - OPTIONS ] ",
	rows: [
	    {title: "✅ Right️", rowId: usedPrefix + mean, description: ""},
	    {title: "❌ Wrong", rowId: usedPrefix + '?', description: ""}
	]
    },{
	title: spas + " [ L I S T - C M D ] ",
	rows: [
	    {title: "S H O W", rowId: usedPrefix + 'menulist', description: ""}
	]
    }]

const listMessage = {
  text: caption,
  footer: "",
  mentions: await this.parseMention(caption),
  title: "",
  buttonText: "CHECK",
  sections
}
  	if (mean) this.sendMessage(m.chat, listMessage, { quoted: m, mentions: await this.parseMention(caption), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
	}
}
export const disabled = false
