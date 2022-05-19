import Link from "next/link";
import Image from "next/image";

import style from "./Post.module.scss";

const Post = ({ post }) => {
  return (
    <Link href={`/post/${post?.slug.current}_${post?._id}`} passHref>
      <div className={style.post}>
        <div className={style.imageWrapper}>
          <Image
            src={post?.mainImage?.asset.url}
            width={160}
            height={90}
            layout="responsive"
            alt={post?.title}
            className={style.image}
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
