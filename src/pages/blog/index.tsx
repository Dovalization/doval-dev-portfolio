import { client } from "@/lib/services/contentful";
import { IBlogPost } from "@/types/contentful.pages";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

interface IBlogPageProps {
  blogPosts: IBlogPost[];
}

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

export const BlogPage = ({ blogPosts }: IBlogPageProps) => {
  return (
    <>
      {blogPosts.map((post) => (
        <div key={post.slug}>
          <h1>{post.title}</h1>
          <Image
            src={`https:${post.coverImage.fields.file.url}`}
            alt="Cover Image"
          />
          <p>{post.excerpt}</p>
          <span>{post.date}</span>
          <a href={`/blog/${post.slug}`}>Read More</a>
        </div>
      ))}
    </>
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

export const getStaticProps: GetStaticProps<IBlogPageProps> = async ({
  params,
}) => {
  const fetchedBlogPosts = await client.getEntries<IBlogPost>({
    content_type: "blogPost",
  });

  const formattedBlogPosts = fetchedBlogPosts.items.map(
    (post) =>
      ({
        ...post.fields,
        date: new Date(post.fields.date).toLocaleDateString(),
      } as IBlogPost)
  );

  return {
    props: {
      blogPosts: formattedBlogPosts,
    },
  };
};
