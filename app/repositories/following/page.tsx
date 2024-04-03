"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import SideBar from "@/app/ui/side-bar";
import { getStaticProps } from "@/lib/graphql/fetch-data";
import { useGenerationStore } from "@/lib/context";
import Follow from "@/app/ui/follow";

export default function Following() {
  const { user, setUser } = useGenerationStore();
  const followings = user?.user.following.edges

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
            {
              typeof followings != "undefined"? 
              <div className="md:pl-[23%] lg:pl-[23%] w-full">
              {followings.map((following) => {
                  return (
                      <div className="w-full">
                          <Follow avatar={following.node.avatarUrl} name={following.node.name} login={following.node.login} bio={following?.node.bio} company={following?.node.company} location={following?.node.location} />
                      </div>
                  )
              })}
              </div>:
              <div className="md:pl-[23%] lg:pl-[23%] w-full ">
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