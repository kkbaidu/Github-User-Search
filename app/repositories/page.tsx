"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Repository from "../ui/repository";
import { getStaticProps } from "@/lib/graphql/fetch-data";
import { useGenerationStore } from "../../lib/context";
import SideBar from "@/app/ui/side-bar";

export default function Repositories() {
    const { user, setUser } = useGenerationStore();

    const repositories = user?.user.repositories.nodes
    useEffect(() => {
        const fetchData = async () => {
          const userData = await getStaticProps(); 
          setUser(userData);
        };
    
        fetchData();
      }, []);

    return (
        <main className="w-full md:h-[90vh] lg:h-[90vh] flex flex-row dark:text-white">
          <div className="hidden md:block lg:block w-[18%] fixed">
            <SideBar />
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
          </div>
          }
        </main>
    )
}