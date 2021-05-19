import { useState } from "react";
import styles from "../styles/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";

const Navbar = ({ navOpen, setNavOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.alert}>
          <p>
            Save the date | 5th June 2021 | Mary River Parklands, Maryborough
          </p>
        </div>

        <div className={styles.navbar}>
          <div className="logo">
            <Link href="/">
              <a>
                <Image
                  src="/Relish-Logo.png"
                  width={110}
                  height={80}
                  alt="logo"
                />
              </a>
            </Link>
          </div>

          <nav>
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
          </nav>

          <div className="btn_nav">
            <Link href="https://www.eventbrite.com.au/e/relish-food-wine-festival-tickets-142035747745">
              <a target="_blank">
                <button>Buy Tickets</button>
              </a>
            </Link>
          </div>
          <div className={styles.mobile_nav}>
            <Image
              className={styles.toggle}
              onClick={(e) => setNavOpen(!navOpen)}
              src={navOpen ? "/close.svg" : "/nav-toggle.svg"}
              width={30}
              height={30}
            />

            {navOpen ? <NavList /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
