'use client';

import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-indigo-50/30 font-inter lg:gap-4 lg:p-4 selection:bg-indigo-100 selection:text-indigo-900">
            <AdminSidebar />

            <main
                className="flex-1 flex flex-col transition-all duration-500 ease-in-out bg-white lg:rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative"
            >
                {/* Global Background Element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />

                <AdminNavbar />

                <div className="flex-1 p-6 lg:p-12 max-w-[1800px] mx-auto w-full overflow-y-auto custom-scrollbar relative z-10 no-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}

