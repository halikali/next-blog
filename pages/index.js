import LandingPost from "../src/components/LandingPost/LandingPost";
import PopularPosts from "../src/components/PopularPosts/PopularPosts";

import sanityClient from "../sanity";
import Head from "next/head";

const Home = ({ posts }) => {
  <Head>
    <title>Nordic Rose Blog Site</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>;

  return (
    <>
      <LandingPost post={posts[0]} />
      <PopularPosts posts={Array.from(posts).slice(1, 11)} />
    </>
  );
};

export async function getStaticProps() {
  const query = `*[_type == "post"]{
    ...,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  } | order(publishedAt desc)`;

  const posts = await sanityClient.fetch(query);

  if (posts.length > 0) {
    return {
      props: { posts },
      revalidate: 600,
    };
  } else {
    return {
      props: {
        posts: [],
      },
    };
  }
}
export default Home;
