"use client";
import Link from 'next/link';
import React from 'react'

interface Navlinks {
    id:number,
    label:string,
    link:string,
}

const navlinks:Navlinks[] = [
    {
        id:1,
        label:"Experience",
        link:"/experience"
    },
    {
        id:2,
        label:"Education",
        link:"/education"
    },
    {
        id:3,
        label:"Skill",
        link:"/skill"
    },
    {
        id:4,
        label:"Contact",
        link:"/contact"
    }
]

const NavBar: React.FC = () => {
    return (
        <div className='bg-background p-5 border-b border-b-gray-300 sticky top-0 z-1000'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-between'>
                    <div>Krish</div>
                    <div className='hidden md:flex gap-6 items-center '>
                        {
                            navlinks.map((item:Navlinks) =>(
                                <li key={item.id} className='list-none'>
                                    <Link href={item.link}>{item.label}</Link>
                                </li>
                            ))
                        }
                        <a href="/KrishKunwar.pdf" download className='bg-[#4DB6AC] px-3 py-1 rounded-sm text-white font-semibold'>Dowload Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavBar;