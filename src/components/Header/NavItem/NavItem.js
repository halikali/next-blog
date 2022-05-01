import { useRouter } from "next/router";
import Link from "next/link";

import style from "./NavItem.module.scss";

const NavItem = ({ to, children }) => {
  const router = useRouter();

  const checkActiveLink = (path) => {
    if (path === router.pathname) {
      return style.active;
    }
  };

  return (
    <li className={style.navItem}>
      <Link href={to}>
        <a className={checkActiveLink(to)}>{children}</a>
      </Link>
    </li>
  );
};

export default NavItem;
