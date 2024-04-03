"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import { useGenerationStore } from "@/lib/context";
import SideBar from "@/app/ui/side-bar";
import Follow from "@/app/ui/follow";
import { getStaticProps } from "@/lib/graphql/fetch-data";

export default function Followers() {
    const { user, setUser } = useGenerationStore();
    const followers = user?.user.followers.edges

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
                typeof followers != "undefined"? 
                <div className="md:pl-[23%] lg:pl-[23%] w-full">
                {followers.map((follower) => {
                    return (
                        <div className="w-full">
                            <Follow avatar={follower.node.avatarUrl} name={follower.node.name} login={follower.node.login} bio={follower?.node.bio} company={follower?.node.company} location={follower?.node.location} />
                        </div>
                    )
                })}
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