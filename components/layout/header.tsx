"use client";

import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky md:hidden top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between h-14 items-center px-4">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="CodeAnt AI"
            width={24}
            height={24}
            className="rounded md:hidden"
          />
          <span className="font-semibold md:hidden">CodeAnt AI</span>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
