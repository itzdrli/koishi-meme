import fs from 'fs'
import path from 'path'

export default defineEventHandler(() => {
  const memeDir = path.join(process.cwd(), 'public', 'meme')
  const files = fs.readdirSync(memeDir)
  return files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
})