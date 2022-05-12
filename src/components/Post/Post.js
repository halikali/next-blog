import Link from "next/link";

import style from "./Post.module.scss";

const Post = ({ post }) => {
  return (
    <Link href={`/post/${post?.slug.current}_${post?._id}`} passHref>
      <div className={style.post}>
        <div className={style.imageWrapper}>
          <img
            className={style.image}
            src={post?.mainImage?.asset?.url}
            alt="Post"
          />
        </div>
        <div className={style.titleWrapper}>
          <h3 className={style.title}>{post?.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Post;
