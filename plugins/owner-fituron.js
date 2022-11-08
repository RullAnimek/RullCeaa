import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let list = `
┏━━━━━━━━━━━━━━━━━━━━┅
┇  *「 Sukses Mengaktifkan Fitur 」*
┗━━━━━━━━━━━━━━━━━━━━┅
`.trim()// Tambah sendiri kalo mau
await conn.reply(m.chat, list, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: 'Slime Bot WhatsApp',  
    sourceUrl: sgc, 
    thumbnail: await (await fetch(`https://telegra.ph/file/dd14654a9c4105a9a7a75.jpg`)).buffer()
      }}
     })
}    
handler.command = /^fituron$/i

handler.owner = true

export default handler
