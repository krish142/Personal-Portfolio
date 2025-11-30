"use client";
const GetInTouchForm: React.FC = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Name" className="w-full focus-visible:outline-none py-2 px-3 rounded-sm border border-[#4DB6AC]" />
                <input type="email" placeholder="Email" className="w-full focus-visible:outline-none py-2 px-3 rounded-sm border border-[#4DB6AC] my-5" />
                <textarea rows={4} placeholder="Message" className="w-full focus-visible:outline-none py-2 px-3 rounded-sm border border-[#4DB6AC]" />
                <button type="submit" className="bg-[#4DB6AC] px-3 py-1 rounded-sm text-white font-semibold mt-3 border border-[#4DB6AC] hover:bg-background hover:text-[#4DB6AC] teansation-all duration-400 cursor-pointer">Send Message</button>
            </form>
        </div>
    )
}

export default GetInTouchForm;