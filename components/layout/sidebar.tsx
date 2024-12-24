"use client";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookTextIcon,
  Cloud,
  CodeXml,
  Home,
  LogOut,
  Phone,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  variant?: "default" | "ghost";
}

const mainNavItems: SidebarItem[] = [
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
    icon: <BookTextIcon className="h-4 w-4" />,
    label: "How to Use",
    href: "/help",
  },
  {
    icon: <Settings className="h-4 w-4" />,
    label: "Settings",
    href: "/settings",
  },
];

const bottomNavItems: SidebarItem[] = [
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Support",
    href: "/support",
  },
  {
    icon: <LogOut className="h-4 w-4" />,
    label: "Logout",
    href: "/logout",
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "hidden md:block fixed h-screen w-60 border-r bg-background px-3 py-4",
        className
      )}
    >
      <div className="flex items-center gap-2 px-3 mb-6">
        <Image
          src={logo}
          alt="CodeAnt AI"
          width={24}
          height={24}
          className="rounded"
        />
        <span className="font-light text-2xl">CodeAnt AI</span>
      </div>

      <nav className="space-y-1 flex-1">
        <Select>
          <SelectTrigger className="w-full mb-3">
            <SelectValue placeholder="UtkarshDhariyaPanwar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        {mainNavItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            // className="w-full justify-start"
            className={
              pathname === item.href
                ? "bg-[#1570EF] text-white w-full justify-start"
                : "w-full justify-start"
            }
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          </Button>
        ))}
      </nav>

      <div className="pt-4 space-y-1 sm:absolute bottom-4">
        {bottomNavItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
