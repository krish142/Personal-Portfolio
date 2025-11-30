import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | krish",
  description: "Experience | krish",
};

export default function ExperienceLayout({children}:{children: React.ReactNode}) {
    return<div>{children}</div>
}