"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import MenuSvg from "../MenuSvg";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-2 lg:inset-x-0 top-6 z-50 container-custom border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 rounded-full">
      <nav className="flex h-18 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center h-9 w-9">
          <Image
            src="/app_images/profile.jpg"
            alt="Profile image"
            fill
            className="object-cover rounded-full"
          />
        </Link>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex md:items-center md:gap-6 border py-3 px-6 rounded-full backdrop-blur-3xl font-font-code">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground uppercase font-code cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Theme & Hamburger button */}
        <div className="flex items-center gap-2">
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Toggle theme"
                  className="rounded-full cursor-pointer"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden border text-black dark:text-white"
          >
            <MenuSvg openNavigation={mobileMenuOpen} />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation links */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-2 lg:inset-0 top-24 z-40 min-h-[calc(100vh-10rem)] bg-background backdrop-blur supports-backdrop-filter:bg-background/99 rounded-2xl"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="container-custom py-8 flex flex-col gap-4 border h-full rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full px-4 py-4 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors border text-center uppercase font-code"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="grow" />
            <Button size={"lg"} className="p-4">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
