import Image from "next/image";
import Link from "next/link";

import style from "./LandingPost.module.scss";

const LandingPost = () => {
  return (
    <div className={style.LandingPost}>
      <div className={style.imageWrapper}>
        <Image
          src={
            "https://images.unsplash.com/photo-1651388391926-228ef4a04929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          width={200}
          height={200}
          layout="responsive"
          className={style.image}
          loading={`lazy`}
        />
      </div>
      <div className={style.landingPostBody}>
        <h1 className={style.title}>
          <Link href={"/"}>
            <a>
              A few words about this blog platform, Ghost, and how this site was
              made
            </a>
          </Link>
        </h1>
        <p className={style.spotText}>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>
    </div>
  );
};

export default LandingPost;
