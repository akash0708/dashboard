"use client";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/signin");
}

// might just use the redirect function here once the auth is set up
