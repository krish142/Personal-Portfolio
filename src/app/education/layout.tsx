import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | krish",
  description: "Education | krish",
};

export default function Educationlayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
