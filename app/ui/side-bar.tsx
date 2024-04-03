import React, { use } from "react";
import Image from "next/image";
import { useGenerationStore } from "@/lib/context";


export default function SideBar() {
    const { user } = useGenerationStore();
    return(
      <div>
        {typeof user?.user != "undefined"?
        <div className="flex flex-col items-center h-[90vh] w-full pb-10 px-2">  
          <Image
            src={user?.user.avatarUrl}
            alt="Background Image"
            width={250}
            height={250}
            className="rounded-full mb-4"
          />
          <div className="text-[30px] text-center font-bold">
            {user?.user.name}
          </div>
          <div className="text-center text-gray-300 text-[20px] w-full mb-2">
            {user?.user.login}
          </div>
          <div className="text-gray-500 mb-3 text-center">
            {user?.user.bio}
          </div>
          <div className="flex flex-row justify-between w-[60%] mb-3">
            <span className="flex flex-col items-center">
              <span className="font-bold"> Followers </span>
              <span className="text-gray-300"> {user?.user.followers.totalCount} </span>
            </span>
            <span className="flex flex-col items-center">
              <span className="font-bold"> Following </span>
              <span className="text-gray-300"> {user?.user.following.totalCount} </span>
            </span>
          </div>
          <div>
            <a href="" className="text-[#0070E0]"> {user?.user.email} </a>
          </div>
          <div className="flex flex-row justify-between w-[70%]">
            {
              typeof user?.user.organizations != "undefined"? user?.user.organizations.nodes.map((image) => {
                return (
                  <div>
                    <Image
                      src={image.avatarUrl}
                      alt="Background Image"
                      width={50}
                      height={50}
                      className="your-element-class rounded-md mb-4"
                    />
                    <div className="tooltip hidden text-sm text-white bg-gray-700 rounded-md p-2 absolute top-full left-0 mt-2">This is the tooltip content</div>
                  </div>
                )
              }): <> Sidebar Loading </>
            }
          </div>
        </div>
      : 
      <div className="flex flex-col justify-center items-center border-r border-gray-800 h-[90vh] w-full"> 
      <div className="flex flex-row">Sidebar Loading<span className="animate-pulse">...</span></div>
      </div>
      }
    </div>
    )
}