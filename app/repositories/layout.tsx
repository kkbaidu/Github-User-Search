"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeProvider } from "@/lib/theme-provider";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathName = usePathname();
    return (
      <html lang="en" className="dark:text-white">
          <body className="w-full flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-row justify-center w-full items-center top-0 fixed h-[10vh]">
              <div className="hidden md:flex lg:flex flex-row justify-between items-center w-full md:w-1/3 lg::w-1/3 px-2">
                <div className={`${pathName === "/repositories"? "text-white font-bold text-lg border-b" : "text-gray-500"} hover:text-gray-400`}>
                  <Link href={"/repositories"} > Repositories {"(15)"} </Link>
                </div>
                <div className={`${pathName === "/repositories/followers"? "text-white font-bold text-lg border-b" : "text-gray-500"} hover:text-gray-400`}>
                  <Link href={"/repositories/followers"} > Followers </Link>
                </div>
                <div className={`${pathName === "/repositories/following"? "text-white font-bold text-lg border-b" : "text-gray-500"} hover:text-gray-400`}>
                  <Link href={"/repositories/following"} > Following </Link>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 md:mt-16 mb-7 lg:mt-16 py-5 px-2 md:pl-10 md:pr-16 lg:pl-10 lg:pr-16">{children}</div>
            <div className="md:hidden lg:hidden flex flex-row justify-between items-center w-full md:w-1/3 lg::w-1/3 px-2 fixed bottom-0 dark:bg-black h-16">
                <div className={`${pathName === "/repositories"? "text-white font-bold text-lg border-b" : "text-gray-500"} hover:text-gray-400`}>
                  <Link href={"/repositories"} > Repositories {"(15)"} </Link>
                </div>
                <div className={`${pathName === "/repositories/followers"? "text-white font-bold text-lg border-b" : "text-gray-500"} hover:text-gray-400`}>
                  <Link href={"/repositories/followers"} > Followers </Link>
                </div>
                <div className={`${pathName === "/repositories/following"? "text-white font-bold text-lg border-b" : "text-gray-500"} hover:text-gray-400`}>
                  <Link href={"/repositories/following"} > Following </Link>
                </div>
              </div>
            </ThemeProvider>
          </body>
      </html>
    );
  }