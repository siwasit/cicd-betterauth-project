"use client";

import { signOutAction } from "../action/auth";

export function SignOutButton() {
    return (
        <button 
            onClick={async () => {
                await signOutAction();
                // หรือใช้ window.location.href = "/login" เพื่อล้างสถานะทั้งหมด
            }}
            className="bg-indigo-600 cursor-pointer text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
            ออกจากระบบ
        </button>
    );
}