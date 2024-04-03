import { color } from "framer-motion";
import React from "react";

interface Props {
    name: string | undefined | null;
    description?: string;
    language?: any;
    color?: string;
    update: string | undefined;
    key: any;
}

const Repository = ({name, description, language, color, update, key}:Props) => {
    return (
        <div className="py-7 border-b border-b-gray-700 cursor-pointer w-full" key={key}>
            <div>
                <span className="text-[#4993f8] text-[25px]"> {name} </span>
                <span className="bg-gray-700 text-gray-200 rounded-md px-1"> Public </span>
            </div>
            <div> {description} </div>
            <div className="flex flex-row text-gray-300">
                <span className="mr-5"><span className={`bg-[${color}] rounded-full w-[30px] h-[30px] text-white`}></span> {language} </span>
                <span> Updated at: {update} </span>
            </div>
        </div>
    )
}

export default Repository;