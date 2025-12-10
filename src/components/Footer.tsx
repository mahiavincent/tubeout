export default function Footer() {
    return (
        <footer className="mt-12 text-center text-sm text-slate-600">
            © {new Date().getFullYear()} YT Contact Finder — extracts publicly available business emails only.
        </footer>
    );
}