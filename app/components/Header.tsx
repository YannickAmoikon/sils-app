"use client"

import React from "react"
import Image from "next/image"
import {LuSearch} from "react-icons/lu";
import Link from "next/link";
import {HiMiniComputerDesktop} from "react-icons/hi2";
import {FiPhone} from "react-icons/fi";
import {RiCheckboxMultipleLine} from "react-icons/ri";
import {TbMessagePlus} from "react-icons/tb";
import {AiOutlineHome} from "react-icons/ai";

export default function Header() {
    return (
        <>
            <div className="flex bg-white px-6 items-center p-2 shadow-md top-0 sticky z-50 h-[69px]">
                {/*left*/}
                <div className="flex space-x-2 min-w-fit">
                    <Image
                        className=" hover:animate-spin cursor-pointer ml-10"
                        src="/images/sils-logo2.jpg"
                        alt=""
                        width="50"
                        height="50"
                    />
                    <p className="text-[15px]  h-2   text-white mt-3 font-bold">SILS <span
                        className="text-white">TECHNOLOGIES</span></p>
                </div>
                {/*center*/}
                <div className="flex flex-grow justify-center ml-20">
                    <div className="flex items-center">
                        <Link
                            className="flex items-center text-blue-600 h-15 hover:duration-300 px-6 md:px-10 md:hover:scale-105 md:hover:text-amber-600 cursor-pointer"
                            href="/">
                            <AiOutlineHome className="mx-auto" size="26"/>
                            <p className="mt-1 ml-2   font-semibold text-[14px]">Accueil</p>
                        </Link>
                        <Link
                            className="flex items-center h-15 text-blue-600 hover:duration-300 px-6 md:px-10 md:hover:scale-105 md:hover:text-amber-600 cursor-pointer"
                            href="/services">
                            <HiMiniComputerDesktop className="mx-auto" size="24"/>
                            <p className="mt-1 ml-2   font-semibold text-[14px]">Services</p>

                        </Link>
                        <Link
                            className="flex items-center h-15 text-blue-600 hover:duration-300 px-6 md:px-10 md:hover:scale-105 md:hover:text-amber-600 cursor-pointer"
                            href="/references">
                            <RiCheckboxMultipleLine className="mx-auto" size="24"/>
                            <p className="mt-1 ml-2   font-semibold text-[14px]">References</p>

                        </Link>
                        <Link
                            className="flex items-center h-15 hover:duration-300 md:hover:text-amber-600 px-6 md:hover:scale-105 md:px-10  text-blue-600 cursor-pointer"
                            href="/assistance">
                            <FiPhone className="mx-auto" size="24"/>
                            <p className="mt-1 ml-2  font-semibold text-[14px]">Assistance</p>

                        </Link>

                    </div>
                </div>
                {/*right*/}
                <div className=" flex items-center justify-end">
                    <div
                        className="flex my-3 items-center bg-gray-100 text-gray-700 h-8 rounded-lg text-sm space-x-2 px-2">
                        <LuSearch size="20"/>
                        <input
                            className="hidden lg:inline-flex bg-transparent italic rounded-md focus:outline-none px-2 text-[13.5px] "
                            type="text"
                            placeholder="Recherchez ici"/>
                    </div>
                    <div className="flex items-end flex-grow space-x-2 p-2">
                        <Link type="button" className="flex items-center p-1 bg-amber-500 hover:duration-700 md:hover:bg-blue-500 h-7 rounded-md text-white "
                              href="/request">
                            <TbMessagePlus className="mx-auto" size="18"/>
                            <p className="text-[12.5px] whitespace-nowrap px-1 ml-1.5 font-semibold  max-w-xs xl:inline-flex">Faire une
                                demande</p>

                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}