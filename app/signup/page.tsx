"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpAction } from "../action/auth";

export const runtime = "edge";

export default function SignUpPage() {
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        const result = await signUpAction(formData);
        if (result?.success) {
            // สั่ง redirect จากฝั่ง Client จะชัวร์กว่าในโหมด Dev
            router.push("/dashboard");
            router.refresh();
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">

                <div>
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
                        สร้างบัญชีใหม่
                    </h2>
                </div>

                <form className="mt-8 space-y-6" action={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                ชื่อผู้ใช้
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="สมชาย ใจดี"
                            />
                        </div>

                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                                อีเมล
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="somchai@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                รหัสผ่าน
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <span className="text-gray-600 mr-1">มีบัญชีอยู่แล้ว?</span>
                            {/* ถ้าใช้ Next.js ให้ใช้ Link component, ถ้าไม่ใช้ให้เปลี่ยนเป็น <a> */}
                            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 underline">
                                เข้าสู่ระบบ
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            สร้างบัญชี
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}