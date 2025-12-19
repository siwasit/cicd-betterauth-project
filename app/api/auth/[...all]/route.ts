import { getAuth } from "@/utils/auth";
import { NextRequest } from "next/server";

export const runtime = "edge"; 

export const GET = async (request: NextRequest) => {
    const auth = getAuth(); // เรียกใช้ข้างในนี้เท่านั้น
    const { GET: handler } = await import("better-auth/next-js").then(m => m.toNextJsHandler(auth));
    return handler(request);
};

export const POST = async (request: NextRequest) => {
    const auth = getAuth(); // เรียกใช้ข้างในนี้เท่านั้น
    const { POST: handler } = await import("better-auth/next-js").then(m => m.toNextJsHandler(auth));
    return handler(request);
};