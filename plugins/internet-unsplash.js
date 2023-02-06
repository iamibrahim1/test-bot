import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
	let res = await fetch('https://api.unsplash.com/search/photos?query=' + text + '&client_id=STxusJIgGSHWruiaq77WMAbMXmXRXAFr0JQQq3FY9v8')
	let listSections = []
	Object.values(res.results).map((v, index) => {
	let des = v.user.tags[0].source.cover_photo.alt_description
	listSections.push([index + ' ' + cmenub + ' ' + v.user.tags[0].source.cover_photo.updated_at, [
          ['Get S', usedPrefix + 'get ' + v.user.tags[0].source.cover_photo.urls.small, des],
          ['Get S3', usedPrefix + 'get ' + v.user.tags[0].source.cover_photo.urls.small_s3, des],
          ['Get Thumb', usedPrefix + 'get ' + v.user.tags[0].source.cover_photo.urls.thumb, des],
          ['Get Raw', usedPrefix + 'get ' + v.user.tags[0].source.cover_photo.urls.raw, des],
          ['Get Reg', usedPrefix + 'get ' + v.user.tags[0].source.cover_photo.urls.regular, des],
          ['Get Full', usedPrefix + 'get ' + v.user.tags[0].source.cover_photo.urls.full, des]
        ]])
	})
return conn.sendList(m.chat, htki + ' 📺 Unsplash Search 🔎 ' + htka, `⚡ Please select Unsplash Search in the button below...\n*Text to send:* ${text}\n\nType repeat *${usedPrefix + command}* your text to change the text again`, author, `☂️ Unsplash Search Here ☂️`, listSections, m)    }
handler.help = ['unsplesh']
handler.tags = ['internet']
handler.command = /^unsplesh$/i

export default handler

/* New Line */
