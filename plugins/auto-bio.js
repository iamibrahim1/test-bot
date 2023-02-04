let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	let chat = global.db.data.chats[m.chat]
	if (chat.autoBio) {
	if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime);
		let bio = `
نہیں مشکل وفا، ذرا دیکھو یہاں!
تیری آنکھوں میں بستا ہے میرا جہاں
کبھی سن تو ذرا جو میں کہہ نہ سکا
میری دنیا تمھی ہو، تمھی آسرا
`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1
	}
}

}
export default handler
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ️', h, ' Jam ', m, ' Menit ', s, ' Detik '].map(v => v.toString().padStart(2, 0)).join('')
}
