// app/page.tsx
import { getAuth } from '@/utils/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const runtime = "edge";

export default async function HomePage() {

  try {
    const auth = getAuth();
    // ดักไว้ว่าถ้า headers() มีปัญหา ให้คืนค่า session เป็น null ไปก่อน
    const session = await auth.api.getSession({
      headers: await headers(),
    }).catch(() => null);

    if (session) {
      redirect('/dashbord');
    }
  } catch (e) {
    console.warn("Auth check skipped in dev mode due to context missing");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">Project2026</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                เข้าสู่ระบบ
              </Link>
              <Link
                href="/signup"
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                เริ่มต้นใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">ยินดีต้อนรับสู่</span>
            <span className="block text-indigo-600">CICD Better Auth Project</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            ระบบจัดการฐานข้อมูลด้วย Prisma และ SQLite พร้อมระบบยืนยันตัวตนที่ปลอดภัยด้วย Better Auth
          </p>

          <div className="mt-10 flex justify-center space-x-6">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/signup"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                สมัครสมาชิกเลย
              </Link>
            </div>
            <div className="inline-flex">
              <a
                href="https://github.com"
                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                เรียนรู้เพิ่มเติม
              </a>
            </div>
          </div>
        </div>

        {/* Feature แวบๆ (Optional) */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-indigo-600 text-2xl mb-2">⚡</div>
            <h3 className="font-bold">Fast Setup</h3>
            <p className="text-sm text-gray-500">รวดเร็วด้วย SQLite และ Prisma</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-indigo-600 text-2xl mb-2">🛡️</div>
            <h3 className="font-bold">Secure</h3>
            <p className="text-sm text-gray-500">ปลอดภัยด้วย Better Auth</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-indigo-600 text-2xl mb-2">🚀</div>
            <h3 className="font-bold">CI/CD Ready</h3>
            <p className="text-sm text-gray-500">พร้อมสำหรับการ Deployment</p>
          </div>
        </div>
      </main>
    </div>
  );
}