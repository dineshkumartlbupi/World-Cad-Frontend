'use client';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Mail,
    Briefcase,
    FileText,
    Zap,
    Bell,
    Search,
    ChevronDown
} from 'lucide-react';

export default function AdminNavbar() {
    const pathname = usePathname();

    const getPageTitle = () => {
        if (pathname === '/admin') return 'Overview';
        if (pathname === '/admin/enquiry') return 'Enquiries';
        if (pathname === '/admin/updatecareers') return 'Careers Control';
        if (pathname === '/admin/blogs') return 'Blog Management';
        return 'Admin Portal';
    };

    const getPageIcon = () => {
        if (pathname === '/admin') return LayoutDashboard;
        if (pathname === '/admin/enquiry') return Mail;
        if (pathname === '/admin/updatecareers') return Briefcase;
        if (pathname === '/admin/blogs') return FileText;
        return Zap;
    };

    const Icon = getPageIcon();

    return (
        <header className="bg-white/70 backdrop-blur-xl sticky top-0 z-30 border-b border-gray-100/50">
            <div className="px-6 md:px-10 py-4 flex justify-between items-center max-w-[1800px] mx-auto">

                {/* Left: Search and Title (Mobile Hidden Search) */}
                <div className="flex items-center gap-8 flex-1">
                    <div className="hidden lg:flex items-center gap-3 bg-gray-100/50 px-4 py-2 rounded-2xl border border-gray-200/50 w-full max-w-sm group focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white transition-all duration-300">
                        <Search className="w-4 h-4 text-gray-400 group-focus-within:text-indigo-600" />
                        <input
                            type="text"
                            placeholder="Search something..."
                            className="bg-transparent border-none outline-none text-sm text-gray-600 placeholder:text-gray-400 w-full"
                        />
                    </div>

                    <div className="flex lg:hidden items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <Icon className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Right: Actions and Profile */}
                <div className="flex items-center gap-2 md:gap-6">
                    <div className="flex items-center gap-1 md:gap-2 pr-2 md:pr-6 border-r border-gray-100">
                        <button className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition-all relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                        </button>
                        <button className="hidden sm:flex p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition-all">
                            <Zap className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center gap-3 pl-2">
                        <div className="flex items-center gap-3 p-1 pr-3 rounded-2xl hover:bg-gray-50 cursor-pointer transition-all group">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
                                    A
                                </div>
                                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-center gap-1">
                                    <p className="text-sm font-bold text-gray-900 leading-none">Admin</p>
                                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                </div>
                                <p className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider mt-1">Super User</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

