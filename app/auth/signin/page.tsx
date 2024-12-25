"use client";
import azure from "@/assets/azure.png";
import bucket from "@/assets/bucket.png";
import github from "@/assets/github.png";
import gitlab from "@/assets/gitlab.png";
import logo from "@/assets/logo.png";
import piemail from "@/assets/piemail.png";
import subtract from "@/assets/subtract.png";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signIn } from "next-auth/react";
import Image from "next/image";

const platforms = [
  {
    name: "GitHub",
    icon: github,
    onClick: () => signIn("github", { callbackUrl: "/dashboard/repositories" }),
  },
  {
    name: "Bitbucket",
    icon: bucket,
    onClick: () => console.log("Sign in with Bitbucket clicked"), // Replace with actual handler
  },
  {
    name: "Azure DevOps",
    icon: azure,
    onClick: () => console.log("Sign in with Azure DevOps clicked"), // Replace with actual handler
  },
  {
    name: "GitLab",
    icon: gitlab,
    onClick: () => console.log("Sign in with GitLab clicked"), // Replace with actual handler
  },
];

export default function Home() {
  const handleSignIn = () => {
    signIn("github", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <div className="left w-1/2 h-full hidden sm:block relative">
        <div className="absolute w-full h-full flex flex-row items-end">
          <Image
            src={subtract}
            alt="logo"
            width={284}
            height={319}
            className=""
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            src={piemail}
            alt="logo"
            width={474}
            height={322}
            className="z-20"
          />
        </div>
      </div>

      <Separator orientation="vertical" className="hidden sm:block" />

      <div className="right w-full sm:w-1/2 h-full flex flex-col justify-center items-center">
        <Card className="w-[90%] text-center">
          <CardHeader className="flex flex-row items-center justify-center gap-3">
            <Image src={logo} alt="logo" width={35.62} height={40} />{" "}
            <span className="text-3xl">CodeAnt AI</span>
          </CardHeader>
          <CardDescription className="text-xl sm:text-[32px] sm:leading-[48px] text-black font-medium sm:font-semibold mb-4">
            Welcome to CodeAnt AI
          </CardDescription>
          <Tabs defaultValue="account" className="w-[100%] mx-auto">
            <TabsList className="grid w-[90%] mx-auto grid-cols-2 my-4 text-xl">
              <TabsTrigger value="account">SAAS</TabsTrigger>
              <TabsTrigger value="password">Self Hosted</TabsTrigger>
            </TabsList>
            <Separator orientation="horizontal" />
            <TabsContent value="account">
              <div className="space-y-2 h-48 my-4">
                {platforms.map((platform, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-[90%] sm:w-[80%] justify-center gap-3 text-foreground/90"
                    onClick={platform.onClick}
                  >
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      width={16}
                      height={16}
                    />
                    Sign in with {platform.name}
                  </Button>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="space-y-2 h-48 my-4">
                {platforms.slice(0, 2).map((platform, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-[90%] sm:w-[80%] justify-center gap-3 text-foreground/90"
                    onClick={platform.onClick}
                  >
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      width={16}
                      height={16}
                    />
                    Sign in with {platform.name}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
        <p className="text-center text-sm w-full my-4">
          By signing up you agree to the{" "}
          <span className="font-bold">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
