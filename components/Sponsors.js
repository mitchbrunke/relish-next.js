import styles from "../styles/Sponsors.module.scss";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <h2>Sponsors</h2>
      <div className={styles.container}>
        <img src="/vfclogo.png" />
        <img src="/USC.png" />
        <img src="/councillogo.png" />
        <img src="/delux-logo.png" />
        <img src="/RossLogo.png" />
        <img src="/wbslogo.jpg" />
      </div>
    </div>
  );
};

export default Sponsors;
