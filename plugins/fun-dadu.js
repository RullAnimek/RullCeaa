/* CREDITS TO https://github.com/FG98F */
const dir = [
  'https://telegra.ph/file/03fdac681d792e5cfd353.gif',
  'https://telegra.ph/file/ae9d106bbacfea811ab85.gif',
  'https://telegra.ph/file/852f187ae2d669671e115.gif',
  'https://telegra.ph/file/5f9e5327fef3ed4962adf.gif',
  'https://telegra.ph/file/acf956f34f3c159c81004.gif',
  'https://telegra.ph/file/b7bfcea83d05266eddd53.gif'
];
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['game']
handler.command = ['dadu'] 
handler.limit = true
export default handler
