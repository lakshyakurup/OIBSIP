import type { ReactNode } from "react";

export const metadata = {
  title: "Level 1 - Task 1: SaaS Landing Page",
  description: "A modern SaaS landing page built with Next.js App Router and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}