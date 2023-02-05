
let handler = async(m, { conn, text, usedPrefix, command }) => {
let krtu = htki + 'Yᴏᴜʀ Cᴀʀᴅ Iɴᴛʀᴏ' + htka + '\n' + dmenub + ' *Name:*Ibrahim\n' + dmenub + ' *age:*27\n' + dmenub + ' *Address:*Pakistan\n' + dmenub + ' *Hobby:*Pthon/javascript\n' + dmenub + ' *Partner:*None\n' + dmenuf
return conn.sendButtonDoc(m.chat, krtu, wm, 'MENU', '.menu', m, fakeig) // Tambah sendiri kalo mau
}
handler.help = ['intro']
handler.command = /^(intro)$/i

export default handler

