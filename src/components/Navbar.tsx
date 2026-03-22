"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, type NavItem } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isItemActive = (item: NavItem) => {
    if (item.href && isActive(item.href)) return true;
    return item.children?.some((child) => isActive(child.href)) ?? false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2a0906]/95 shadow-md"
          : "bg-[#2a0906]/90 border-b border-white/10"
      }`}
    >
      <div className="w-full flex justify-center mx-auto px-6 py-4 md:py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/image.png"
                alt="IIT Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-semibold text-2xl tracking-wider hidden md:block">
              IIT DELHI
            </span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isItemActive(item);

              if (!hasChildren) {
                if (!item.href) return null;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative text-white text-sm lg:text-base font-semibold tracking-[0.18em] pb-3 transition-colors duration-200 ${
                      active ? "text-[#d44a31]" : "hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-[3px] h-[2px] bg-[#6f8cff] transition-all duration-300 ${
                        active
                          ? "w-full opacity-100"
                          : "w-0 opacity-100 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative group/item">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`relative inline-flex items-center text-white text-sm lg:text-base font-semibold tracking-[0.18em] pb-3 transition-colors duration-200 ${
                        active ? "text-[#d44a31]" : "group-hover:text-white"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-[3px] h-[2px] bg-[#6f8cff] transition-all duration-300 ${
                          active
                            ? "w-full opacity-100"
                            : "w-0 opacity-100 group-hover/item:w-full"
                        }`}
                      />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={`relative inline-flex items-center text-white text-sm lg:text-base font-semibold tracking-[0.18em] pb-3 transition-colors duration-200 ${
                        active ? "text-[#d44a31]" : "group-hover:text-white"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-[3px] h-[2px] bg-[#6f8cff] transition-all duration-300 ${
                          active
                            ? "w-full opacity-100"
                            : "w-0 opacity-100 group-hover/item:w-full"
                        }`}
                      />
                    </button>
                  )}

                  <div
                    className="
                      absolute left-1/2 top-full mt-0 w-[min(100vw-3rem,300px)]
                      -translate-x-1/2
                      bg-[#ececec]
                      border-b border-[#d44a31]
                      px-6 py-5
                      opacity-0 translate-y-1
                      pointer-events-none
                      transition-all duration-150 ease-out
                      group-hover/item:opacity-100
                      group-hover/item:translate-y-0
                      group-hover/item:pointer-events-auto
                    "
                  >
                    <div className="grid grid-cols-1 gap-y-4">
                      {item.children?.map((child) => {
                        const childActive = isActive(child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`text-base lg:text-xl leading-tight text-[#2f2f2f] underline-offset-4 transition-colors duration-150 ${
                              childActive
                                ? "text-[#1d1d1d] underline"
                                : "hover:text-[#1d1d1d] hover:underline"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
