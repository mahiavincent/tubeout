// components/Header.tsx
import Link from 'next/link';
export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">YT Contact Finder</Link>
                <nav className="space-x-3">
                    <Link href="/dashboard" className="text-sm">Dashboard</Link>
                    <Link href="/(auth)/login" className="text-sm">Login</Link>
                </nav>
            </div>
        </header>
    );
}

