import Image from "next/image";
import styles from "./page.module.css";
import HomeImage from "/public/images/20230829_111351.jpg"

export const metadata = {
  title: "Cantor College",
  description: "Home page",
};

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Image
        className={styles.backgroundImage}
        src={HomeImage}
        alt="Front of Cantor College"
      />
      <div className={styles.welcomeText}>
        <h1>Welcome to Cantor College</h1>
        <p>Empowering Minds, Shaping Futures</p>
      </div>
    </div>
  );
}
