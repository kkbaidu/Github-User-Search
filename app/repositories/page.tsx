"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getStaticProps } from "@/lib/graphql/fetch-data";
import { User } from "@/lib/definitions";

export default function Repositories() {
    const [userData, setUserData] = useState<User | undefined>(undefined);
    useEffect(() => {
        const fetchData = async () => {
          const user = await getStaticProps(); 
          setUserData(user);
        };
    
        fetchData();
      }, []);
    
    console.log(userData);

    return (
        <main className="dark:bg-black dark:text-white">
          <h1> Hi </h1>
        </main>
    )
}