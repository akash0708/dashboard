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
import { Link } from "next-view-transitions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavItems {
  icon: React.ReactNode;
  label: string;
  href: string;
  variant?: "default" | "ghost";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const mainNavItems: NavItems[] = [
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
    icon: <BookText className="h-4 w-4" />,
    label: "How to Use",
    href: "/dashboard/help",
  },
  {
    icon: <Settings className="h-4 w-4" />,
    label: "Settings",
    href: "/dashboard/settings",
  },
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
      signOut({ callbackUrl: "/" });
    },
  },
];

export function MobileNav() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const githubUsername = session?.githubUsername;
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
          <div className="pt-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent",
                  pathname === item.href && "bg-blue-500 text-white"
                )}
                // className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent"
                onClick={item.onClick}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
