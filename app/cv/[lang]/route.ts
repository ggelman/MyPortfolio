import { NextRequest } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET(req: NextRequest, { params }: { params: { lang: string } }) {
  const map: Record<string, string> = {
    pt: 'Giulia Baracat - CV (Pt).pdf',
    'pt-br': 'Giulia Baracat - CV (Pt).pdf',
    en: 'Giulia Baracat - CV (En-US).pdf',
    'en-us': 'Giulia Baracat - CV (En-US).pdf',
  }

  const lang = (params.lang || 'pt').toLowerCase()
  const filename = map[lang] || map.pt
  const filePath = path.join(process.cwd(), 'CV', filename)

  try {
    const data = await readFile(filePath)
    const url = new URL(req.url)
    const isDownload = url.searchParams.get('download')

    return new Response(data, {
      headers: {
        'Content-Type': 'application/pdf',
        ...(isDownload ? { 'Content-Disposition': `attachment; filename="${filename}"` } : {}),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (err) {
    return new Response('Not found', { status: 404 })
  }
}

