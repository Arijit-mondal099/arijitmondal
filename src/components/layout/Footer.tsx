"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-muted-foreground py-10">
        Design & Developed by {PERSONAL_INFO.name} © {currentYear}. All rights
        reserved.
      </div>
    </footer>
  );
}
