import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { getPrisma } from "./prisma";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { nextCookies } from "better-auth/next-js";

// กำหนด Interface สำหรับ Cloudflare Environment
interface CloudflareEnv {
  DB: D1Database;
}

export const getAuth = () => {
    // กำหนด Type ให้ชัดเจนแทน any
    let db: D1Database | undefined;
    
    try {
        const context = getRequestContext();
        // ระบุ Type ให้กับ context.env เพื่อให้เข้าถึง .DB ได้อย่างถูกต้อง
        const env = context?.env as CloudflareEnv;
        db = env?.DB;
    } catch (e) {
        console.warn("Cloudflare Context not found, check if you're using Wrangler proxy.");
    }

    return betterAuth({
        database: prismaAdapter(
            getPrisma(db!), 
            {
                provider: "sqlite",
            }
        ),
        plugins: [nextCookies()],
        emailAndPassword: {
            enabled: true,
        },
        baseURL: process.env.BETTER_AUTH_URL
    });
};