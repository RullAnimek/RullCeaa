/* CREDITS TO https://github.com/FG98F */
const dir = [
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/yhdyhnap',
  'https://tinyurl.com/yfwjbou7',
  'https://tinyurl.com/yh3e3ogt',
  'https://tinyurl.com/yfmhpvxs',
  'https://tinyurl.com/ygpxka9q'
];
let handler = async (m, { conn }) => {
conn.sendfile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'sticker.webp', m)
}
handler.help = ['dadu']
handler.tags = ['game']
handler.command = ['dadu'] 
export default handler
