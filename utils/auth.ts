import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { getPrisma } from "./prisma";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { nextCookies } from "better-auth/next-js";

export const getAuth = () => {
    let db: any;
    
    try {
        // พยายามดึงจาก Cloudflare Context ก่อน (สำหรับตอนรันบน Edge/Wrangler)
        const context = getRequestContext();
        db = context?.env?.DB;
    } catch (e) {
        // ถ้าแตก (เช่นตอนรัน npm run dev ปกติ) ให้ข้ามไปก่อน
        console.warn("Cloudflare Context not found, check if you're using Wrangler proxy.");
    }

    return betterAuth({
        database: prismaAdapter(
            getPrisma(db), 
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