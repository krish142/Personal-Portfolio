"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Herosection: React.FC = () => {
    return (
        <div className='p-10'>
            <div className='max-w-5xl mx-auto'>
                <div className='flex flex-col md:flex-row gap-15 items-center justify-center items-center'>
                    <div className='max-w-xl flex flex-col  gap-5 justify-center lg:justify-start items-center lg:items-start p-5'>
                        <h1 className='text-3xl font-extrabold text-center lg:text-start md:text-4xl lg:text-5xl'>Krish Kunwar, Full Stack Developer</h1>
                        <p className='text-gray-600 text-md text-center lg:text-start'>A passionate and experienced software engineer dedicated to building innovative and user-friendly applications. Specializing in front-end development and UI/UX design.</p>
                        <button><Link href="/" className='bg-[#4DB6AC] text-white rounded-md px-4 py-2 font-semibold border border-[#4DB6AC] hover:bg-background hover:text-[#4DB6AC] teansation-all duration-400'>Get in Touch</Link></button>
                    </div>
                    <div >
                        <Image src="/images/logo.png" alt='logo' width={250} height={250} className='rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Herosection;