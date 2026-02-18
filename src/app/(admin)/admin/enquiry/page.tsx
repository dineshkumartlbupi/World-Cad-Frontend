'use client';

import { useEffect, useState } from 'react';
import { Mail, Calendar, Zap, Clock, FileDown, Inbox, Send, ChevronRight, Search, Filter } from 'lucide-react';
import StatCard from '@/components/StatCard';

type Enquiry = {
    _id: string;
    name: string;
    email: string;
    serviceType: string;
    projectDetails: string;
    createdAt: string;
};

const ITEMS_PER_PAGE = 10;

export default function AdminEnquiryPage() {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchEnquiries = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/contacts');
                const data = await res.json();
                setEnquiries(Array.isArray(data) ? data.reverse() : []);
            } catch (error) {
                console.error('Failed to fetch enquiries', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEnquiries();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] animate-in fade-in duration-700">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-indigo-50 border-t-indigo-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full animate-ping opacity-20"></div>
                    </div>
                </div>
                <p className="text-slate-400 font-bold uppercase tracking-widest mt-6 text-xs">Synchronizing data...</p>
            </div>
        );
    }

    const totalPages = Math.ceil(enquiries.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentEnquiries = enquiries.slice(startIndex, endIndex);

    const handleMailClick = (email: string, name: string) => {
        const subject = 'Regarding your enquiry at World CAD Design';
        const body = `Hi ${name},\n\nThank you for reaching out to World CAD Design. We appreciate your interest and will get back to you shortly.\n\nBest regards,\nWorld CAD Design Team`;

        const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=${encodeURIComponent(email)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank');
    };

    return (
        <div className="space-y-12 animate-slide-up">
            {/* Header with Search Integration */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight font-outfit">Enquiry Registry</h1>
                    <p className="text-slate-500 font-medium mt-1">Global incoming communications and project requests.</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {/* <div className="relative flex-1 min-w-[280px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Filter by name or email..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none"
                        />
                    </div> */}
                    {/* <button className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
                        <Filter size={16} className="text-slate-400" />
                        Sort
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                        <FileDown size={18} />
                        Export
                    </button> */}
                </div>
            </div>

            {/* Stats Overview - Using the new premium cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <StatCard
                    label="Volume"
                    value={enquiries.length.toString()}
                    icon={<Inbox size={24} />}
                    trend="Total"
                    trendUp={true}
                />
                <StatCard
                    label="Current Month"
                    value={enquiries.filter(e => new Date(e.createdAt).getMonth() === new Date().getMonth()).length.toString()}
                    icon={<Calendar size={24} />}
                    trend="Active"
                    trendUp={true}
                />
                <StatCard
                    label="Recency (7d)"
                    value={enquiries.filter(e => (new Date().getTime() - new Date(e.createdAt).getTime()) / (1000 * 60 * 60 * 24) < 7).length.toString()}
                    icon={<Zap size={24} />}
                    trend="+1"
                    trendUp={true}
                />
                <StatCard
                    label="Response Time"
                    value="2.4h"
                    icon={<Clock size={24} />}
                    trend="-12%"
                    trendUp={false}
                />
            </div>

            {/* Content Section - Advanced Table Card */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_2px_30px_-10px_rgba(0,0,0,0.03)] overflow-hidden relative">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                {['Contributor', 'Credential', 'Channel', 'Content Preview', 'Timestamp', 'Control'].map((header) => (
                                    <th key={header} className="px-7 py-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100/50">
                            {enquiries.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-8 py-32 text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-50 mb-6 transition-transform hover:scale-110 duration-500">
                                            <Inbox className="w-10 h-10 text-slate-300" />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 font-outfit uppercase tracking-tight">Vault is empty</h3>
                                        <p className="text-sm text-slate-400 mt-2 font-medium">New transmissions will materialize here automatically.</p>
                                    </td>
                                </tr>
                            ) : (
                                currentEnquiries.map((item) => (
                                    <tr key={item._id} className="group hover:bg-slate-50/50 transition-all duration-300">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-black text-xs">
                                                    {item.name.charAt(0)}
                                                </div>
                                                <div className="font-black text-slate-900 tracking-tight">{item.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-500 font-semibold italic">{item.email}</td>
                                        <td className="px-5 py-4">
                                            <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-black bg-indigo-50 text-indigo-600 border border-indigo-100/50 uppercase tracking-widest group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                                {item.serviceType}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="max-w-[240px] text-sm text-slate-500 font-medium leading-relaxed line-clamp-1 group-hover:line-clamp-none transition-all" title={item.projectDetails}>
                                                {item.projectDetails}
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-400 font-bold uppercase tracking-tighter">
                                            {new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </td>
                                        <td className="px-5 py-4">
                                            <button
                                                onClick={() => handleMailClick(item.email, item.name)}
                                                className="inline-flex items-center gap-2.5 px-5 py-2.5 text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-sm hover:shadow-indigo-200 transition-all duration-500"
                                            >
                                                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                Transmit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Advanced Pagination */}
                {totalPages > 1 && (
                    <div className="px-5 py-4 border-t border-slate-50 flex items-center justify-between bg-slate-50/20 backdrop-blur-sm">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                            Projection <span className="text-slate-900">{startIndex + 1}</span> to <span className="text-slate-900">{Math.min(endIndex, enquiries.length)}</span> of <span className="text-slate-900">{enquiries.length}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(p => p - 1)}
                                className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-black text-slate-600 hover:bg-white hover:shadow-sm disabled:opacity-20 transition-all uppercase tracking-widest"
                            >
                                Previous
                            </button>
                            <div className="flex items-center gap-1">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${currentPage === i + 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400 hover:bg-slate-100'}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(p => p + 1)}
                                className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-black text-slate-600 hover:bg-slate-50 hover:shadow-sm disabled:opacity-20 transition-all uppercase tracking-widest"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


