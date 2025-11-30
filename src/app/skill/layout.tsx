import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skill | Krish",
    description: "Skill | Krish"
}

export default function SkillLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}