import Post from "../Post/Post";
import style from "./PopularPosts.module.scss";

const PopularPosts = () => {
  return (
    <div className={style.popularPosts}>
      <h2 className={style.title}>Popular Posts</h2>
      <div className={style.popularPostsWrapper}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PopularPosts;
