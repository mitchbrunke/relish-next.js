import Footer from "./Footer";
import Navbar from "./Nav";
import { useState, useEffect } from "react";
import MobileTickets from "./MobileBooking";

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [children]);

  return (
    <div className="content">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <MobileTickets />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
