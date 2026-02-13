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
        <div className="max-w-[1700px] mx-auto space-y-12 px-2 md:px-0 py-4 animate-slide-up">

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

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:shadow-lg transition-all shadow-sm">
                        <FileText className="w-4 h-4" />
                        Generate Report
                    </button>
                    <Link href="/" className="flex items-center gap-2 px-5 py-3 bg-indigo-600 rounded-2xl text-sm font-bold text-white hover:bg-indigo-700 hover:shadow-[0_8px_25px_rgba(79,70,229,0.4)] transition-all shadow-lg active:scale-95">
                        <ExternalLink className="w-4 h-4" />
                        Live Site
                    </Link>
                </div>
            </div>

            {/* Stats Section - Premium Presentation */}
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
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

                {/* Left: Platform Control */}
                <div className="xl:col-span-8 flex flex-col gap-10">
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-[0_2px_30px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-[100px] -mr-32 -mt-32 transition-colors group-hover:bg-indigo-100/50" />

                        <div className="flex items-center justify-between mb-10 relative z-10">
                            <div>
                                <h3 className="text-xl font-black text-slate-900 font-outfit">Platform Orchestration</h3>
                                <p className="text-sm text-slate-400 font-medium mt-1 uppercase tracking-[0.15em]">Admin Modules</p>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-500">
                                4 Active Channels
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 relative z-10">
                            {[
                                {
                                    title: "Media Library",
                                    desc: "Editorial and portfolio assets",
                                    icon: <FileText className="w-6 h-6" />,
                                    href: "/admin/blogs",
                                    count: "42 Files"
                                },
                                {
                                    title: "Inquiry Desk",
                                    desc: "Global communications",
                                    icon: <Mail className="w-6 h-6" />,
                                    href: "/admin/enquiry",
                                    count: "5 New"
                                },
                                {
                                    title: "Human Capital",
                                    desc: "Manage career opportunities",
                                    icon: <Briefcase className="w-6 h-6" />,
                                    href: "/admin/updatecareers",
                                    count: "8 Openings"
                                },
                                {
                                    title: "Core Config",
                                    desc: "Universal site preferences",
                                    icon: <Settings className="w-6 h-6" />,
                                    href: "/admin",
                                    count: "v2.4.1"
                                }
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
                                        <div className="text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50/50 px-3 py-1.5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-all transform translate-y-2 group-hover/item:translate-y-0">
                                            {item.count}
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

                {/* Right: Insight & Health */}
                <div className="xl:col-span-4 flex flex-col gap-8">

                    {/* Activity Insight */}
                    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400">Activity Pulse</h4>
                                <TrendingUp className="w-5 h-5 text-indigo-400" />
                            </div>

                            <div className="flex items-end gap-1 h-32 mb-8">
                                {[35, 65, 45, 85, 30, 55, 75, 95, 40, 60, 20, 50].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-white/10 hover:bg-indigo-500 rounded-t-lg transition-all duration-300 group/bar"
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-all text-center">
                                            {h}%
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                <div className="space-y-1">
                                    <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Uptime</p>
                                    <p className="text-xl font-black">99.98%</p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-indigo-400">
                                    <Zap className="w-5 h-5 fill-indigo-400/20" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Node Health */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                        <h4 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-[0.2em] flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                            Node Status
                        </h4>

                        <div className="space-y-6">
                            {[
                                { label: "Application Logic", status: "Operational", icon: <Activity className="w-5 h-5 text-emerald-500" />, color: "emerald" },
                                { label: "Data Persistence", status: "Connected", icon: <Database className="w-5 h-5 text-blue-500" />, color: "blue" },
                                { label: "CDN Backbone", status: "Optimal", icon: <ExternalLink className="w-5 h-5 text-indigo-500" />, color: "indigo" }
                            ].map((node, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-slate-200 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                            {node.icon}
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">{node.label}</span>
                                    </div>
                                    <div className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-${node.color}-50 text-${node.color}-600`}>
                                        {node.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer - Minimal & Clean */}
            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 py-8">
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
            </div>
        </div>
    );
}

