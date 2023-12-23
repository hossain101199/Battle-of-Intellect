import MainLayout from "@/layouts/MainLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "বুদ্ধিবৃত্তির যুদ্ধ",
  description:
    "বুদ্ধিবৃত্তির যুদ্ধ একটি অনলাইন কুইজ অ্যাপ যা আপনাকে আপনার জ্ঞান এবং বুদ্ধিমত্তাকে পরীক্ষা করার সুযোগ দেয়। এই অ্যাপে বিভিন্ন বিষয়ের উপর বিভিন্ন ধরনের প্রশ্ন রয়েছে।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
