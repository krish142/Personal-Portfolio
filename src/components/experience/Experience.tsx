"use client";
import { ExperienceData } from "@/data/Experience";
import Image from "next/image";
import Link from "next/link";
import { LuBriefcaseBusiness } from "react-icons/lu";

interface Responsibility {
    id: number;
    point: string;
}

interface ExperienceProps {
    id: number,
    experience: string,
    position: string
    responsibility: Responsibility[];
    link: string
}

const Experience: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-5xl mx-auto">
                <div className="py-10 px-5">
                    <h2 className="text-3xl font-extrabold py-5">Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-25 max-w-5xl p-5 bg-background rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 place-items-center">
                        <div>
                            {
                                ExperienceData.map((item: ExperienceProps) => (
                                    <div key={item.id}>
                                        <div className="flex flex-col justify-start gap-1">
                                            <LuBriefcaseBusiness className="text-3xl text-[#4DB6AC]" />
                                            <p>{item.experience}</p>
                                            <h3 className="font-bold">{item.position}</h3>
                                            {item.responsibility && (
                                                <ul className="list-none mt-2 space-y-4">
                                                    {item.responsibility.map((r) => (
                                                        <li key={r.id} className="text-sm">
                                                            {r.point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            <span className="py-4">
                                                <Link href={item.link} className="bg-[#4DB6AC] px-3 py-1 rounded-sm text-white font-semibold mt-3 border border-[#4DB6AC] hover:bg-background hover:text-[#4DB6AC] teansation-all duration-400 cursor-pointer">View Project</Link>
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <Image src="/images/Experience.png" alt="experience-image" width={420} height={420} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;