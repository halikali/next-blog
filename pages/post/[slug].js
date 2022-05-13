import SanityBlockContent from "@sanity/block-content-to-react";
import Head from "next/head";

import sanityClient from "../../sanity";
import Author from "../../src/components/Author/Author";
import Share from "../../src/components/Share/Share";
import WhatToRead from "../../src/components/WhatToRead/WhatToRead";
import style from "./PostDetailPage.module.scss";

const PostDetailPage = ({ post }) => {
  const authorInfo = {
    name: post?.author?.name,
    avatarUrl: post?.author?.image?.asset?.url,
    postCreated: post?._createdAt,
  };

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>

      <div className={`${style.PostDetailPage} detail-page`}>
        <h1 className={style.title}>{post?.title}</h1>
        <p className={style.spotText}>
          {Array.from(post?.body[0].children).map((child) => child.text)}
        </p>
        <div className={style.landingImageWrapper}>
          <img
            className={style.image}
            src={post?.mainImage?.asset?.url}
            alt="Post"
          />
        </div>
        <div className={style.tabletRow}>
          <div className={style.contentPadding}>
            <Author info={authorInfo} />
          </div>
          <SanityBlockContent
            blocks={post?.body}
            serializers={serializers}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
        </div>
        <div className={style.tabletRow}>
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
    </>
  );
};

export async function getStaticProps({ params }) {
  const id = params.slug.split("_")[1];
  const url = `*[_id == "${id}"]{
    ...,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    "author": author->{
      _id,
      "name": name,
      image{
        asset->{
          url
        }
      }
    }
  }`;
  const post = await sanityClient.fetch(url);

  return {
    props: {
      post: post[0],
    },
    revalidate: 600,
  };
}

export async function getStaticPaths(context) {
  const query = `*[_type == "post"]{
    slug,
    _id
  }`;

  const pathsArray = await sanityClient.fetch(query);

  const paths = pathsArray.map((path) => ({
    params: { slug: `${path.slug.current}_${path._id}` },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default PostDetailPage;
