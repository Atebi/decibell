import { poppins, comfortaa } from "./utils/fonts";
import "./globals.css";
import AOSInit from "./utils/aos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Decibell!",
  description: "The platform for all artists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <AOSInit />
      <body className={`${poppins.variable} font-poppins`}>
        <Navbar />
        {children}
        <Footer comfortaa={comfortaa.variable} />
      </body>
    </html>
  );
}
