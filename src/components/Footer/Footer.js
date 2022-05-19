import Image from "next/image";

import style from "./Footer.module.scss";

const Footer = () => {
  const categories = [
    "Growth",
    "Strategy",
    "Suspense",
    "Creativity",
    "UX design",
    "Remote work",
    "Distributed teams",
    "Digital product design",
  ];

  return (
    <footer className={style.footer}>
      <ul className={style.categoriesWrapper}>
        {categories.map((item, index) => (
          <li className={style.category} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className={style.textWrapper}>
        <div className={style.iconWrapper}>
          <Image
            src={"/assets/footer-brand-logo.png"}
            width={230}
            height={22}
            layout="responsive"
            alt="brand logo"
          />
        </div>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula.
        </p>
        <div className={style.linkWrapper}>
          <p href="/">twitter</p>
          <p href="/">linkedin</p>
          <p href="/">RSS</p>
        </div>
        <p className={style.copyright}>
          © 2012–2020 Nordic Rose Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
