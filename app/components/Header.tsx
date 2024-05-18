"use client"

import Image from "next/image"
import {LuSearch} from "react-icons/lu";
import {HiOutlineHome} from "react-icons/hi";
import Link from "next/link";
import {HiMiniComputerDesktop} from "react-icons/hi2";
import {FiPhone} from "react-icons/fi";
import {PiHandshakeFill, PiSignIn, PiUserCirclePlusLight, PiUserPlusLight} from "react-icons/pi";
import {RiCheckboxMultipleLine} from "react-icons/ri";

export default function Header() {
    return (
        <>
            <div className="flex bg-white px-6 items-center p-1 shadow-md top-0 sticky z-50 h-[55px]">
                {/*left*/}
                <div className="flex space-x-2 min-w-fit">
                    <Image
                        className=""
                        src="/images/sils-logo2.jpg"
                        alt=""
                        width="50"
                        height="50"
                    />
                    <p className="text-[14px] text-amber-600 mt-4 font-bold">SILS <span
                        className="text-blue-600">TECHNOLOGIES</span></p>
                </div>
                {/*center*/}
                <div className="flex flex-grow justify-center ml-20">
                    <div className="flex items-center">
                        <Link
                            className="flex items-center text-blue-600 h-10 px-6 md:px-10 md:hover:scale-105 md:hover:text-amber-600 cursor-pointer" href="/">
                            <HiOutlineHome className="mx-auto" size="22"/>
                            <p className="mt-1 ml-2 font-semibold text-[13.5px]">Accueil</p>
                        </Link>
                        <Link
                            className="flex items-center h-10 text-blue-600 px-6 md:px-10 md:hover:scale-105 md:hover:text-amber-600 cursor-pointer" href="/services">
                            <HiMiniComputerDesktop className="mx-auto" size="22"/>
                            <p className="mt-1 ml-2 font-semibold text-[13.5px]">Services</p>

                        </Link>
                        <Link
                            className="flex items-center h-10 text-blue-600 px-6 md:px-10 md:hover:scale-105 md:hover:text-amber-600 cursor-pointer" href="/references">
                            <RiCheckboxMultipleLine className="mx-auto" size="22"/>
                            <p className="mt-1 ml-2 font-semibold text-[13.5px]">References</p>

                        </Link>
                        <Link
                            className="flex items-center h-10 md:hover:text-amber-600 px-6 md:hover:scale-105 md:px-10  text-blue-600 cursor-pointer" href="/assistance">
                            <FiPhone className="mx-auto" size="20"/>
                            <p className="mt-1 ml-2 font-semibold text-[13.5px]">Assistance</p>

                        </Link>

                    </div>
                </div>
                {/*right*/}
                <div className=" flex items-center justify-end">
                    <div
                        className="flex my-3 items-center bg-gray-100 text-gray-700 h-8 rounded-lg text-sm space-x-2 px-2">
                        <LuSearch size="20"/>
                        <input
                            className="hidden lg:inline-flex bg-transparent rounded-md focus:outline-none px-2 text-[13.5px] "
                            type="text"
                            placeholder="Recherchez ici"/>
                    </div>
                    <div className="flex items-end flex-grow space-x-2 p-2">
                        <Link className="flex items-center p-1 hover:text-amber-600" href="/register">
                            <PiUserCirclePlusLight className="mx-auto" size="18" />
                            <p className="text-[13px] whitespace-nowrap ml-1  max-w-xs xl:inline-flex">Inscription</p>

                        </Link>

                        <Link className="flex items-center p-1 hover:text-amber-600" href="connection/signIn">
                            <PiSignIn className="mx-auto" size="15" />
                            <p className="text-[13px] whitespace-nowrap ml-1  max-w-xs xl:inline-flex">Connexion</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}