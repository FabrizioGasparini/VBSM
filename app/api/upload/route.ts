import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"
import fs from "fs"
import { isAuthenticated } from "@/lib/auth";

export const config = {
  api: {
    bodyParser: false, // disattiva il bodyParser di Next (altrimenti limita la size)
  },
}

export async function POST(req: NextRequest) {
    try {
    if (!isAuthenticated(req)) return NextResponse.json({ authenticated: false }, { status: 401 });

    const formData = await req.formData()
    const file = formData.get("file") as File | null

    if (!file) return NextResponse.json({ error: "Nessun file ricevuto" }, { status: 400 })
    
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // assicura che la cartella esista
    const uploadDir = path.join(process.cwd(), "public/images", "uploads")
    if (!fs.existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // salva file con nome unico
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`
    const filepath = path.join(uploadDir, filename)
    await writeFile(filepath, buffer)

    // ritorna l’URL pubblico
    return NextResponse.json({ url: `/uploads/${filename}` })
  } catch (err) {
    console.error("Upload error:", err)
    return NextResponse.json({ error: "Errore durante l'upload" }, { status: 500 })
  }
}
