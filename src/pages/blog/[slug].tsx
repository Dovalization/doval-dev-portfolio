import { client } from "@/lib/services/contentful";
import { IBlogPost } from "@/types/contentful.pages";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

type TBlogPostProps = IBlogPost;

interface TParams extends ParsedUrlQuery {
  slug: string;
}
const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
  },
};

export const BlogPost = ({
  content,
  coverImage,
  date,
  excerpt,
  slug,
  title,
}: TBlogPostProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image src={`https:${coverImage.fields.file.url}`} alt="Cover Image" />
      <p>{excerpt}</p>
      <div>{documentToReactComponents(content, RICHTEXT_OPTIONS)}</div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // get all blog posts from contentful
  // get all slugs from contentful
  // return all slugs as paths

  const fetchBlogPosts = await client.getEntries<IBlogPost>({
    content_type: "blogPost",
  });

  const paths = fetchBlogPosts.items.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as TParams;

  const fetchBlogPost =
    (await client.getEntry<IBlogPost>(slug)) ?? ({} as IBlogPost);

  return {
    props: fetchBlogPost.fields,
  };
};
