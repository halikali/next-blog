import Image from "next/image";

import Author from "../../src/components/Author/Author";
import Share from "../../src/components/Share/Share";
import WhatToRead from "../../src/components/WhatToRead/WhatToRead";
import style from "./PostDetailPage.module.scss";

const PostDetailPage = () => {
  return (
    <div className={style.PostDetailPage}>
      <h1 className={style.title}>
        A few words about this blog platform, Ghost, and how this site was made
      </h1>
      <p className={style.spotText}>
        Why Ghost and Figma instead of Medium, WordPress or other options?
      </p>
      <div className={style.landingImageWrapper}>
        <Image
          src={
            "https://images.unsplash.com/photo-1651648464281-2b52def1494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          }
          width={300}
          height={300}
          layout="responsive"
          className={style.image}
          alt="Landing Post"
        />
      </div>
      <div className={style.tabletRow}>
        <div className={style.contentPadding}>
          <Author />
        </div>
        <h2 className={style.subtitle}>Nextt on the pipeline</h2>
        <p>
          This lovely web is full of everything which is created I don&apos;t
          know what in mind, considering that sometimes totally bonkers stuff
          might be highly relevant if it has the right kind of thinking behind
          it.
        </p>
      </div>
      <div className={style.contentImageWrapper}>
        <Image
          src={
            "https://images.unsplash.com/photo-1651648464281-2b52def1494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          }
          width={300}
          height={300}
          layout="responsive"
          className={style.image}
          objectFit="cover"
          objectPosition={"center"}
          alt="Landing Post"
        />
      </div>
      <div className={style.tabletRow}>
        <p>
          This lovely web is full of everything which is created I don&apos;t
          know what in mind, considering that sometimes totally bonkers stuff
          might be highly relevant if it has the right kind of thinking behind
          it.
          <br />
          <br />
          Luckily, in the middle of all that, there are some pockets of content
          that offer delightfully valuable contrast to cursory wisdom in some of
          the established channels.
        </p>
        <p className={style[("label", "shareLabel")]}>share:</p>
        <div className={style.contentPadding}>
          <Share />
        </div>
        <div className={style.tagsWrapper}>
          <p className={style.label}>Tags:</p>
          <ul className={style.tagsList}>
            <li>
              <a>product design</a>
            </li>
            <li>
              <a>culture</a>
            </li>
          </ul>
        </div>
      </div>
      <WhatToRead />
    </div>
  );
};

export default PostDetailPage;
