import Image from "next/image";
import Styles from "../styles/home.module.scss";

export default function Connect() {
  return (
    <section className={Styles.section} id="connectSection">
      <div className={Styles.sectionColumn}>
        <h3>
          Have a minute? <br></br> Let's connect!
        </h3>
        <p>
          Are you excited about creating digital magic together? I'm open to
          collaboration, freelance opportunities, and connecting with fellow
          developers and designers.
        </p>
        <p>
          Feel free to reach out via email at{" "}
          <a href="mailto:pau.fiaschi@gmail.com">pau.fiaschi@gmail.com</a>, or
          connect with me on <a href="">LinkedIn</a> to explore how we can make
          the web a more delightful place, one pixel at a time.
        </p>
      </div>
      <div className={Styles.sectionColumn}>
        <h3>Or you can play Connect&nbsp;4 :)</h3>
        <Image
          className={Styles.logo}
          src="/connect4.png"
          alt="Connect 4 game"
          width={399}
          height={207}
          priority
        />
        <a href="" className={Styles.primaryButton}>
          Play
        </a>
      </div>
    </section>
  );
}
