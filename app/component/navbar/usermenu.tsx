
"use client";
import {AiOutlineMenu} from "react-icons/ai"
import Avatar from "../avatar";
import { useState, useCallback } from "react";

const UserMenu=()=>{
    const [isopen, setopen]=useState(false);
    
    return(
        <div className="relative">
            <div className="flex flex-row items-center gap 3">
                <div 
                onClick={()=>{

                }}
                className="
                hidden
                md:block
                texr-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                curson-pointer
                ">
                    Airbnb Your Home

                </div>
                <div
                onClick={()=>{}}
                className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
                "
                >
                    <AiOutlineMenu/>
                    <div className="hiden md:block">
                        <Avatar/>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default UserMenu