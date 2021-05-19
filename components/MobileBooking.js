import Link from "next/link";
import styles from "../styles/Tickets.module.scss";

const MobileTickets = () => {
  return (
    <div className={styles.mobile_ticket_container}>
      <Link href="https://www.eventbrite.com.au/e/relish-food-wine-festival-tickets-142035747745">
        <a target="_blank">
          <button>Buy Tickets</button>
        </a>
      </Link>
    </div>
  );
};

export default MobileTickets;
