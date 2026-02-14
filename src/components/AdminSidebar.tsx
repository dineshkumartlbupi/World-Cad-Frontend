'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
    LayoutDashboard,
    Mail,
    Briefcase,
    FileText,
    ChevronLeft,
    Menu,
    X,
    Settings,
    Shield,
    Globe
} from 'lucide-react';

export default function AdminSidebar({ onCollapse }: { onCollapse?: (collapsed: boolean) => void }) {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        if (onCollapse) {
            onCollapse(newState);
        }
    };

    const navItems = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/enquiry', label: 'Enquiries', icon: Mail },
        { href: '/admin/updatecareers', label: 'Careers', icon: Briefcase },
        { href: '/admin/blogs', label: 'Blogs', icon: FileText },
    ];

    const secondaryItems = [
        { href: '/', label: 'Live Site', icon: Globe },
    ];

    return (
        <>
            {/* Mobile Menu Button - Modern Floating */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed bottom-8 right-8 z-50 p-4 bg-indigo-600 text-white rounded-2xl shadow-[0_8px_30px_rgb(79,70,229,0.4)] hover:shadow-[0_8px_30px_rgb(79,70,229,0.5)] transition-all hover:scale-105 active:scale-95"
                aria-label="Toggle Menu"
            >
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </button>

            {/* Mobile Overlay with Blur */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-slate-950/80 z-40 backdrop-blur-md transition-opacity duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:sticky top-0 lg:top-4 left-0 z-40
                h-screen lg:h-[calc(100vh-2rem)]
                bg-slate-950 text-slate-300
                border-r lg:border border-slate-800 lg:rounded-3xl
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isCollapsed ? 'w-24' : 'w-[280px]'}
                lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                flex flex-col shadow-2xl lg:ml-4 overflow-hidden
            `}>
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
                </div>

                {/* Toggle Button (Desktop) - Minimal & Integrated */}
                <button
                    onClick={toggleCollapse}
                    className="hidden lg:flex absolute -right-0 top-12 w-8 h-12 bg-slate-800 border-l border-y border-slate-700 rounded-l-xl items-center justify-center text-slate-400 hover:text-white transition-all z-10 hover:bg-slate-700"
                >
                    <ChevronLeft
                        className={`w-4 h-4 transition-transform duration-500 ${isCollapsed ? 'rotate-180' : ''}`}
                    />
                </button>

                {/* Logo Section */}
                <div className={`relative h-28 flex items-center ${isCollapsed ? 'justify-center px-0' : 'px-10'} transition-all duration-300`}>
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                            <div className={`relative w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-black text-2xl shadow-2xl transform transition-transform hover:scale-105 shrink-0`}>
                                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-indigo-400 to-purple-400">W</span>
                            </div>
                        </div>
                        <div className={`transition-all duration-500 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>
                            <h2 className="font-bold text-2xl text-white tracking-tight leading-none font-outfit">
                                World<span className="text-indigo-400">CAD</span>
                            </h2>
                            <p className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-2">Core System</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="relative flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar no-scrollbar">
                    <div className={`mb-4 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                        Main Menu
                    </div>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`
                                flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 group relative
                                ${isActive(item.href)
                                    ? 'bg-indigo-600/10 text-white border border-indigo-500/20 shadow-[0_0_20px_rgba(79,70,229,0.1)]'
                                    : 'text-slate-400 hover:bg-slate-900 hover:text-white border border-transparent'
                                }
                                ${isCollapsed ? 'justify-center mx-2' : ''}
                            `}
                            title={isCollapsed ? item.label : ''}
                        >
                            <span className={`relative z-10 transition-all duration-300 ${isActive(item.href) ? 'scale-110 text-indigo-400' : 'group-hover:scale-110 group-hover:text-white'}`}>
                                <item.icon className="w-5 h-5 transition-all" strokeWidth={2.5} />
                            </span>

                            {!isCollapsed && (
                                <span className="font-semibold text-[15px] tracking-wide relative z-10">{item.label}</span>
                            )}

                            {isActive(item.href) && (
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-2xl pointer-events-none" />
                            )}
                            
                            {isActive(item.href) && !isCollapsed && (
                                <div className="absolute left-0 w-1 h-6 bg-indigo-500 rounded-r-full" />
                            )}
                        </Link>
                    ))}

                    <div className={`mt-8 mb-4 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                        System
                    </div>
                    {secondaryItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`
                                flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group
                                text-slate-500 hover:bg-slate-900 hover:text-white
                                ${isCollapsed ? 'justify-center mx-2' : ''}
                            `}
                        >
                            <item.icon className="w-5 h-5 shrink-0" />
                            {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                {/* Sidebar Footer - Premium Profile */}
                <div className={`relative p-6 transition-all duration-300 ${isCollapsed ? 'px-4' : 'px-6'}`}>
                    <div className="absolute inset-x-4 top-0 h-px bg-slate-800" />
                    <div className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-slate-900 cursor-pointer ${isCollapsed ? 'justify-center' : ''}`}>
                        <div className="relative shrink-0">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-sm font-black shadow-lg">
                                AD
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-950 rounded-full" />
                        </div>
                        {!isCollapsed && (
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-white truncate">Administrator</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Super User</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}

