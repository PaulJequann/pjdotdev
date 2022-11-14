import { StrapiPost } from "../../utils/validators/strapi-post-validator";
const BlogPost = ({ post }: { post: StrapiPost }) => {
  console.log(post);
  return (
    <>
      Hi
      <h1>{post.attributes.title}</h1>
      <p>{post.attributes.content}</p>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `http://localhost:1337/api/posts?filters[slug]=${params.slug}`
  );
  const post = await res.json();

  return {
    props: {
      post: post.data[0],
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/posts");
  const posts = await res.json();

  const paths = posts.data.map((post: StrapiPost) => ({
    params: { slug: post.attributes.slug.toString() },
  }));

  return { paths, fallback: false };
}
