import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  conn.sendButton(m.chat, `
┏━ꕥ〔 *Donasi • Dana* 〕ꕥ━⬣
┃✾ Gopay  [6285607831412]
┃✾ Dana  [6285607831412]
┗━━━━ꕥ

http://ẉa.me/𝕾𝖑𝖎𝖒𝖊𝔅𝔬𝔱
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `𝕾𝖑𝖎𝖒𝖊 𝕭𝖔𝖙 𝖂𝖆𝖙𝖘𝖆𝖕𝖕`, body: `𝔖𝔩𝔦𝔪𝔢𝔅𝔬𝔱`, sourceUrl: 'tiktok.com/@originevils', thumbnail: await (await fetch('https://telegra.ph/file/e896044446172271c20b9.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
