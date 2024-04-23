'use client'

import React, { useState } from 'react';
import { IoGameController } from "react-icons/io5";
import { RiSendPlane2Line } from "react-icons/ri";
import { GiCrossedSwords } from "react-icons/gi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event: any) {
        event.preventDefault()
        console.log(email);
        console.log(password);
    }

    return (
        <div>

            {/* DEKTOP */}
            <div className='desktop-layout bg-white'>
                <div className="flex bg-black bg-opacity-90 h-screen  p-4">
                    <div className='bg-white shadow-2xl relative rounded-3xl flex mx-8 my-4'>
                        <a href="/"><GiCrossedSwords size={60} className='absolute text-black left-3 top-3 hover:rotate-180 transition duration-500' /></a>
                        <div className='flex select-none justify-center items-center  bg-opacity-20 w-1/2'>
                            {/* SIGN IN */}
                            <div className='relative flex-col w-[60%] border bg-white bg-opacity-20 px-12 py-6 rounded-lg shadow-2xl'>
                                <h1 className='text-black font-semibold text-3xl  text-center'>Hello again!</h1>
                                <h2 className='text-black font-medium text-sm mx-12 mt-2 mb-4 text-center'>Welcome back my friend, please complete the form</h2>
                                <span className="bg-[#8ebebd] hover:scale-105 transition duration-150  font-semibold tracking-wide text-xl flex justify-center items-center text-black rounded-lg w-fit px-2 py-1 shadow-lg select-none ">
                                    Sign In <IoGameController className="ml-2" size={22} />
                                </span>
                                <div className="bg-black mt-4 bg-opacity-85 shadow-lg w-full p-4 rounded-lg">
                                    <form onSubmit={(event) => handleSubmit(event)} className="flex-col select-none">
                                        <label className="text-white-700 text-sm font-semibold flex ml-0.5 mt-2">Email:</label>
                                        <input onChange={(e) => setEmail(e.target.value)} className="bg-gray-400 bg-opacity-5 flex rounded-lg cursor-pointer hover:bg-[#8ebebd] hover:bg-opacity-20 w-full  focus:bg-opacity-20 focus:bg-[#8ebebd]  focus:outline-none focus:border-t-[#8ebebd] focus:border-l-[#8ebebd]  focus:border-r-[#8ebebd] border-2 border-t-transparent border-r-transparent border-l-transparent  transition duration-300 ease-in-out  border-[#8ebebd] text-white px-1 py-2 text-sm" type="email" />
                                        <label className="text-white-700 text-sm font-semibold ml-0.5 mt-2 flex">Password:</label>
                                        <div className='relative'>
                                            <input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} className="bg-gray-400 bg-opacity-5  flex rounded-lg cursor-pointer hover:bg-[#8ebebd] hover:bg-opacity-20 w-full  focus:bg-opacity-20 focus:bg-[#8ebebd]  focus:outline-none focus:border-t-[#8ebebd] focus:border-l-[#8ebebd]  focus:border-r-[#8ebebd] border-2 border-t-transparent border-r-transparent border-l-transparent  transition duration-300 ease-in-out  border-[#8ebebd] text-white px-1 py-2 text-sm" />
                                            {showPassword ? (
                                                <BsEyeFill onClick={(e: any) => { setShowPassword(false); e.preventDefault(); }} className='absolute cursor-pointer hover:scale-125 transition duration-150 text-white top-2.5 right-2' size={20} />
                                            ) : (
                                                <BsEyeSlashFill onClick={(e: any) => { setShowPassword(true); e.preventDefault(); }} className='absolute cursor-pointer hover:scale-125 transition duration-150 text-white top-2.5 right-2' size={20} />
                                            )}
                                        </div>
                                        <div className="flex text-xs justify-center items-center mt-4">
                                            <div className="flex">
                                                <input type="checkbox" className=" accent-[#a5dddc] focus:outline-none border-2 border-gray-300 rounded-md " />
                                                <p className="ml-1 text-gray-300">Keep me signed in</p>
                                            </div>
                                            <a href='/register' className="ml-auto  cursor-pointer hover:font-light transition duration-500 font-extralight text-[#8ebebd]">Not a member?</a>
                                        </div>
                                        <button type="submit" className="flex focus:outline-none hover:scale-105  justify-center items-center h-10 bg-[#8ebebd] mt-4 transition duration-150 hover:bg-[#a5dddc] w-full rounded-sm py-1 font-medium text-xl">Send <RiSendPlane2Line className="flex ml-2" size={20} /></button>
                                    </form>
                                    <div className='w-full space-x-2  h-2 mb-4 mt-4  flex justify-center items-center'>
                                        <div className='bg-white bg-opacity-20 h-0.5 rounded-full w-full'></div>
                                        <div className='text-[#8ebebd] font-extralight whitespace-nowrap text-xs'>Or continue with</div>
                                        <div className='bg-white bg-opacity-20 h-0.5 w-full rounded-full'></div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <div className='flex justify-center items-center space-x-4 bg-white bg-opacity-15 w-fit p-3 rounded-lg'>
                                            <img src="google-icon.svg" className='w-8 h-8 cursor-pointer hover:-translate-y-1 hover:scale-125 duration-150 transition' alt="Descripción de la imagen" ></img>
                                            <img src="facebook-icon.svg" className='w-8 h-8 cursor-pointer hover:-translate-y-1 hover:scale-125 duration-150 transition' alt="Descripción de la imagen" ></img>
                                            <img src="apple-icon.svg" className='w-8 h-8 cursor-pointer hover:-translate-y-1 hover:scale-125 duration-150 transition' alt="Descripción de la imagen" ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-2 mr-2 mb-2  justify-center  items-center   bg-gradient-to-t rounded-3xl  shadow-2xl  from-[#cf7565] from-5% to-[#8ebebd] to-100% w-1/2'>
                            {/* RIGHT PANEL INFO */}
                            <div className='flex-col flex justify-center items-center w-[75%] rounded-xl  p-8 bg-white bg-opacity-10'>
                                <div className='text-white font-sans  text-lg mb-2 tracking-wide uppercase select-none'>A real game</div>
                                <div className='text-white font-sans font-bold text-4xl mb-4 tracking-wide uppercase select-none'>Age of Empires</div>
                                <div className="bg-white rounded-3xl w-24 h-2"></div>
                                <div className=" w-full mt-4 font-sans tracking-widest text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum eros eu ultricies ultricies. Curabitur accumsan augue ut imperdiet ultrices. Nunc nulla ligula, gravida id.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className='mobile-layout bg-white'>
                <div className="flex bg-gradient-to-b from-black from-5% via-[#8ebebd] via-60% to-[#af685c] to-90% h-full">
                    <div className='bg-white shadow-2xl relative rounded-3xl   m-4 w-[94%]'>
                        <a href="/"><GiCrossedSwords size={60} className='absolute text-black left-3 top-3 hover:rotate-180 transition duration-500' /></a>
                        <div className='flex select-none justify-center items-center bg-opacity-20 w-full'>
                            {/* SIGN IN */}
                            <div className='relative px-8 w-full  pt-6 pb-20 rounded-lg '>
                                <div className='flex-col'>
                                    <div className='mr-3 mt-14 flex justify-center items-center flex-col'>
                                        <h1 className='text-black font-semibold  text-3xl text-center'>Hello again!</h1>
                                        <h2 className='text-black font-medium text-xs mt-2  text-center '>Welcome back my friend, please complete the form </h2>
                                        <IoIosArrowRoundForward size={45} className='text-black rotate-90 bg-black bg-opacity-10  shadow-2xl rounded-full mt-2 mb-6' />
                                    </div>
                                    <div className='w-full'>
                                        <span className="bg-[#8ebebd] hover:scale-105 transition duration-150  font-semibold tracking-wide text-2xl flex justify-center items-center text-black rounded-lg w-fit px-2 py-1 shadow-lg select-none ">
                                            Sign In <IoGameController className="ml-2" size={22} />
                                        </span>
                                        <div className="bg-black mt-4 bg-opacity-85 shadow-lg w-full p-3 pb-6 rounded-lg">
                                            <form onSubmit={(event) => handleSubmit(event)} className="flex-col select-none">
                                                <label className="text-white-700 text-sm font-semibold flex ml-0.5 mt-2">Email:</label>
                                                <input onChange={(e) => setEmail(e.target.value)} className=" flex rounded-lg bg-gray-400 bg-opacity-5 cursor-pointer hover:bg-[#8ebebd] hover:bg-opacity-20 w-full  focus:bg-opacity-20 focus:bg-[#8ebebd]  focus:outline-none focus:border-t-[#8ebebd] focus:border-l-[#8ebebd]  focus:border-r-[#8ebebd] border-2 border-t-transparent border-r-transparent border-l-transparent  transition duration-300 ease-in-out  border-[#8ebebd] text-white px-1 py-2 text-sm" type="email" />
                                                <label className="text-white-700 text-sm font-semibold flex ml-0.5 mt-2">Password:</label>
                                                <div className='relative'>
                                                    <input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} className="bg-gray-400 bg-opacity-5  flex rounded-lg cursor-pointer hover:bg-[#8ebebd] hover:bg-opacity-20 w-full  focus:bg-opacity-20 focus:bg-[#8ebebd]  focus:outline-none focus:border-t-[#8ebebd] focus:border-l-[#8ebebd]  focus:border-r-[#8ebebd] border-2 border-t-transparent border-r-transparent border-l-transparent  transition duration-300 ease-in-out  border-[#8ebebd] text-white px-1 py-2 text-sm" />
                                                    {showPassword ? (
                                                        <BsEyeFill onClick={(e: any) => { setShowPassword(false); e.preventDefault(); }} className='absolute cursor-pointer hover:scale-125 transition duration-150 text-white top-2.5 right-2' size={20} />
                                                    ) : (
                                                        <BsEyeSlashFill onClick={(e: any) => { setShowPassword(true); e.preventDefault(); }} className='absolute cursor-pointer hover:scale-125 transition duration-150 text-white top-2.5 right-2' size={20} />
                                                    )}
                                                </div>
                                                <div className="flex text-xs justify-center items-center mt-8">
                                                    <div className="flex">
                                                        <input type="checkbox" className=" accent-[#a5dddc] focus:outline-none border-2 border-gray-300 rounded-md " />
                                                        <p className="ml-1 text-gray-300 whitespace-nowrap" >Keep me signed in</p>
                                                    </div>
                                                    <a href="/register" className="ml-auto text-end cursor-pointer hover:font-light transition duration-500 font-extralight text-xs text-[#8ebebd]">Not a member?</a>
                                                </div>
                                                <button type="submit" className="flex focus:outline-none hover:scale-105  justify-center items-center h-10 bg-[#8ebebd] mt-4 transition duration-150 hover:bg-[#a5dddc] w-full rounded-sm py-1 font-medium text-xl">Send <RiSendPlane2Line className="flex ml-2" size={20} /></button>
                                            </form>
                                            <div className='w-full space-x-2  h-2 mb-4 mt-4  flex justify-center items-center'>
                                                <div className='bg-white bg-opacity-20 h-0.5 rounded-full w-full'></div>
                                                <div className='text-[#8ebebd] font-extralight whitespace-nowrap text-xs'>Or continue with</div>
                                                <div className='bg-white bg-opacity-20 h-0.5 w-full rounded-full'></div>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <div className='flex justify-center items-center space-x-4 bg-white bg-opacity-15 w-fit p-3 rounded-lg'>
                                                    <img src="google-icon.svg" className='w-8 h-8 cursor-pointer hover:-translate-y-1 hover:scale-125 duration-150 transition' alt="Descripción de la imagen" ></img>
                                                    <img src="facebook-icon.svg" className='w-8 h-8 cursor-pointer hover:-translate-y-1 hover:scale-125 duration-150 transition' alt="Descripción de la imagen" ></img>
                                                    <img src="apple-icon.svg" className='w-8 h-8 cursor-pointer hover:-translate-y-1 hover:scale-125 duration-150 transition' alt="Descripción de la imagen" ></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-full mx-32 mb-2 h-1 bg-black bg-opacity-15 flex justify-center items-center'></div>
                        <div className='rounded-full mx-24 mb-2 h-1 bg-black bg-opacity-15 flex justify-center items-center'></div>
                        <div className='rounded-full mx-16 h-1 bg-black bg-opacity-15 flex justify-center items-center'></div>
                        <div className='flex w-full mr-2 mt-4 justify-center  items-center   bg-gradient-to-t rounded-2xl  shadow-2xl  from-[#af685c] from-5% to-[#8ebebd] to-100%'>
                            {/* BUTTOM PANEL INFO */}
                            <div className='flex-col flex justify-center items-center w-[85%] my-20 rounded-xl  p-8 bg-white bg-opacity-10'>
                                <div className='text-white font-sans  text-lg mb-2 tracking-wide uppercase select-none whitespace-nowrap'>A real game</div>
                                <div className='text-white font-sans font-bold text-3xl mb-4 tracking-wide uppercase select-none whitespace-nowrap'>Age of Empires</div>
                                <div className="bg-white rounded-3xl w-24 h-2"></div>
                                <div className=" w-full mt-4 font-sans tracking-widest text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum eros eu ultricies ultricies. Curabitur accumsan augue ut imperdiet ultrices. Nunc nulla ligula, gravida id.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}