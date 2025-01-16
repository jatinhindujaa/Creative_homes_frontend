import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

export const metadata = {
  title: "Creative homes",
  description: "Made by yogesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
