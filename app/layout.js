import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import "@/app/_styles/global.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Creative homes",
  description: "Made by yogesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className} style={{position:"relative"}}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
