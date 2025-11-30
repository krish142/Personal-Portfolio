"use client";
import { Databases, FrameWorkAndLibrary, ProgrammingLanguage, Testing, VersionControl } from "@/data/Skills";
import React from "react";

interface skill {
    id: number,
    name: string
}

const Skill: React.FC = () => {
    return (
        <div className="bg-background">
            <div className="max-w-5xl mx-auto">
                <div className="py-10 px-5">
                    <h2 className="text-3xl font-extrabold py-5">Skill</h2>
                    <h3 className="font-semibold py-2">Programming Language</h3>
                    <div className="flex flex-wrap gap-1">

                        {ProgrammingLanguage.map((item: skill) => (
                            <div key={item.id} className="p-1 mb-3">

                                <span className="rounded-full bg-gray-200 px-3 py-1.5 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-all duration-300 ">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-semibold py-2">Frameworks & Library</h3>
                    <div className="flex flex-wrap gap-1 ">
                        {FrameWorkAndLibrary.map((item: skill) => (
                            <div key={item.id} className="p-1 mb-3">

                                <span className="rounded-full bg-gray-200 px-3 py-1.5 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-all duration-300 ">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-semibold py-2">Databases</h3>
                    <div className="flex flex-wrap gap-1 ">

                        {Databases.map((item: skill) => (
                            <div key={item.id} className="p-1 mb-3">

                                <span className="rounded-full bg-gray-200 px-3 py-1.5 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-all duration-300 ">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-semibold py-2">VersionControl</h3>
                    <div className="flex flex-wrap gap-1 ">

                        {VersionControl.map((item: skill) => (
                            <div key={item.id} className="p-1 mb-3">

                                <span className="rounded-full bg-gray-200 px-3 py-1.5 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-all duration-300 ">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-semibold py-2">Testing</h3>
                    <div className="flex flex-wrap gap-1 ">

                        {Testing.map((item: skill) => (
                            <div key={item.id} className="p-1 mb-3">

                                <span className="rounded-full bg-gray-200 px-3 py-1.5 font-semibold cursor-pointer hover:bg-gray-600 hover:text-white transition-all duration-300 ">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Skill;