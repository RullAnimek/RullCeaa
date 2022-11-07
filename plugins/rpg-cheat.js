let handler = async (m, { conn }) => {
let info = `
*${htki} CHEAT ${htka}*

Anjay nge cheat awkwk:v
`
const sections = [
   {
	title: `Hengker`,
	rows: [
	    {title: "💵 Cheat Money", rowId: '.cheatuang', description: 'Unlimited Money' },
	    {title: "✨ Cheat Exp", rowId: '.cheatexp', description: 'Rawan Eror bang' },
	{title: "⭐ Cheat Limit", rowId: '.cheatlimit', description: 'Unlimited Limit' },
	{title: "📌 Cheat Level", rowId: '.cheatlevel', description: 'Unlimited Level' },
	{title: "📮 Cheat Anti Pmo", rowId: '.antipmo', description: 'Anti Pmo kak :)' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Cheat Database Bot",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "Grub Bot", null,null, [['Owner','.owner']], m)
}

handler.help = ['cheatbot', 'cheat']
handler.tags = ['rpg']
handler.command = /^(cheat(bot)?|cheat)$/i
handler.private = false
handler.owner = true
handler.premium = true

export default handler
