import { Poppins, Comfortaa, Dancing_Script } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  // display: "optional",
});

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
  // display: "optional",
});

export const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: "700"
})
