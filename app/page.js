"use client";

import Styles from "../app/styles/home.module.scss";
import HeroBanner from "./components/HeroBanner";
import Intro from "./components/Intro";
import FeaturedProject from "./components/FeaturedProject";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <>
      <main className={Styles.main}>
        <HeroBanner />
      </main>
      <Intro />
      <FeaturedProject />
      <Connect />
    </>
  );
}
