"use client";

import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 container-custom">
          {/* About */}
          <div className="space-y-3 lg:col-span-2">
            <h3 className="text-lg font-semibold">{PERSONAL_INFO.name}</h3>
            <p className="text-sm text-muted-foreground">
              Full-stack web developer with 6 months of hands-on industry experience, specializing in React.js, Node.js, and MongoDB. I build responsive user interfaces, secure REST APIs, and scalable, performance-driven applications. Passionate about clean code, real-world problem solving, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon];
                return Icon ? (
                  <Link
                    key={link.name}
                    href={link.url}
                    target={
                      link.icon === "email" || link.icon === "phone"
                        ? undefined
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
