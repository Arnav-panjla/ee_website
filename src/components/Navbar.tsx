"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

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

  const navItems: NavItem[] = [
    { label: "HOME", href: "/" },
    { label: "GALLERY", href: "/gallery" },
    { label: "PEOPLE", href: "/people" },
    { label: "ENGAGE", href: "/engage" },
    { label: "CONTACT", href: "/contact" },
    {
      label: "ADMISSION",
      children: [
        { label: "UG", href: "/ug" },
        { label: "PG", href: "/pg" },
      ],
    },
    { label: "RESEARCH", href: "/research" },
    {
      label: "ACADEMICS",
      children: [
        { label: "BTECH", href: "/btech" },
        { label: "MSR", href: "/msr" },
        { label: "MTECH", href: "/mtech" },
        { label: "PHD", href: "/phd" },
      ],
    },
  ];

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
          ? "bg-[#222]/85 backdrop-blur-md shadow-lg"
          : "bg-[#1f1f1f]/75 backdrop-blur-sm border-b border-white/10"
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
            <span className="text-white font-semibold text-2xl tracking-wider">
              IIT DELHI
            </span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isItemActive(item);

              if (!hasChildren && item.href) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative text-white text-sm lg:text-base font-semibold tracking-[0.18em] pb-1 transition-colors duration-200 ${
                      active ? "text-red-500" : "hover:text-violet-400"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-violet-500 transition-all duration-300 ${
                        active
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full"
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
                      className={`group inline-flex items-center gap-2 text-white text-sm lg:text-base font-semibold tracking-[0.18em] pb-1 transition-colors duration-200 ${
                        active ? "text-red-500" : "group-hover:text-violet-400"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`text-xs transition-transform duration-200 ${
                          active
                            ? "text-red-400 rotate-180"
                            : "text-white/70 group-hover:text-violet-300"
                        }`}
                      >
                        ▾
                      </span>
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-violet-500 transition-all duration-300 ${
                          active
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={`relative inline-flex items-center gap-2 text-white text-sm lg:text-base font-semibold tracking-[0.18em] pb-1 transition-colors duration-200 ${
                        active ? "text-red-500" : "hover:text-violet-400"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`text-xs transition-transform duration-200 ${
                          active ? "text-red-400 rotate-180" : "text-white/70"
                        }`}
                      >
                        ▾
                      </span>
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-violet-500 transition-all duration-300 ${
                          active ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </button>
                  )}

                  <div
                    className="
                      absolute left-1/2 top-full mt-4 w-[220px]
                      -translate-x-1/2
                      rounded-lg
                      bg-[#0f1115]
                      border border-white/12
                      shadow-[0_18px_40px_rgba(0,0,0,0.55)]
                      backdrop-blur-sm
                      opacity-0 translate-y-2 scale-95
                      pointer-events-none
                      transition-all duration-200 ease-out
                      group-hover/item:opacity-100
                      group-hover/item:translate-y-0
                      group-hover/item:scale-100
                      group-hover/item:pointer-events-auto
                    "
                  >
                    {/* Header */}
                    <div className="px-4 pt-4 pb-2 text-[10px] font-semibold tracking-[0.3em] text-white/40 uppercase">
                      {/* {item.label} */}
                    </div>

                    {/* Links */}
                    <div className="px-2 pb-3 space-y-1">
                      {item.children?.map((child) => {
                        const childActive = isActive(child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`
                              group/link
                              flex items-center justify-between
                              rounded-md
                              px-5 py-3.5
                              text-sm font-medium tracking-wide text-center
                              transition-all duration-150
                              ${
                                childActive
                                  ? `
                                    bg-red-500/15 text-red-300
                                    shadow-[inset_0_0_0_1px_rgba(239,68,68,0.4)]
                                  `
                                  : `
                                    text-white/80
                                    hover:bg-white/6 hover:text-white
                                  `
                              }
                            `}
                          >
                            <span className="text-xl w-full text-center">
                              {child.label}
                            </span>

                            {/* subtle arrow on hover */}
                            <span
                              className="
                                text-xs text-white/30
                                translate-x-1 opacity-0
                                transition-all duration-150
                                group-hover/link:opacity-100
                                group-hover/link:translate-x-0
                              "
                            >
                              →
                            </span>
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
