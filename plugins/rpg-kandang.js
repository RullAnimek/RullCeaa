let handler = async (m, {
	conn,
	usedPrefix
}) => {
	let banteng = global.db.data.users[m.sender].banteng
	let harimau = global.db.data.users[m.sender].harimau
	let gajah = global.db.data.users[m.sender].gajah
	let kambing = global.db.data.users[m.sender].kambing
	let panda = global.db.data.users[m.sender].panda
	let buaya = global.db.data.users[m.sender].buaya
	let kerbau = global.db.data.users[m.sender].kerbau
	let sapi = global.db.data.users[m.sender].sapi
	let monyet = global.db.data.users[m.sender].monyet
	let babihutan = global.db.data.users[m.sender].babihutan
	let babi = global.db.data.users[m.sender].babi
	let ayam = global.db.data.users[m.sender].ayam

	let ndy = `
╭──────❨ *Kandang* ❩
├  🐂 = [ ${banteng} ] Ekor Banteng
├ 🐅 = [ ${harimau} ] Ekor Harimau
├ 🐐 = [ ${kambing} ] Ekor Kambing
├ 🐘 = [ ${gajah} ] Ekor Gajah
├ 🐼 = [ ${panda} ] Ekor Panda
├  🐃 = [ ${kerbau} ] Ekor Kerbau
├  🐮 = [ ${sapi} ] Ekor Sapi
├  🐒 = [ ${monyet} ] Ekor Monyet
├ 🐗 = [ ${babihutan} ] Ekor Babi Hutan
├ 🐓 = [ ${ayam} ] Ekor Ayam
├ ️🐖 = [ ${babi} ] Ekor Babi
╰────────────────────`.trim()
	conn.reply(m.chat, ndy, m)
}
handler.help = ['kandang']
handler.tags = ['rpg']
handler.command = /^(kandang)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
