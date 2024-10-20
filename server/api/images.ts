import fs from 'fs'
import path from 'path'

export default defineEventHandler((event) => {
  const memeDir = path.join(process.cwd(), 'public', 'meme')
  try {
    const files = fs.readdirSync(memeDir)
    return files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
  } catch (error) {
    return []
  }
})