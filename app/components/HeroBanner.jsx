"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Styles from "../styles/hero.module.scss";

export default function HeroBanner() {
  const workElement = useRef();
  const connectElement = useRef();
  const aboutElement = useRef();
  const playElement = useRef();
  const logoElement = useRef();

  function hoverOverWork() {
    workElement.current.style.width = "70%";
    workElement.current.style.height = "50%";
    aboutElement.current.style.width = "50%";
    aboutElement.current.style.height = "50%";
    connectElement.current.style.width = "30%";
    connectElement.current.style.height = "70%";
    playElement.current.style.width = "50%";
    playElement.current.style.height = "30%";
    gsap.to(logoElement.current, {
      duration: 0.75,
      ease: "none",
      transform: "translate3d(50%, 50%, 0px)",
    });
  }

  function leaveElement() {
    workElement.current.style.width = "60%";
    workElement.current.style.height = "40%";
    workElement.current.style.background = "white";
    aboutElement.current.style.width = "40%";
    aboutElement.current.style.height = "60%";
    aboutElement.current.style.background = "white";
    connectElement.current.style.width = "40%";
    connectElement.current.style.height = "60%";
    connectElement.current.style.background = "white";
    playElement.current.style.width = "60%";
    playElement.current.style.height = "40%";
    playElement.current.style.background = "white";
    gsap.to(logoElement.current, {
      duration: 0.75,
      ease: "none",
      transform: "translate3d(0%, 0%, 0px)",
    });
  }

  function hoverOverConnect() {
    workElement.current.style.width = "44%";
    workElement.current.style.height = "52%";
    aboutElement.current.style.width = "24%";
    aboutElement.current.style.height = "48%";
    connectElement.current.style.width = "56%";
    connectElement.current.style.height = "72%";
    connectElement.current.style.background = "none";
    playElement.current.style.width = "76%";
    playElement.current.style.height = "28%";
    gsap.to(logoElement.current, {
      duration: 0.75,
      ease: "none",
      transform: "translate3d(-80%, 60%, 0px)",
    });
  }

  return (
    <div className={Styles.heroGrid}>
      <div
        className={Styles.work}
        ref={workElement}
        onMouseEnter={hoverOverWork}
        onMouseLeave={leaveElement}>
        Work
      </div>
      <div
        className={Styles.connect}
        ref={connectElement}
        onMouseEnter={hoverOverConnect}
        onMouseLeave={leaveElement}>
        Connect
      </div>
      <div className={Styles.logo} ref={logoElement}>
        Pau
      </div>
      <div className={Styles.about} ref={aboutElement}>
        About
      </div>
      <div className={Styles.play} ref={playElement}>
        Play
      </div>
    </div>
  );
}
