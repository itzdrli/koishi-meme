import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  const memeDir = path.join(process.cwd(), 'public', 'meme')
  
  try {
    const files = fs.readdirSync(memeDir)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    
    if (imageFiles.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No meme images found'
      })
    }
    
    // 随机选择一张图片
    const randomIndex = Math.floor(Math.random() * imageFiles.length)
    const randomImage = imageFiles[randomIndex]
    
    // 返回图片的 URL 路径
    return {
      filename: randomImage,
      url: `/meme/${encodeURIComponent(randomImage)}`,
      total: imageFiles.length
    }
  } catch (error) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to read meme directory'
    })
  }
})