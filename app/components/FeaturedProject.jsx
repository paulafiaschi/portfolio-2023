import Image from "next/image";
import Styles from "../styles/home.module.scss";

export default function FeaturedProject() {
  return (
    <section className={`${Styles.section} ${Styles.highlighted}`}>
      <div className={Styles.sectionColumn}>
        <h3>Featured project</h3>
        <Image
          className={Styles.logo}
          src="/featured_project.png"
          alt="Unifyr featured work mockups"
          width={500}
          height={326}
          priority
        />
      </div>
      <div className={Styles.sectionColumn}>
        <p>
          🛠️ Built using <b>Next.js</b> for a lightning-fast and responsive user
          experience.
        </p>
        <p>
          🔗 Integrated with <b>Webflow</b> CMS to seamlessly manage website
          content.
        </p>
        <p>
          🚀 Deployed on <b>Vercel</b> for optimal performance and reliability.
        </p>
        <p>
          🎨 Designed on <b>Figma</b> to bring the vision to life.
        </p>
        <a href="#" className={Styles.primaryButton}>
          Explore Projects <span>&rsaquo;</span>
        </a>
      </div>
    </section>
  );
}
