import Image from "next/image";
import Styles from "../styles/home.module.scss";

export default function Intro() {
  return (
    <section className={Styles.section}>
      <div className={Styles.sectionColumn}>
        <h2>Hi!</h2>
        <p>
          I’m Paula, a Frontend Developer with a knack for turning ideas into
          interactive and visually captivating web experiences.
        </p>
        <h4>Some of the tools I work with:</h4>
        <ul>
          <li>Next.js</li>
          <li>SASS</li>
          <li>Gsap</li>
          <li>Figma</li>
        </ul>
        <h4>Some of the things I can help you with:</h4>
        <ul>
          <li>Web Development</li>
          <li>Web Design</li>
          <li>UX/UI</li>
          <li>Wordpress</li>
          <li>Webflow</li>
        </ul>

        <a href="#" className={Styles.primaryButton}>
          Let's collaborate &rsaquo;
        </a>
      </div>
      <Image
        className={Styles.logo}
        src="/profile_pic.jpg"
        alt="Pau Fiaschi profile picture"
        width={450}
        height={600}
        // height x 0.75 = width
        priority
      />
    </section>
  );
}
