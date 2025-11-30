"use client";
import { EducationData } from "@/data/Education";
import { FaGraduationCap } from "react-icons/fa6";

interface EducationProps {
    id:number,
    year:string,
    board:string
    degree:string
}

const Education: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-5xl mx-auto">
                <div className="py-10 px-5">
                    <h2 className="text-3xl font-extrabold py-5">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            EducationData.map((item:EducationProps) => (
                                <div key={item.id} className="max-w-lg p-5 rounded-md shadow-md bg-background cursor-pointer hover:shadow-lg transaction-all duration-400">
                                    <div className="flex flex-col gap-1">
                                        <FaGraduationCap className="text-3xl text-[#4DB6AC]" />
                                        <p>{item.year}</p>
                                        <h3 className="font-bold">{item.degree}</h3>
                                        <p>{item.board}</p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;