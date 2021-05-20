import styles from "../styles/Tickets.module.scss";
import Link from "next/link";

const TicketCTA = () => {
  return (
    <div className={styles.ticketCTA}>
      <div className="heading">
        <h2>Buy Tickets</h2>
      </div>

      <div className="btn">
        <Link href="https://www.eventbrite.com.au/e/relish-food-wine-festival-tickets-142035747745">
          <a target="_blank">
            <button>Book now</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TicketCTA;
