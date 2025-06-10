"use client";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import "@/app/_styles/global.css";
import { Outfit } from "next/font/google";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import MobileFooter from "./_components/MobileFooter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppIcon from "./_components/WhatsappIcon";

const outfit = Outfit({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});

const metadata = {
  title: "Creative homes",
  description: "Made By Nikhil",
};

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin/");

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={outfit.className} style={{ position: "relative" }}>
          <Toaster position="top-center" reverseOrder={false} />
          {!isAdminRoute && <Header />}
          {children}
          {!isAdminRoute && <Footer />} {!isAdminRoute && <MobileFooter />}
          <WhatsAppIcon />
        </body>
      </QueryClientProvider>
    </html>
  );
}
