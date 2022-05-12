import Post from "../Post/Post";
import style from "./PopularPosts.module.scss";

const PopularPosts = ({ posts }) => {
  return (
    <div className={style.popularPosts}>
      <h2 className={style.title}>Popular Posts</h2>
      <div className={style.popularPostsWrapper}>
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
