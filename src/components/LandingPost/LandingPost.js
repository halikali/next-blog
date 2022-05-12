import Link from "next/link";

import style from "./LandingPost.module.scss";

const LandingPost = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}_${post?._id}`} passHref>
      <div className={style.LandingPost}>
        <div className={style.imageWrapper}>
          <img
            src={post.mainImage.asset.url}
            className={style.image}
            alt="Landing Post"
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
