"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50">
      {/* Floating glass capsule */}
      <div className="flex justify-center">
        <div
          className={clsx(
            "w-[80vw]",
            "max-w-7xl",
            "backdrop-blur-2xl",
            "bg-white/10",
            "border border-white/30",
            "rounded-full",
            "shadow-2xl"
          )}
        >
          <div className="px-10">
            <div className="h-24 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-4">
                <div className="relative h-14 w-14">
                  <Image
                    src="/logo.jpg"
                    alt="Demeter Seed"
                    fill
                    sizes="56px"
                    className="object-contain"
                    priority
                  />
                </div>

                <span className="text-xl font-extrabold tracking-tight text-green-600 leading-tight">
                  Demeter Seed
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "px-5 py-2",
                      "rounded-full",
                      "text-green-600 font-semibold",
                      "bg-white/20 backdrop-blur-md shadow-md",
                      "hover:bg-white/35 hover:-translate-y-0.5",
                      "transition-all"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-green-600"
                aria-label="Toggle menu"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex justify-center md:hidden">
          <div
            className={clsx(
              "w-[90%]",
              "backdrop-blur-xl",
              "bg-white/15",
              "border border-white/30",
              "rounded-2xl",
              "shadow-xl"
            )}
          >
            <nav className="flex flex-col px-6 py-5 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "px-4 py-3",
                    "rounded-xl",
                    "text-green-600 font-semibold",
                    "bg-white/25 shadow"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
