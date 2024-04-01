import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" className="dark:bg-black bg-black dark:text-white">
          <body className="w-full flex flex-col">
            <div className="flex flex-wor justify-between mx-auto w-1/3 items-center pt-10">
              <div className="text-white hover:text-gray-400">
                <Link href={""} > Repositories {"(15)"} </Link>
              </div>
              <div className="text-gray-500 hover:text-gray-400">
                <Link href={""} > Followers </Link>
              </div>
              <div className="text-gray-500 hover:text-gray-400">
                <Link href={""} > Following </Link>
              </div>
            </div>
            <div className="w-full flex flex-row">
              <div className="w-[20%] flex flex-col items-center h-[90vh] border border-white pb-10">
                  <Image
                    src="/my-avatar.png"
                    alt="Background Image"
                    width={200}
                    height={200}
                    className="rounded-full mb-4"
                  />
                  <div className="text-gray-500 mb-3">
                    Desscription /Bio
                  </div>
                  <div className="flex flex-row justify-between w-[60%] mb-3">
                    <span className="flex flex-col items-center">
                      <span> Followers </span>
                      <span> 15 </span>
                    </span>
                    <span className="flex flex-col items-center">
                      <span> Following </span>
                      <span> 15 </span>
                    </span>
                  </div>
                  <div>
                    Email: <a href=""> kkbaidu@gmail.com </a>
                  </div>
              </div>
              <div className="w-[75%] border border-white">{children}</div>
            </div>
          </body>
      </html>
    );
  }