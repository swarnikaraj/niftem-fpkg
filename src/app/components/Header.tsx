// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-green-700">
        <Link href="/">NIFTEM</Link>
      </div>
      <div className="space-x-4">
        <Link href="/login" className="text-gray-700 hover:text-green-600 font-medium">
          Login
        </Link>
        <Link href="/register" className="text-gray-700 hover:text-green-600 font-medium">
          Register
        </Link>
      </div>
    </header>
  );
}
