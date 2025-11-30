import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch | krish",
  description: "Get In Touch | krish",
};

export default function GetInTouchLayout({children}:{children: React.ReactNode}) {
    return<div>{children}</div>
}