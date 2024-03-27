import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
        <div>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
