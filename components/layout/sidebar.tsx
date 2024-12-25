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
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { signOut, useSession } from "next-auth/react";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  variant?: "default" | "ghost";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const mainNavItems: SidebarItem[] = [
  {
    icon: <Home className="h-4 w-4" />,
    label: "Repositories",
    href: "/dashboard/repositories",
  },
  {
    icon: <CodeXml className="h-4 w-4" />,
    label: "AI Code Review",
    href: "/dashboard/code-review",
  },
  {
    icon: <Cloud className="h-4 w-4" />,
    label: "Cloud Security",
    href: "/dashboard/security",
  },
  {
    icon: <BookTextIcon className="h-4 w-4" />,
    label: "How to Use",
    href: "/dashboard/help",
  },
  {
    icon: <Settings className="h-4 w-4" />,
    label: "Settings",
    href: "/dashboard/settings",
  },
];

const bottomNavItems: SidebarItem[] = [
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Support",
    href: "/dashboard/support",
  },
  {
    icon: <LogOut className="h-4 w-4" />,
    label: "Logout",
    href: "#",
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      signOut({ callbackUrl: "/auth/signin" });
    },
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const githubUsername = session?.githubUsername;
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
            <SelectValue placeholder={githubUsername} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="UtkarshDhariyaPanwar">
              UtkarshDhariyaPanwar
            </SelectItem>
            <SelectItem value="AmartyaJha">AmartyaJha</SelectItem>
            <SelectItem value={githubUsername as string}>
              {githubUsername}
            </SelectItem>
          </SelectContent>
        </Select>

        {mainNavItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            // className="w-full justify-start"
            className={
              pathname === item.href
                ? "bg-[#1570EF] hover:bg-[#1570EF]/90 hover:text-white text-white w-full justify-start"
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
            <Link href={item.href} onClick={item.onClick}>
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
