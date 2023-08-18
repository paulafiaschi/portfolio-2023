import { Manrope } from "next/font/google";
import Styles from "./styles/home.module.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Pau Fiaschi - Portfolio",
  description:
    "Welcome to my portfolio. I am a passionate frontend developer with a knack for turning ideas into interactive and visually captivating web experiences. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Styles.smoothScroll}>
      <body className={`${manrope.className} ${Styles.body}`}>{children}</body>
    </html>
  );
}
