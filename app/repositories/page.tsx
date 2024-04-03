"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Repository from "../ui/repository";
import { getStaticProps } from "@/lib/graphql/fetch-data";
import { useGenerationStore } from "../../lib/zustand-context";
import { useGenerationLoginStore } from "../../lib/zustand-context";
import SideBar from "@/app/ui/side-bar";

export default function Repositories() {
    const { user, setUser } = useGenerationStore();
    let { login } = useGenerationLoginStore();
    const [showMessage, setShowMessage] = useState(false);

    const repositories = user?.user.repositories.nodes
    useEffect(() => {
        const fetchData = async () => {
          const userData = await getStaticProps(login); 
          setUser(userData);
        };
    
        fetchData();
      }, []);

      useEffect(() => {
        const timeout = setTimeout(() => {
          setShowMessage(true);
        }, 5000);
    
        return () => clearTimeout(timeout);
      }, []);

    return (
        <main className="w-full md:h-[90vh] lg:h-[90vh] flex flex-row dark:text-white">
          <div className="hidden md:block lg:block w-[18%] fixed">
            <SideBar />
          </div>
          <div className="drawer fixed top-2 left-2 md:hidden lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                <Image
                  src="/menu-pic.svg"
                  alt="Background Image"
                  width={35}
                  height={30}
                  className=""
                />
              </label>
            </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <div className="menu p-4 w-72 min-h-full text-base-content dark:bg-black">
                <SideBar />
              </div>
            </div>
          </div>
          {typeof user?.user != "undefined"? 
          <div className="md:pl-[23%] lg:pl-[23%] w-full">
            {
              repositories?.map((repo) => {
                return (
                <div>
                  <Repository 
                    key={repo.name}
                    name={repo.name} 
                    description={repo.description}
                    language={repo.languages?.nodes[0]?.name}
                    color={repo.languages?.nodes[0]?.color} 
                    update={repo.updatedAt}
                    />
                </div>
                )
              })
            }
          </div>: 
          <div className="md:pl-[23%] lg:pl-[23%] w-full">
            <Image
                src="/github-mark-white.svg"
                alt="Background Image"
                width={80}
                height={80}
                className="rounded-full h-[80px] w-[80px] mx-auto my-[20%] animate-pulse"
            />
            {showMessage && <div className="italic text-gray-500">Please check and ensure that you have entered a valid username / check your connection</div>}
          </div>
          }
        </main>
    )
}