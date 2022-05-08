import Image from "next/image";
import Link from "next/link";

import style from "./Post.module.scss";

const Post = () => {
  return (
    <Link href={"/post/d"}>
      <div className={style.post}>
        <div className={style.imageWrapper}>
          <Image
            width={600}
            height={450}
            layout="responsive"
            className={style.image}
            src={
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            }
          />
        </div>
        <div className={style.titleWrapper}>
          <h3 className={style.title}>
            Granny gives everyone the finger, and other tips from OFFF Barcelona
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Post;
