import fetch from 'node-fetch'

let timeout = 180000
let money = 100
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, ' *ᴍᴀꜱɪʜ ᴀᴅᴀ ꜱᴏᴀʟ ʙᴇʟᴜᴍ ᴛᴇʀᴊᴀᴡᴀʙ ᴅɪ ᴄʜᴀᴛ ɪɴɪ!!* ', conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
🎮 Susun Kata 🎮

Soal:
${json.soal}

❔ Tipe : ${json.tipe}
⏱️ Waktu *${(timeout / 1000).toFixed(2)} detik*
📌 Ketik ${usedPrefix}suska untuk bantuan
💸 Bonus: ${money} Money

⚠️ Reply pesan ini untuk menjawab soal ⚠️
`.trim()
    conn.susunkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, money,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.reply(m.chat, `Waktu habis!\n📑Jawabannya adalah *${json.jawaban}*`, conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata|sskata/i
handler.limit = true
handler.group = true

export default handler
