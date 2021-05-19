import Link from "next/link";
import styles from "../styles/Mob.module.scss";

const NavList = () => {
  return (
    <div className={styles.mob}>
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
    </div>
  );
};

export default NavList;
