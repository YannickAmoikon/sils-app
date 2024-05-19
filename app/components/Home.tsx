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
import React from "react";
import Link from "next/link";

export default function Home() {
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
                <div className="flex w-full bg-blue-600 h-[500px]">
                    <div
                        className=" flex flex-col justify-center items-center basis-1/2 ">
                        <div className="flex flex-col items-center space-y-2 mt-4">
                            <div className="flex flex-col items-center">
                                <Image
                                    className=""
                                    src="/images/logowhite.png"
                                    alt=""
                                    width="200"
                                    height="200"
                                />
                                <h2 className="text-white text-xl font-black mt-2">SILS TECHNOLOGIES</h2>
                            </div>
                            <div className="flex flex-col items-center w-[750px] space-y-10">
                                <h1 className="font-bold text-white mt-2 text-[25px] text-center">Société de Services et
                                    d'Ingénierie Informatique</h1>
                                <div className="flex flex-grow space-x-4">
                                    <Link
                                        className="bg-blue-500 px-4 py-2 font-semibold border-2 border-blue-500 text-white rounded-2xl hover:bg-blue-600  hover:border-2 hover:border-white hover:duration-300"
                                        type="buttton" href=""> Commencer </Link>
                                    <Link
                                        className="hover:bg-blue-500 px-4 py-2 font-semibold border-2 border-white text-white rounded-2xl bg-blue-600  hover:border-blue-600 hover:duration-300"
                                        type="buttton" href=""> Nos services </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className="basis-1/2 flex justify-center rounded-r-lg items-start flex-col">
                        <Image
                            className="w-[650px] h-[350px]"
                            src="/images/background.webp"
                            alt=""
                            width="500"
                            height="500"
                        />
                    </div>
                </div>
                <div className="flex w-full">
                    <div
                        className="bg-white items-center flex-col w-full flex mt-6 h-[400px] rounded-lg">
                        <h2 className="text-blue-600 font-semibold  text-xl uppercase mt-4">Qui sommes nous
                            ?</h2>
                        <p className=" text-center px-12 font-thin text-md">Philosophie de notre entreprise</p>
                        <div className="flex flex-row space-x-4 justify-center mt-4 px-24 text-justify">
                            <p className="text-md basis-4/6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Alias amet consequuntur
                                cupiditate deleniti distinctio dolorum, enim iste necessitatibus nemo numquam officiis,
                                pariatur quam quasi quisquam sunt suscipit tenetur vel veniam? Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Beatae commodi dignissimos harum illum impedit
                                itaque laudantium magnam molestias nisi, officiis quo quos recusandae repellat
                                repudiandae rerum unde vitae. Esse, perferendis!</p>
                            <Image
                                className="basis-2/6"
                                alt=""
                                src=""
                            />
                        </div>
                    </div>
                </div>

                <div className="flex w-full px-8">
                    <div
                        className="bg-blue-50 items-center flex-col bg-opacity-75 shadow-lg w-full flex mt-6 h-[250px] rounded-lg">
                        <h2 className="text-blue-600 font-serif font-semibold text-md uppercase mt-4">Nos
                            Services</h2>
                        <p className=" text-center px-12 font-thin text-sm">Nos services interviennent presque dans tous
                            les domaines de l'informatique</p>
                        <div className="flex flex-grow space-x-6 my-2">
                            <div className=" space-y-1 flex items-center justify-center flex-col">
                                <div
                                    className="p-4 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillSetting className="text-white mx-auto" size="40"/>
                                </div>
                                <h4 className="text-[14px] font-thin whitespace-nowrap text-semibold rounded-md text-center">Maintenance <br/>d'infrastructures
                                    d'information</h4>
                            </div>
                            <div className=" space-y-1 flex items-center justify-center flex-col">
                                <div
                                    className="p-4 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillTool className="text-white mx-auto" size="40"/>
                                </div>
                                <h4 className="text-[14px] font-thin whitespace-nowrap text-semibold rounded-md text-center">Conception <br/>d'infrastructures
                                    d'information</h4>
                            </div>
                            <div className=" space-y-1 flex items-center justify-center flex-col">
                                <div
                                    className="p-4 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillInfoCircle className="text-white mx-auto" size="40"/>
                                </div>
                                <h4 className="text-[14px] font-thin whitespace-nowrap text-semibold rounded-md text-center">Conseil <br/> sytèmes
                                    d'information</h4>
                            </div>
                            <div className=" space-y-1 flex items-center justify-center flex-col">
                                <div
                                    className="p-4 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillFileText className="text-white mx-auto" size="40"/>
                                </div>
                                <h4 className="text-[14px] font-thin whitespace-nowrap text-semibold rounded-md text-center">Audit <br/>en
                                    infrastructures d'information</h4>
                            </div>

                            <div className=" space-y-1 flex items-center justify-center flex-col">
                                <div
                                    className="p-4 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillFund className="text-white mx-auto" size="40"/>
                                </div>
                                <h4 className="text-[14px] font-thin whitespace-nowrap text-semibold rounded-md text-center">Formation <br/>technologies
                                    et numériques</h4>
                            </div>
                            <div className=" space-y-1 flex items-center justify-center flex-col">
                                <div
                                    className="p-4 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <TiGroup className="text-white mx-auto" size="40"/>
                                </div>
                                <h4 className="text-[14px] font-thin whitespace-nowrap text-semibold rounded-md text-center">Conseil <br/>Management
                                    et organisation</h4>
                            </div>
                            <div className=" space-y-1 flex items-center justify-center flex-col">
                                <div
                                    className="p-4 md:hover:scale-105 md:hover:duration-300 md:hover:bg-blue-500 rounded-3xl cursor-pointer bg-blue-400">
                                    <AiFillSignal className="text-white mx-auto" size="40"/>
                                </div>
                                <h4 className="text-[14px] font-thin whitespace-nowrap text-semibold rounded-md text-center">Conseil <br/>en
                                    stratégie et étude de projet</h4>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="flex w-full px-8">
                    <div
                        className="bg-white items-center flex-col bg-opacity-75 shadow-lg w-full flex mt-6 h-[250px] rounded-lg">
                        <h2 className="text-blue-600 font-serif font-semibold text-md uppercase mt-4">Nos
                            References</h2>
                        <p className=" text-center px-12 font-thin text-sm">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Alias assumenda, autem dicta
                            distinctio doloribus illum, inventore ipsum, iusto natus necessitatibus obcaecati odit qui
                            quia quibusdam quidem quo repellat tempore voluptas</p>
                    </div>
                </div>
                <div className="flex w-full px-8">
                    <div
                        className="bg-white items-center flex-col bg-opacity-75 mb-6 shadow-lg w-full flex mt-6 h-[250px] rounded-lg">
                        <h2 className="text-blue-600 font-serif font-semibold text-md uppercase mt-4">Nos
                            Partenaires</h2>

                    </div>
                </div>
            </div>
        </>
    );
}
