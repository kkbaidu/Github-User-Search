"use client"
import React from "react";
import Image from "next/image";

interface Props {
    avatar: string;
    name: string;
    login: string;
    bio?: string;
    company?: string;
    location?: string;
}

export default function Follow({avatar, name, login, bio, company, location}: Props) {
    return (
        <div className="flex flex-row items-center py-7 w-full border-b border-b-gray-700 cursor-pointer">
            <Image
                src={avatar}
                alt="Background Image"
                width={80}
                height={80}
                className="rounded-full mr-5"
            />
            <div className="flex flex-col justify-start w-full h-full">
                <span className="font-bold text-[25px]"> 
                <span>{name}</span>
                <span>{login}</span> 
                </span>
                <span className="text-gray-500">{bio}</span>
                <span className="text-gray-500">
                    <span className="mr-4">{company}</span>
                    <span>{location}</span>
                </span>
            </div>
        </div>
    )
}