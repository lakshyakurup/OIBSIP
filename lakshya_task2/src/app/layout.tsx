import type { ReactNode } from "react";

export const metadata = {
  title: "Level 1 - Task 2: Lakshya Kurup",
  description: "A professional personal portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}