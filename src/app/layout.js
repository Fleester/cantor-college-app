import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Logo from '/public/images/logo.png';
import Navbar from "./components/navbar"

export const metadata = {
  title: "Cantor-College",
  description: "Cantor College Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Image
            src={Logo}
            alt='Cantor College logo'
            width='150'
            height='150'
          />
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
