let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

let toM = a => '@' + a.split('@')[0]
if (command == 'hissoulmate') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    let caption = `*Love Message...* ${toM(a)} ❤️ ${toM(b)}\n\n${await buchin.getRandom()}`
    await conn.sendButton(m.chat, caption, wm, null, [['hissoulmate', `${usedPrefix}hissoulmate`],['mysoulmate', `${usedPrefix}mysoulmate`]], m, { mentions: conn.parseMention(caption) })
    }
    
if (command == 'mysoulmate') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let caption = `*Love Message...* ${toM(who)} ❤️ ${toM(a)}\n\n${await buchin.getRandom()}`
    await conn.sendButton(m.chat, caption, wm, null, [['hissoulmate', `${usedPrefix}hissoulmate`],['mysoulmate', `${usedPrefix}mysoulmate`]], m, { mentions: conn.parseMention(caption) })
    }
    
}
handler.tags = ['main', 'fun']
handler.command = handler.help = ['jodohnya', 'jodohku']

handler.group = true

export default handler

let buchin = [
"I choose to be alone, not because I'm waiting for the perfect one, but I need someone who never gives up."
   "A single person is created with a partner he has not yet found.",
   "Singles. Maybe that's God's way of saying 'Rest from wrong love'.",
   "Singles are young people who prioritize their personal development for a more classy love later.",
   "I'm not looking for someone who is perfect, but I'm looking for someone who becomes perfect thanks to my strengths.",
   "People's boyfriend is our delayed mate.",
   "Singles must pass. Everything has its time, when all solitude becomes an togetherness with a halal lover. Be patient.",
   "Romeo is willing to die for Juliet, Jack dies for saving Rose. Basically, if you still want to live, be single.",
   "I'm looking for people not from their strengths but I'm looking for people from their sincerity.",
   "A soul mate is not flip-flops, which are often exchanged. So, continue to be in the struggle that you should be.",
   "If you become a guitar stringer, I don't want to be the guitarist. Because I don't want to break up with you.",
   "If loving you is an illusion, then let me imagine forever.",
   "Honey... My job is only to love you, not to fight fate.",
   "When I'm with you it feels like 1 hour only 1 second, but if I'm far from you it feels like 1 day becomes 1 year.",
   "Kolak banana tofu sumedang, even though the distance stretches my love will never disappear.",
   "I want to be the one, not the one.",
   "I can't promise to be good. But I promise to always be by your side.",
   "If I become a representative of the people I will definitely fail, how can I think about the people if all I have in mind is you.",
   "Look at my garden, full of flowers. Look at your eyes, my heart is full of flowers.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
"Longing doesn't only appear because of the distance apart. But also because of wishes that don't come true.",
   "You will never be far from me, wherever I go you are always there, because you are always in my heart, only our bodies are far away, not our hearts.",
   "I know that in my every glance, we are blocked by distance and time. But I'm sure that later we will definitely be united.",
   "Missing you without ever meeting is the same as creating a song that has never been sung.",
   "There are times when distance is always a barrier between me and you, but still in my heart we are always close.",
   "If this heart is unable to stem all the longing, then there is nothing I can do but pray for you."
   "Maybe at this moment I can only hold this longing. Until the time comes when I can meet and release this longing with you.",
   "Through a feeling of longing that is turbulent in my heart, there sometimes I really need your embrace of affection.",
   "In the cold of the night, I don't remember anymore; How many times have I thought of you and miss you too.",
   "Missing you is like rain that comes suddenly and lasts a long time. And even after the rain subsides, I still miss you.",
   "Since knowing you, I always want to learn, learn to be the best for you.",
   "Do you know the difference between pensi and your face? If you write with a pencil, you can erase it, but with your face, nothing can erase it from my mind.",
   "It's not the National Examination tomorrow that I have to worry about, but the test of life that I went through after you left me.",
   "One thing that makes me happy at school is to see your smile every day.",
   "Do you know the difference between going to school and going to your house? If you go to school, you will definitely bring books and pens, but if you go to your house, I just bring my heart and love.",
   "I'm not sad if tomorrow is Monday, I'm sad if I don't meet you.",
   "My love moment is perpendicular to your love moment. Making our love a perfect equilibrium point.",
   "I'm willing to take part in a race around the world, as long as you are the finish line.",
   "My homework is to miss you. Stronger than Mathematics, wider than Physics, harder than Biology.",
   "My love for you is like a metabolism, which will not stop until death.",
   "If you are as tall as you, come and pick me up, I'll take you home."
   "Eat whatever I like as long as it's with you, including eating the liver.",
   "Love is like a death sentence. If you don't get shot, you get hanged."
   "Loving you is like a drug: once you try to become addicted, don't try it to make you curious, left alone makes you addicted.",
   "I like snacking the most because snacking is delicious. Moreover, having you completely...",
   "This world only belongs to the two of us. The others are just renting.",
   "For me, all those days are Tuesdays. Tuesdays in Heaven when you're near...",
   "What if we both become a gang of criminals? I stole your heart and you stole my heart.",
   "You are like the coffee I sipped this morning. Bitter, but addictive.",
   "I'm often jealous of your lipstick. He can kiss you every day, from morning to night.",
   "Just hearing your name can make me smile like a fool.",
   "I know your girlfriend is not just one, and like you not only me.",
   "Ever since I stopped hoping for you, I'm not enthusiastic about everything...",
   "With you, falling in love is the most intentional heartbreak.",
   "It's very difficult to feel the happiness of life without your presence by my side.",
   "Through a feeling of longing that is turbulent in my heart, there sometimes I really need your embrace of affection.",
   "If you know, until now I still love you.",
   "Sometimes I'm jealous of kites...the strings just break and they're still being chased and don't want to be taken by other people...",
   "I didn't know what love was, until I finally met you. But, at that moment I knew what it felt like to have a broken heart.",
   "Chasing is tiring, but even more tiring waiting\nWaiting for you to notice my existence...",
   "Don't stop loving just because you've been hurt. Because there's no rainbow without rain, no true love without crying.",
  "I have a million reasons to forget you, but nothing can force me to stop loving you."
   "Sometimes one feels so stupid just to love someone.",
   "You are the best broken heart that I never regret.",
   "It's not that it's not worth waiting for, it's just that it often gives false hope."
   "A part of me feels sick, remembering that he is so close, but untouchable.",
   "The best thing about loving someone is silently praying for them."
   "I wish I could get rid of this feeling as soon as I lost you.",
   "For the sake of love we deceive ourselves. Trying to be strong turns out to be dishonorable."
   "Consider me your home, if you leave you know where to go. Stay if you want and leave if you're bored...",
   "I'm confused, should I be disappointed or not? If I'm disappointed, who am I to him?\n\nIf I'm not disappointed, but I'm waiting for what he will say.",
   "My longing is like a branch that remains standing. Even though none of the leaves accompany it, until it dries up, breaks, and dies."
   "I guess we're just two strangers with the same memories now.",
   "Make me able to hate you even if only for a few minutes, so it's not too hard to forget you.",
   "I love you with all my heart, but you instead share your feelings with others.",
   "Loving you might break me, but somehow leaving you doesn't fix me.",
   "You are the main and first in my life. But, I am second to you.",
   "If we can only meet in a dream, I want to sleep forever.",
   "Seeing you happy is my happiness, even though your happiness is without me.",
   "I sometimes envy an object. I don't have a feeling but I'm always needed. It's different from me who has a feeling, but is abandoned and ignored...",
   "How can I move if only to you my heart rests?"
  "Memories of you are like home to me. So whenever my mind wanders, surely in the end it will always come back to you.",
   "Why are tissues useful? Because love never runs dry. - Sujiwo Tejo",
   "If loving you is a mistake, well, let me be wrong all the time.",
   "Since I know you, I want to keep learning. Learn to be the best for you.",
   "Someone acts stupid just to see you smile. And he feels happy about it.",
   "I'm not a good person, but I will learn to be the best for you.",
   "We don't die, but the wound makes us unable to walk like we used to.",
   "Your existence is like a cup of coffee that I need every morning, which can encourage me to stay excited about the day.",
   "I really want to give the world to you. But because that's impossible, I will give you the most important thing in my life, which is my world.",
   "It's better to be humorous but sweet, rather than being pretentiously romantic but ending tragically."
   "Ben won't be disappointed in the end, you have to understand when to hope and when to stagnate."
   "I, Ki Wong Jowo, don't really understand the meaning of 'I Love U'. But I do understand, 'I'm your crew'."
   "You don't need to be beautiful and sugihmu, I just want to be loyal, Wes is happy.",
   "My love for you is torn apart by the camera, the focus on your crew is blurry.",
   "Saben dino is kegowo dreaming but can't do it.",
   "I haven't met you 30 years ago, it's patchy for a month.",
   "Me without you is like a lost cat. Ambyar.",
   "I want it, I'm playing time. Supoyo, I'm going to meet you more fun. Ben Lewih dowo when I can live with your soulmate."
   "I have never known what happened to me tresno, kajaba sak just met with your slira.",
   "Love aa ka neng moal leungit-leungit sanajan aa geus marry deui.",
   "Your patience is limitless, but your love ka anjeun henteu aya seepna.",
   "Kanyaah, I'm tired of wearing Bayclean.",
   "The memories of going home with jeung anjeun ek tuluy are remembered by nepi ka poho."
   "Kuring moal will always live alone, need a jalmi's help for a moment.",
   "Nyaahna aa ka neg tea if the banker is still trying to collect debts (hayoh mumuntil)",
   "Our patience has no limit, but our love is maneh, even more so.",
  "Hayang rasana kuring make up all the words love anu aya in the dunya ieu, then bade kuring kuring gathering, so that anjeun nyaho is very big the feeling of love curing ka anjeun.",
   "Calm down neng, ari love will be sapertos krispatih song; Timeless.",
   "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu is the best kanggo anjeun. But I'm sure, servant jalmi hiji-hijina nu continues to emut ka anjeun.",
   "It's enough just to lose the network, don't you.",
   "I often make myself eat liver. But realizing you're still here makes me happy again.",
   "My enemies are those who want to possess you too.",
   "Many are always there, but if you're the only one I want, how?"
   "My sleeping hours have been destroyed by longing."
   "It's enough that China is far away, don't love us."
   "The important thing is your happiness, I'm not important ..",
   "I only have one wish, to be loved by you ..",
   "Me without you is like an ambulance without wiuw wiuw wiuw.",
   "Just Antarctica is far away. Between us, don't."
]
