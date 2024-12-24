"use client";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookText,
  Cloud,
  CodeXml,
  Home,
  LogOut,
  Menu,
  Phone,
  Settings,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const mainNavItems = [
  {
    icon: <Home className="h-4 w-4" />,
    label: "Repositories",
    href: "/repositories",
  },
  {
    icon: <CodeXml className="h-4 w-4" />,
    label: "AI Code Review",
    href: "/code-review",
  },
  {
    icon: <Cloud className="h-4 w-4" />,
    label: "Cloud Security",
    href: "/security",
  },
  {
    icon: <BookText className="h-4 w-4" />,
    label: "How to Use",
    href: "/help",
  },
  {
    icon: <Settings className="i-lucide-settings h-4 w-4" />,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Support",
    href: "/support",
  },
  {
    icon: <LogOut className="h-4 w-4" />,
    label: "Logout",
    href: "#",
  },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-fit pt-16">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="absolute top-0 left-0 right-0 px-4 py-3 bg-background flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="CodeAnt AI"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="font-semibold">CodeAnt AI</span>
          </div>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </SheetTrigger>
        </div>
        <nav className="space-y-1 pt-1 pb-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="UtkarshDhariyaPanwar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
