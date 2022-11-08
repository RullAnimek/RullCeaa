import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Masukan Link`

  const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Tidak bisa mendownload video!'
    conn.sendHydrated(m.chat, `No Watermark Tiktok Video` : ''}`, await (await fetch(url)).buffer(),
        url, '📮 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [
        ['💸 Donasi', `.donasi`],
        ['📜 Menu', `.menu`],
        [null, null]], m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i
handler.limit = true
export default handler
