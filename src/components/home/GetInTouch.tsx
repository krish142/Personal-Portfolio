"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import GetInTouchForm from "./GetInTouchForm";

const GetInTouch: React.FC = () => {
    return (
        <div className="p-10 bg-background">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-extrabold px-2">Get in Touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-3">
                    <div className="max-w-md">
                        <p className="text-gray-600 px-2">I'm currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to send me a message.</p>
                        <div className="flex gap-1 py-3">
                            <span className="p-2 rounded-full hover:bg-gray-200"><FaLinkedin className="text-2xl text-gray-700" /></span>
                            <span className="p-2 rounded-full hover:bg-gray-200" ><IoLogoGithub className="text-2xl text-gray-700" /></span>
                        </div>
                    </div>
                    <div>
                        <GetInTouchForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;