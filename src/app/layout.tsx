import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duarte Melo - Software Engineer",
  description: "Duarte Melo - Software Engineer who focuses his efforts on creating beautiful and functional web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} bg-[var(--dark-300)]`}>
        {children}
      </body>
    </html>
  );
}
