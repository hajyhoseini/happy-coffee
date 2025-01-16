'use client';  // این کامپوننت کلاینت است
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "fontsource-vazir"
import "@fortawesome/fontawesome-free/css/all.css"
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Head from 'next/head';
import HeaderAuth from '@/components/headerAuth';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const pathname = usePathname();
  
  // بررسی مسیر فعلی برای مخفی کردن هدر و فوتر در صفحات خاص
  const isAuthPage = pathname === '/login' || pathname === '/register'|| pathname === '/forget';

  return (
    <html lang="en" dir="rtl">
           <head>
          <title>اولین سایت اختصاصی من❤️</title>
          <meta name="description" content="ساخته شده توسط A.h.h.81" />
          <link
  rel="stylesheet"
  href="/fonts/fontawesome/css/all.min.css"
/>
        </head>
      <body >
        {/* تنظیم متا دیتا مخصوص این صفحه */}
     

        {/* نمایش هدر فقط در صورتی که صفحه لاگین یا ثبت‌نام نباشد */}
        {isAuthPage ? (
          <header>
            <HeaderAuth />
          </header>
        ): ( <header>
        <Header />
      </header>
    )}
        
        {/* محتوای اصلی صفحه */}
        {children}

        {/* نمایش فوتر فقط در صورتی که صفحه لاگین یا ثبت‌نام نباشد */}
        {!isAuthPage && (
          <footer>
            <Contact />
          </footer>
        )}
      </body>
    </html>
  );
}
