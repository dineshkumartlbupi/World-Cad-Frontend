'use client';

import StatCard from '@/components/StatCard';
import Link from 'next/link';
import {
    FileText,
    Mail,
    Users,
    Briefcase,
    Settings,
    ArrowRight,
    Activity,
    Database,
    LayoutDashboard,
    TrendingUp,
    ExternalLink,
    ChevronRight,
    Zap
} from 'lucide-react';

export default function AdminPage() {
    return (
        <div className="max-w-[1700px] mx-auto space-y-6 px-2 md:px-4 py-0 animate-slide-up">

            {/* Header with Glassmorphic Detail */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3 font-outfit">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-200">
                            <LayoutDashboard className="w-6 h-6" />
                        </div>
                        Control Center
                    </h1>
                    <p className="text-slate-500 font-medium ml-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        System fully operational • Today is {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                {/* <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-2 px-5 py-3 bg-indigo-600 rounded-2xl text-sm font-bold text-white hover:bg-indigo-700 hover:shadow-[0_8px_25px_rgba(79,70,229,0.4)] transition-all shadow-lg active:scale-95">
                        <ExternalLink className="w-4 h-4" />
                        Live Site
                    </Link>
                </div> */}
            </div>

            {/* Stats Section - Premium Presentation
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <StatCard
                    label="Reach"
                    value="1.2K"
                    icon={<Users className="w-6 h-6" />}
                    trend="+12%"
                    trendUp={true}
                />
                <StatCard
                    label="Engagements"
                    value="12"
                    icon={<FileText className="w-6 h-6" />}
                    trend="+2"
                    trendUp={true}
                />
                <StatCard
                    label="Inquiries"
                    value="05"
                    icon={<Mail className="w-6 h-6" />}
                    trend="+1"
                    trendUp={true}
                />
                <StatCard
                    label="Talent Pool"
                    value="08"
                    icon={<Briefcase className="w-6 h-6" />}
                    trend="Stable"
                    trendUp={true}
                />
            </div> */}

            {/* Main Interactive Grid */}
            <div className="w-full">

                {/* Left: Platform Control */}
                <div className=" flex flex-col gap-10">
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_2px_30px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-[100px] -mr-32 -mt-32 transition-colors group-hover:bg-indigo-100/50" />

                        <div className="flex items-center justify-between mb-10 relative z-10">
                            <div>
                                <h3 className="text-xl font-black text-slate-900 font-outfit">Platform Orchestration</h3>
                                <p className="text-sm text-slate-400 font-medium mt-1 uppercase tracking-[0.15em]">Admin Modules</p>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-500">
                                3 Active Channels
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {[
                                {
                                    title: "Content Management",
                                    desc: "Editorial and portfolio assets",
                                    icon: <FileText className="w-6 h-6" />,
                                    href: "/admin/blogs",
                                },
                                {
                                    title: "Enquiry Desk",
                                    desc: "Global communications",
                                    icon: <Mail className="w-6 h-6" />,
                                    href: "/admin/enquiry",
                                },
                                {
                                    title: "Talent Desk",
                                    desc: "Manage career opportunities",
                                    icon: <Briefcase className="w-6 h-6" />,
                                    href: "/admin/updatecareers",
                                },
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className="group/item flex flex-col p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-500 hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.05)] relative overflow-hidden"
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover/item:text-indigo-600 transition-all duration-500 shadow-sm border border-slate-100">
                                            {item.icon}
                                        </div>

                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-8 right-8 text-slate-300 group-hover/item:text-indigo-600 transition-colors transform translate-x-4 group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-20 duration-500">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer - Minimal & Clean */}
            {/* <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 py-8">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                    WorldCAD Enterprise System • v2.4.1
                </p>
                <div className="flex items-center gap-8">
                    {['Security', 'Guidelines', 'Technical Support'].map((link) => (
                        <button key={link} className="text-[11px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors">
                            {link}
                        </button>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

