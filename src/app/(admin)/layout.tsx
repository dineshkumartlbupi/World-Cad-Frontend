import "./admin/admin.css";

export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-root selection:bg-indigo-100 selection:text-indigo-900">
            {children}
        </div>
    );
}
