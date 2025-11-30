"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import React from 'react'
const Footer: React.FC = () => {
    return (
        <div className='p-5 bg-background'>
            <div className="max-w-5xl mx-auto border-t-2 border-t-gray-300">
                <div className="flex justify-between items-center">
                    <p className="text-gray-800 text-sm md:text-md">© 2025 Krish Kunwar. All rights reserved.</p>
                    <div className="flex gap-1 py-3">
                        <span className="p-2 rounded-full hover:bg-gray-300 teansation-all duration-400 cursor-pointer"><FaLinkedin className="text-2xl text-gray-700" /></span>
                        <span className="p-2 rounded-full hover:bg-gray-300 teansation-all duration-400 cursor-pointer" ><IoLogoGithub className="text-2xl text-gray-700" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;