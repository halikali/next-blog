import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import NavItem from "./NavItem/NavItem";
import style from "./Header.module.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const headerClasses = active
    ? `${style.header} ${style.active}`
    : style.header;

  return (
    <div className={headerClasses}>
      <Link href={"/"}>
        <a className={style.logoWrapper}>
          <Image
            className={style.logo}
            src={"/assets/brand-logo.svg"}
            width={200}
            height={40}
            layout="responsive"
            alt="brand logo"
          />
        </a>
      </Link>

      <nav>
        <ul className={style.navbarWrapper}>
          <NavItem to={"/"}>blog</NavItem>
          <NavItem to={"/about"}>about</NavItem>
          <NavItem to={"/links"}>links</NavItem>
          <NavItem to={"/project"}>project</NavItem>
        </ul>
      </nav>

      <div className={style.navbarIcon} onClick={() => setActive(!active)}>
        <span className={style.line1}></span>
        <span className={style.line2}></span>
        <span className={style.line3}></span>
      </div>
    </div>
  );
};

export default Header;
