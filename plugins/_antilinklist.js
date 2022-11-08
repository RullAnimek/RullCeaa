let handler = async (m, { conn }) => {
let info = `🔗 Antilink 🔗
`
const sections = [
   {
	title: `Pilih disini`,
	rows: [
	    {title: "Antilink gc [On]", rowId: '.on antilink', description: '' },
	    {title: "Antilink gc [Off]", rowId: '.off antilink', description: '' },
	{title: "Antilink Facebook [On]", rowId: '.on antilinkfb', description: '' },
	{title: "Antilink Facebook [Off]", rowId: '.off antilinkfb', description: '' },
	{title: "Antilink Youtube [On]", rowId: '.on antilinkyt', description: '' },
	{title: "Antilink Youtube [Off]", rowId: '.off antilinkyt', description: '' },
	{title: "Antilink Bityl [Off]", rowId: '.on antilinkbitly', description: '' },
	{title: "Antilink Bitly [Off]", rowId: '.off antilinkbitly', description: '' },
	{title: "List Mode Antilink", rowId: '.on', description: '' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Click",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "Grub Bot", null,null, [['Owner','.owner']], m)
}

handler.help = ['antilink']
handler.tags = ['group']
handler.command = /^(antilink|antilinkmode)$/i
handler.group = true
handler.admin = true

export default handler
