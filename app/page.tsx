"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { useGenerationLoginStore } from "@/lib/zustand-context";

export default function Home() {
  const router = useRouter();
  const { setLogin } = useGenerationLoginStore();
  const [ search, setSearch ] = useState<string>();

  const navigateToRepositories = () => {
    if(!search) {
      console.log("Please enter a username")
    } else {
      setLogin(search);
      router.push('/repositories');
    }
  }

  console.log(process.env.GITHUB_TOKEN);

  return (
    <main className="w-full">
      <div 
      className="bg-cover h-screen overflow-hidden"
      style={{ backgroundImage: `url(/bg.svg)`, width: '100%', height: 'screen' }}
      >
        <motion.div
        animate={{
          scale: 1.4,
          y: 10,
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Image
          src="/space-ship.svg"
          alt="Background Image"
          width={250}
          height={250}
          className="absolute right-44 top-12 md:right-72 lg:right-72 md:top-24 lg:top-24"
        />
      </motion.div>
      <div className="flex flex-col justify-around items-center mx-auto w-full md:w-1/2 lg:w-1/2 h-full px-3 md:px-0 lg:px-0">
        <div className="flex flex-col justify-around items-center">
          <div className="flex flex-col leading-[47px]">
            <span className="text-white text-[60px] font-bold"> Build Your Dream Here</span>
            <span className="text-gray-400 text-[30px] text-left w-full"> Everything is possible through code</span>
          </div>
          <div className="flex flex-row justify-evenly my-10 w-[70%] md:w-[50%] lg:w-[50%]">
            <Image
              src="/github-mark-white.svg"
              alt="Background Image"
              width={100}
              height={100}
            />
            <Image
              src="/my-avatar.png"
              alt="Background Image"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <input 
          type="text" 
          placeholder="Username..." 
          name="username"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-[90%] lg:w-[90%] h-11 rounded px-2 mb-3 outline-none" />
          <button 
          onClick={navigateToRepositories} 
          className="text-white bg-[#703fc8] w-full md:w-[90%] lg:w-[90%] h-11"
          > Search </button>
        </div>
      </div>
      </div>
    </main>
  );
}
