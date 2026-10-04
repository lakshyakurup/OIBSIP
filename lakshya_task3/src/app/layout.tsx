import type { ReactNode } from "react";

export const metadata = {
  title: "Level 1 - Task 3: Temperature Converter",
  description: "An interactive temperature converter built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}