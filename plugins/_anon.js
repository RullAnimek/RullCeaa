let handler = async (m, { conn }) => {
let info = `Anonymous Chat Menu
Temukan teman baru 🙂
`
const sections = [
   {
	title: `Anonymous Chat 公衆`,
	rows: [
	    {title: "🔎 Cari Teman", rowId: '.start', description: '' },
	    {title: "▶️ Skip", rowId: '.skip', description: '' },
	{title: "🗃️ Send Kontak", rowId: '.sendkontak', description: '' },
	{title: "🚪 Keluar", rowId: '.leave', description: '' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Menu Here",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "Grub Bot", null,null, [['Owner','.owner']], m)
}

handler.help = ['anonymouschat']
handler.tags = ['anonymous']
handler.command = /^(anonymous|anonymouschat|anonchat)$/i
handler.private = true

export default handler
