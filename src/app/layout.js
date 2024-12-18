import "./globals.css";
import Image from "next/image";
import Logo from '/public/images/logo.png';
import Navbar from "./components/navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Image
            className="logo"
            src={Logo}
            alt='Cantor College logo'
            width='125'
            height='125'
          />
          <Navbar />
        </header>
        {children}
        <footer>
          <p>© Copyright 2024 Cantor College</p>
        </footer>
      </body>
    </html>
  );
}
