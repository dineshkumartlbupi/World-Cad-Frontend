'use client';

import { useState, useEffect } from 'react';
import { Briefcase, Plus, X, Pencil, Trash, MapPin, Clock, Users, Building2, CheckCircle2 } from 'lucide-react';

interface Career {
    _id: string;
    position: string;
    department: string;
    experience: string;
    location: string;
    description: string;
    isActive: boolean;
}

export default function UpdateCareersPage() {
    const [careers, setCareers] = useState<Career[]>([]);

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        position: '',
        department: '',
        experience: '',
        location: '',
        description: '',
    });
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/careers');
                const data = await res.json();
                setCareers(data);
            } catch (error) {
                console.error('Failed to fetch careers', error);
            }
        };

        fetchCareers();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.position || !formData.department) {
            alert('Please fill in required fields');
            return;
        }

        try {
            if (editingId) {
                // UPDATE
                await fetch(`http://localhost:5000/api/careers/${editingId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            } else {
                // CREATE
                await fetch('http://localhost:5000/api/careers', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
            }

            const res = await fetch('http://localhost:5000/api/careers');
            const data = await res.json();
            setCareers(data);

            setEditingId(null);
            setShowForm(false);
            setFormData({
                position: '',
                department: '',
                experience: '',
                location: '',
                description: '',
            });
        } catch (error) {
            console.error('Submit failed', error);
        }
    };

    const handleDeleteCareer = async (id: string) => {
        if (!confirm('Are you sure you want to delete this position?')) return;

        try {
            await fetch(`http://localhost:5000/api/careers/${id}`, {
                method: 'DELETE',
            });

            setCareers(prev => prev.filter(career => career._id !== id));
        } catch (error) {
            console.error('Failed to delete career', error);
        }
    };

    const handleToggle = async (id: string) => {
        try {
            await fetch(`http://localhost:5000/api/careers/${id}/toggle`, {
                method: 'PATCH',
            });

            const res = await fetch('http://localhost:5000/api/careers');
            const data = await res.json();
            setCareers(data);
        } catch (error) {
            console.error('Toggle failed', error);
        }
    };

    return (
        <div className="space-y-10 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 font-outfit">Recruitment Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Design and publish active career opportunities.</p>
                </div>
                <button
                    onClick={() => {
                        if (showForm) {
                            setEditingId(null);
                            setFormData({ position: '', department: '', experience: '', location: '', description: '' });
                        }
                        setShowForm(!showForm);
                    }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md active:scale-95 ${showForm ? 'bg-gray-100 text-gray-600' : 'bg-primary text-black'}`}
                >
                    {showForm ? <X size={18} /> : <Plus size={18} />}
                    {showForm ? 'Cancel' : 'Add Position'}
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 animate-slide-up">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Briefcase size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 font-outfit">
                            {editingId ? 'Update Opportunity' : 'New Career Posting'}
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Job Title</label>
                            <input
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                placeholder="e.g. Lead CAD Engineer"
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Department</label>
                            <select
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium appearance-none"
                            >
                                <option value="">Select Category</option>
                                <option value="Design">Design</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Business">Business</option>
                                <option value="Operations">Operations</option>
                            </select>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Required Experience</label>
                            <input
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                placeholder="e.g. 3-5 Years"
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Location Type</label>
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium appearance-none"
                            >
                                <option value="">Select Type</option>
                                <option value="On-site">On-site</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Position Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={4}
                                placeholder="Briefly describe the role, responsibilities and key requirements..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium resize-none"
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-end gap-3 pt-4">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-primary text-black rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all outline-none"
                            >
                                {editingId ? 'Save Changes' : 'Create Job Posting'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Careers List */}
            <div className="grid grid-cols-1 gap-6">
                {careers.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-20 text-center">
                        <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-10 h-10 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 font-outfit">No positions listed</h3>
                        <p className="text-gray-500 mt-2 max-w-sm mx-auto">Start by adding your first job vacancy to recruit the best talent.</p>
                        <button
                            onClick={() => setShowForm(true)}
                            className="mt-6 text-primary font-bold hover:underline underline-offset-4"
                        >
                            Open first position &rarr;
                        </button>
                    </div>
                ) : (
                    careers.map((career) => (
                        <div
                            key={career._id}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors font-outfit">
                                            {career.position}
                                        </h3>
                                        <button
                                            onClick={() => handleToggle(career._id)}
                                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all ${career.isActive
                                                ? 'bg-green-50 text-green-600 border-green-100'
                                                : 'bg-gray-50 text-gray-400 border-gray-100'
                                                }`}
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full ${career.isActive ? 'bg-green-500' : 'bg-gray-300'}`} />
                                            {career.isActive ? 'Active' : 'Private'}
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
                                        {career.description}
                                    </p>

                                    <div className="flex flex-wrap gap-6 pt-2">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                                            <Building2 size={14} className="text-blue-500" />
                                            <span className="text-gray-600 uppercase tracking-widest italic">{career.department}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                                            <Clock size={14} className="text-orange-500" />
                                            <span className="text-gray-600 italic">{career.experience || 'Entry Level'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                                            <MapPin size={14} className="text-red-500" />
                                            <span className="text-gray-600 italic">{career.location || 'Remote'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 lg:self-start">
                                    <button
                                        onClick={() => {
                                            setFormData({
                                                position: career.position,
                                                department: career.department,
                                                experience: career.experience,
                                                location: career.location,
                                                description: career.description,
                                            });
                                            setEditingId(career._id);
                                            setShowForm(true);
                                        }}
                                        className="p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all shadow-sm"
                                        title="Edit Posting"
                                    >
                                        <Pencil size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCareer(career._id)}
                                        className="p-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-all shadow-sm"
                                        title="Delete Posting"
                                    >
                                        <Trash size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

