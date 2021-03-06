import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/Relish-Logo.png" width={90} height={70} alt="logo" />
          </a>
        </Link>
      </div>

      <ul>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>

        <Link href="/program">
          <a>
            <li>Program</li>
          </a>
        </Link>

        <Link href="https://www.visitfrasercoast.com/wp-content/uploads/2021/04/COVID-Safe-Events-Information-for-Website-07.04.2021-1.pdf">
          <a target="_blank">
            <li>COVIDSafe</li>
          </a>
        </Link>

        <Link href="/contact">
          <a>
            <li>Contact Us</li>
          </a>
        </Link>
      </ul>

      <div id="copy">
        <p>&copy; Fraser Coast Tourism and Events 2021</p>
      </div>
    </div>
  );
};

export default Footer;
