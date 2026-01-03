'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'PEOPLE', href: '/people' },
    { label: 'ENGAGE', href: '/engage' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'ADMISSION', href: '/admission' },
    { label: 'RESEARCH', href: '/research' },
    { label: 'ACADEMICS', href: '/academics' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#222]/85 backdrop-blur-md shadow-lg'
          : 'bg-[#1f1f1f]/75 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="w-full flex justify-center mx-auto px-6 py-4 md:py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/image.png" alt="IIT Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-semibold text-2xl tracking-wider">
              IIT DELHI
            </span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-white text-sm lg:text-base font-semibold tracking-[0.18em] pb-1 transition-colors duration-200 ${
                  isActive(item.href) ? 'text-red-500' : 'hover:text-violet-400'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-violet-500 transition-all duration-300 ${
                    isActive(item.href) ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
