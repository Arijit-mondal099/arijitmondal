"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative">
      <div className="text-center text-sm text-muted-foreground py-10">
        Design & Developed by {PERSONAL_INFO.name} © {currentYear}. All rights
        reserved.
      </div>
    </footer>
  );
}
