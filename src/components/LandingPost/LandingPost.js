import Image from "next/image";
import Link from "next/link";

import style from "./LandingPost.module.scss";

const LandingPost = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}_${post?._id}`} passHref>
      <div className={style.LandingPost}>
        <div className={style.imageWrapper}>
          <Image
            layout="responsive"
            width={160}
            height={90}
            className={style.image}
            alt={post?.title}
            src={post?.mainImage?.asset.url}
          />
        </div>
        <div className={style.landingPostBody}>
          <h1 className={style.title}>
            <Link href={"/"}>
              <a>{post.title}</a>
            </Link>
          </h1>
          <p className={style.spotText}>
            {Array.from(post.body[0].children).map((child) => child.text)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LandingPost;
