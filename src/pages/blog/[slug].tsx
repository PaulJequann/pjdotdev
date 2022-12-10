import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { socials } from "../../components/socials";
import { getPostBySlug } from "../../utils/get-post-utils";
import { StrapiPost } from "../../utils/validators/strapi-post-validator";
const BlogPost = ({ post }: { post: StrapiPost }) => {
  console.log(post);
  return (
    <>
      <Navbar />
      <section className="bg-zinc-900" aria-labelledby="blog-heading">
        <h2 id="blog-heading" className="sr-only">
          The Blog
        </h2>
        <div className="max-w-7xl mx-auto md:py-8 px-4 sm:px-6 lg:px-8">
          <div className="py-4 text-center">
            {/* <h2 className="text-5xl md:text-8xl capitalize text-white font-bold">
              THE BLOG
            </h2> */}
            <img
              className="w-full h-38 md:h-96 object-cover overflow-hidden"
              src={post.attributes.featuredImage.data.attributes.url}
              alt=""
            />
          </div>
        </div>
      </section>
      <main>
        <section className="bg-gray-100 text-neutral-900">
          <div className="container max-w-7xl px-3 py-5 md:px-6 md:py-10 mx-auto space-y-3 md:space-y-6">
            <div className="grid grid-cols-12 gap-x-8">
              <div className="md:col-span-9 col-span-12">
                <h1>{post.attributes.title}</h1>
                <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
              </div>
              <div className="col-span-3 hidden md:block">
                <div className="sticky top-0 grid grid-row-12 bg-zinc-900 text-white gap-y-3">
                  <div className="row-span-2 px-10 py-2 bg-yellow-600 text-center place-self-center">
                    <h2 className="text-xl font-semibold">AUTHOR</h2>
                  </div>
                  <div className="row-span-6 place-self-center">
                    <img
                      className="inline-block h-36 w-36 rounded-full"
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQHwLIWrwuhT5A/profile-displayphoto-shrink_800_800/0/1629045271896?e=1673481600&v=beta&t=bikqUKJlb58K7lfWrysed7SV4eXKlhdxpU3mkHi5IBs"
                    />
                  </div>
                  <div className="row-span-2 place-self-center text-center mb-5">
                    <h2 className="font-semibold text-lg py-3">Paul JeQuann</h2>
                    <div className="items-center space-x-2 flex flex-row">
                      {socials.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          className="text-gray-500 hover:text-gray-300 inline"
                        >
                          <span className="sr-only">{social.name}</span>
                          <social.icon className="h-8 w-8" aria-hidden={true} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
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
