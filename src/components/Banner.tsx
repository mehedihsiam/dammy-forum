import styles from "@/styles/banner.module.css";
import Image from "@/assets/images/banner.webp";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.half_container}>
          <p className={styles.headline}>Welcome to Our Forum!</p>
          <p className={styles.description}>
            Join our vibrant community to discuss, share, and connect on topics
            you care about. Dive into conversations, seek advice, and explore
            endless possibilities with fellow members. Let's make every
            discussion meaningful and every connection count. Enjoy your stay!
          </p>
        </div>

        <div className={`${styles.half_container} items-center`}>
          <img className={styles.image} src={Image} alt="" />
        </div>
      </div>
    </div>
  );
}
