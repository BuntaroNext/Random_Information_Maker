import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const params = new URLSearchParams({
    appId: '5ad4bda309c2bf8094ad8a28a0478baecff27294',
    lang: 'J',
    statsDataId: '0003349481',
    sectionHeaderFlg: '2',
    replaceSpChars: '0',
  })

  const r = await fetch(
    `https://api.e-stat.go.jp/rest/3.0/app/getSimpleStatsData?${params}`
  )
  const text = await r.text()

  res.status(r.status)
  res.setHeader('Content-Type', 'text/csv; charset=utf-8')
  res.send(text)
}