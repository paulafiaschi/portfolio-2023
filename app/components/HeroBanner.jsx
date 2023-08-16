import Styles from "../styles/hero.module.scss";

export default function HeroBanner() {
  return (
    <div className={Styles.heroGrid}>
      <div className={Styles.work}>Work</div>
      <div className={Styles.connect}>Connect</div>
      <div className={Styles.logo}>PF</div>
      <div className={Styles.about}>About</div>
      <div className={Styles.play}>Play</div>
    </div>
  );
}
