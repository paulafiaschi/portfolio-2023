import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pau Fiaschi - Portfolio",
  description:
    "Welcome to my portfolio. I am a passionate frontend developer with a knack for turning ideas into interactive and visually captivating web experiences. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
