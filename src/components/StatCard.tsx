import { ReactNode } from 'react';

export default function StatCard({
    label,
    value,
    icon,
    trend,
    trendUp
}: {
    label: string;
    value: string;
    icon: ReactNode;
    trend?: string;
    trendUp?: boolean
}) {
    return (
        <div className="relative bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.1)] transition-all duration-500 group cursor-default">
            {/* Background Accent - Glow effect */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${trendUp ? 'bg-indigo-500' : 'bg-rose-500'}`} />

            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-all duration-500 border border-transparent group-hover:border-indigo-100/50 transform group-hover:rotate-6">
                    {icon}
                </div>
                {trend && (
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-black tracking-tight ${trendUp
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100/50'
                        : 'bg-rose-50 text-rose-600 border border-rose-100/50'
                        }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${trendUp ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                        {trend}
                    </div>
                )}
            </div>

            <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em] mb-2">{label}</h3>
                <div className="flex items-baseline gap-2">
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                        {value}
                    </p>
                    {trend && <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">+12%</span>}
                </div>
            </div>
        </div>
    );

}