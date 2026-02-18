'use client';
import AdminEditor from '@/components/AdminEditor';
import { useEffect, useState } from 'react';
import { FileText, Plus, X, Pencil, Trash, Tag, Calendar, Image as ImageIcon, Link as LinkIcon, MessageSquare } from 'lucide-react';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  content: string;
  isActive: boolean;
  createdAt: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    category: '',
    image: '',
    content: '',
  });

  const fetchBlogs = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to fetch blogs', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.slug) {
      alert('Title and slug required');
      return;
    }

    try {
      if (editingId) {
        await fetch(`http://localhost:5000/api/blogs/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        await fetch('http://localhost:5000/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      await fetchBlogs();
      setEditingId(null);
      setShowForm(false);
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        category: '',
        image: '',
        content: '',
      });
    } catch (error) {
      console.error('Blog operation failed', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete blog permanently?')) return;
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: 'DELETE',
    });
    fetchBlogs();
  };

  const handleToggle = async (id: string) => {
    await fetch(`http://localhost:5000/api/blogs/${id}/toggle`, {
      method: 'PATCH',
    });
    fetchBlogs();
  };

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-outfit">Content Management</h1>
          <p className="text-sm text-gray-500 mt-1">Create, edit and publish articles for your audience.</p>
        </div>
        <button
          onClick={() => {
            if (showForm) {
              setEditingId(null);
              setFormData({ title: '', slug: '', excerpt: '', category: '', image: '', content: '' });
            }
            setShowForm(!showForm);
          }}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-sm active:scale-95 ${showForm ? 'bg-gray-100 text-gray-600' : 'bg-primary text-black'}`}
        >
          {showForm ? <X size={18} /> : <Plus size={18} />}
          {showForm ? 'Cancel' : 'Create Article'}
        </button>
      </div>

      {/* Form Section */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 animate-slide-up">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <FileText size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 font-outfit">
              {editingId ? 'Edit Article' : 'New Article Draft'}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Article Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. The Future of 3D Modeling"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">URL Slug</label>
                <div className="relative">
                  <input
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="future-of-3d-modeling"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium pl-10"
                  />
                  <LinkIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Category</label>
                <div className="relative">
                  <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="e.g. Design Trends"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium pl-10"
                  />
                  <Tag size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Cover Image URL</label>
                <div className="relative">
                  <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium pl-10"
                  />
                  <ImageIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Short Excerpt</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={2}
                placeholder="A brief summary for cards and search results..."
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium resize-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Article Content (Markdown/HTML)</label>
              <AdminEditor
                value={formData.content}
                onChange={(value) =>
                  setFormData(prev => ({
                    ...prev,
                    content: value,
                  }))
                }
              />

            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-10 py-3 bg-primary text-black rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all outline-none"
              >
                {editingId ? 'Update Article' : 'Publish Article'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Articles List */}
      <div className="grid grid-cols-1 gap-6">
        {blogs.length === 0 ? (
          <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-20 text-center text-gray-400">
            <MessageSquare size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-outfit font-medium">No articles published yet.</p>
          </div>
        ) : (
          blogs.map(blog => (
            <div key={blog._id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-full md:w-32 h-24 rounded-xl bg-gray-100 overflow-hidden shrink-0 relative">
                {blog.image ? (
                  <img src={blog.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon size={24} className="text-gray-300" />
                  </div>
                )}
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider ${blog.isActive ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                    {blog.isActive ? 'Live' : 'Draft'}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{blog.category}</span>
                  <span className="text-gray-300 text-xs">•</span>
                  <span className="text-[10px] font-medium text-gray-400 flex items-center gap-1">
                    <Calendar size={10} />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors font-outfit leading-snug">
                  {blog.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-1 italic max-w-2xl">
                  {blog.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end md:self-center">
                {/* <button
                  onClick={() => handleToggle(blog._id)}
                  className={`p-2 rounded-lg transition-all ${blog.isActive ? 'text-gray-400 hover:text-gray-600' : 'text-primary hover:bg-primary/5'}`}
                  title={blog.isActive ? 'Hide' : 'Publish'}
                >
                  {blog.isActive ? <EyeOff size={18} /> : <Eye size={18} />}
                </button> */}
                <button
                  onClick={() => {
                    setFormData({
                      title: blog.title,
                      slug: blog.slug,
                      excerpt: blog.excerpt,
                      category: blog.category,
                      image: blog.image,
                      content: blog.content,
                    });
                    setEditingId(blog._id);
                    setShowForm(true);
                  }}
                  className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-all"
                  title="Edit"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-all"
                  title="Delete"
                >
                  <Trash size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

