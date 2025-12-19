import { headers } from "next/headers";
import { signOutAction } from "../action/auth";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/login');
    }
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold text-indigo-600">Project2026</span>
                        </div>
                        <div className="flex space-x-4 items-center">

                            <div>
                                <span className="text-gray-600 px-3 py-2 text-sm font-medium">ยินดีต้อนรับ, {session.user.name}</span>
                            </div>

                            <form action={signOutAction}>
                                <button type="submit" className="bg-indigo-600 cursor-pointer text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">ออกจากระบบ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}