"use client"

import Image from "next/image"
import {
    AiFillFileText,
    AiFillFund,
    AiFillInfoCircle,
    AiFillSetting, AiFillSignal,
    AiFillTool
} from "react-icons/ai";
import {TiGroup} from "react-icons/ti";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {GiPuzzle} from "react-icons/gi";
import {IoExtensionPuzzle} from "react-icons/io5";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    const checkScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);
    return (
        <>
            <div className=" flex flex-col bg-wite " style={{/*
                backgroundImage: "url(/images/backhome.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
          */
            }}>
                <div className="flex w-full bg-gradient-to-b from-blue-600 to-blue-400 h-[600px]">
                    <div
                        className=" flex flex-col justify-center items-center basis-1/2 ">
                        <div className="flex flex-col items-center space-y-1 ml-12 mt-4">
                            <div className="flex flex-col items-center">
                                <Image
                                    className=""
                                    src="/images/logowhite.png"
                                    alt=""
                                    width="180"
                                    height="180"
                                />
                                <h2 className="text-white text-2xl font-black mt-2">SILS TECHNOLOGIES CI</h2>
                            </div>
                            <div className="flex flex-col items-center w-[600px] space-y-6">
                                <h1 className="font-bold text-white text-2xl text-center">Société de Services et
                                    d'Ingénierie Informatique</h1>
                                <div className="flex flex-grow space-x-4">
                                    <Link
                                        className="bg-blue-500 px-4 py-1 font-semibold border-2 border-white text-white rounded-2xl hover:bg-blue-600  hover:border-2 hover:border-white hover:duration-300"
                                        type="buttton" href=""> Commencer </Link>
                                    <Link
                                        className="bg-blue-500 px-4 py-1 font-semibold border-2 border-white text-white rounded-2xl hover:bg-blue-600  hover:border-2 hover:border-white hover:duration-300"
                                        type="buttton" href=""> Nos Services </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className="basis-1/2 flex justify-center mt-6 rounded-r-lg items-start flex-col">
                        <Image
                            className="w-[650px] h-[380px]"
                            src="/images/background.webp"
                            alt=""
                            width="500"
                            height="500"
                        />
                    </div>
                </div>
                <div className="flex w-full">
                    <div
                        className="bg-white items-center flex-col w-full flex mt-10 h-[550px]">
                        <h2 className="text-blue-600 font-bold  text-2xl uppercase mt-4">Qui sommes nous
                            ?</h2>
                        <div className="flex flex-row space-x-6 justify-center mt-4 px-24 text-justify">
                            <p className="text-lg basis-5/6 leading-[50px] mt-8">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                                Alias amet consequuntur
                                cupiditate deleniti distinctio dolorum, enim iste necessitatibus nemo numquam officiis,
                                pariatur quam quasi quisquam sunt suscipit tenetur vel veniam? Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Beatae commodi dignissimos harum illum impedit
                                itaque laudantium magnam molestias nisi, officiis quo quos recusandae repellat
                                repudiandae rerum unde vitae. Esse, perferendis! Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Asperiores deserunt labore laborum quibusdam? Aliquam cum dicta
                                dolorum ducimus ea facilis iusto mollitia qui repellendus soluta totam, vel veritatis
                                voluptas? Aut? Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor.</p>
                            <Image
                                className="basis-1/6 mt-12 w-[400px] h-[350px]"
                                alt=""
                                src="/images/back.webp"
                                width="200"
                                height="200"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex w-full">
                    <div
                        className="bg-blue-50 items-center flex-col bg-opacity-75 w-full flex mt-10 h-[550px]">
                        <h2 className="text-blue-600 font-bold  text-2xl uppercase mt-12">Nos
                            Services</h2>
                        <p className=" text-center font-thin mt-2 text-lg">Nos services interviennent presque dans tous
                            les domaines de l'informatique</p>
                        <div className="flex flex-grow space-x-5 items-center justify-center ">
                            <div className=" space-y-4 flex items-center flex-col">
                                <div
                                    className="p-10 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillSetting className="text-white mx-auto w-[100px] h-[100px]"/>
                                </div>
                                <h4 className="text-sm font-bold whitespace-nowrap text-center">Maintenance <br/>d'infrastructures
                                    d'information</h4>
                            </div>
                            <div className=" space-y-4 flex items-center flex-col">
                                <div
                                    className="p-10 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <IoExtensionPuzzle className="text-white mx-auto w-[100px] h-[100px]"/>
                                </div>
                                <h4 className="text-sm font-bold whitespace-nowrap  text-center">Conception <br/>d'infrastructures
                                    d'information</h4>
                            </div>
                            <div className=" space-y-4 flex items-center flex-col">
                                <div
                                    className="p-10 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillInfoCircle className="text-white mx-auto w-[100px] h-[100px]"/>
                                </div>
                                <h4 className="text-sm font-bold whitespace-nowrap  text-center">Conseil <br/> sytèmes
                                    d'information</h4>
                            </div>
                            <div className=" space-y-4 flex items-center flex-col">
                                <div
                                    className="p-10 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillFileText className="text-white mx-auto w-[100px] h-[100px]"/>
                                </div>
                                <h4 className="text-sm font-bold whitespace-nowrap  text-center">Audit <br/>en
                                    infrastructures d'information</h4>
                            </div>

                            <div className=" space-y-4 flex items-center flex-col">
                                <div
                                    className="p-10 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillFund className="text-white mx-auto w-[100px] h-[100px]"/>
                                </div>
                                <h4 className="text-sm font-bold whitespace-nowrap  text-center">Formation <br/>technologies
                                    et numériques</h4>
                            </div>
                            <div className=" space-y-4 flex items-center flex-col">
                                <div
                                    className="p-10 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <TiGroup className="text-white mx-auto w-[100px] h-[100px]"/>
                                </div>
                                <h4 className="text-sm font-bold whitespace-nowrap  text-center">Conseil <br/>Management
                                    et organisation</h4>
                            </div>
                            <div className=" space-y-4 flex items-center flex-col">
                                <div
                                    className="p-10 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillSignal className="text-white mx-auto w-[100px] h-[100px]"/>
                                </div>
                                <h4 className="text-sm   font-bold whitespace-nowrap  text-center">Conseil <br/>en
                                    stratégie et étude de projet</h4>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="flex w-full">
                    <div
                        className="bg-white items-center flex-col bg-opacity-75 shadow-lg w-full flex mt-10 h-[550px]">
                        <h2 className="text-blue-600 font-bold  text-2xl uppercase mt-12">Nos
                            References</h2>
                        <p className=" text-center px-12 font-thin text-sm">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Alias assumenda, autem dicta
                            distinctio doloribus illum, inventore ipsum, iusto natus necessitatibus obcaecati odit qui
                            quia quibusdam quidem quo repellat tempore voluptas</p>
                    </div>
                </div>
                <div className="flex w-full">
                    <div
                        className="bg-white items-center flex-col bg-opacity-75 shadow-lg w-full flex mt-10 h-[550px]">
                        <h2 className="text-blue-600 font-bold  text-2xl uppercase mt-12">Nos
                            Partenaires</h2>

                    </div>
                </div>
            </div>
        </>
    );
}
