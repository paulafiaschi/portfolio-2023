import Image from "next/image";
import styles from "./styles/page.module.css";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBanner />
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
