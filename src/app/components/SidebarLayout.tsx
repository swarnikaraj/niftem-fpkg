// components/SidebarLayout.tsx
"use client"
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Hub", href: "/hub" },
  { name: "Materials", href: "/materials" },
  { name: "Research", href: "/research" },
  { name: "Videos", href: "/videos" },
  { name: "Blog", href: "/blog" },
  { name: "Ask", href: "/ask" },
  { name: "Consult", href: "/consult" },
];

export default function SidebarLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-700 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6"><Link href={"/"}>NIFTEM</Link></h2>
        <nav className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition ${
                pathname === link.href ? "bg-green-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
