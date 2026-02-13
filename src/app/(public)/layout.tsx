import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
