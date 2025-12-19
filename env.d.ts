// env.d.ts
import { D1Database } from "@cloudflare/workers-types";

declare global {
  interface CloudflareEnv {
    DB: D1Database; // ประกาศว่าใน CloudflareEnv จะต้องมี DB นะ
    BETTER_AUTH_SECRET: string;
    BETTER_AUTH_URL: string;
  }
}

export {};