import { PrismaClient } from '@prisma/client' 
import { PrismaD1 } from '@prisma/adapter-d1'

// ป้องกันปัญหา TypeScript หา D1Database ไม่เจอในบางสภาพแวดล้อม
export const getPrisma = (db: D1Database) => {
  if (!db) {
    // สำหรับตอนรัน local development ปกติ (ถ้าไม่ได้ใช้ wrangler dev)
    return new PrismaClient()
  }
  
  // สำหรับตอนรันบน Cloudflare (Edge Runtime)
  const adapter = new PrismaD1(db)
  return new PrismaClient({ adapter })
}