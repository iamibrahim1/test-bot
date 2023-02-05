import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `Enter queries!`
              let awikwok = `NENEN NENEN WANT NENEN SAME ${text}. ${text} MAKES ME WANT NENEN'S HUGE TREATMENTS. WRAPPED IN OFFICIAL TIGHT CLOTHING CROOOOTTOTOTOTOTOTO TOTO TOTO SANGE DOG CAVE BANGSAT. ${text}, PLEASE LISTEN WELL. PLEASE TAKE OFF YOUR CLOTHES JUST A MINUTE PLISSS IT'S REALLY PLEASED, LET MY DRY MOUTH CAN TASTE NENEN ${text}. LET ME SUCCEED YOUR NENEN ${text}. I WILL BE WILLING TO GIVE YOU ANY PRAYER, REGARDLESS OF THE MONEY I BURN, SPECIFICALLY FOR YOU. BUT PLEASE REALLY OPEN YOUR CLOTHES I WANT TO NENEN. NENEN NENEEEEN NENEN ${text} WANGIIII`
              m.reply(awikwok, null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.command = handler.help = ['nenen2']
handler.tags = ['fun']
handler.limit = true
export default handler
