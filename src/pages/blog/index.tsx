import Link from "next/link";
import PostComponent from "../../components/blog/post-component";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { socials } from "../../components/socials";
import { getPostCategories, getPostsByPage } from "../../utils/get-post-utils";
import {
  StrapiPost,
  StrapiPostWithMeta,
} from "../../utils/validators/strapi-post-validator";

const ThemeOne = () => {
  return (
    <section className="bg-zinc-900 dark:text-gray-100">
      <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="flex flex-row rounded-lg shadow-lg overflow-hidden bg-white text-gray-900">
          <div className="flex-shrink-0 md:basis-3/5">
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="w-full h-64 sm:h-96"
            />
          </div>
          <div className="flex-1 p-6 space-y-2">
            <a href="#">
              <h3 className="text-2xl font-semibold sm:text-4xl font-oswald">
                Noster tincidunt reprimique ad pro
              </h3>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Apr 11, 2021</span>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-2 py-1 text-xs font-semi-bold rounded dark:bg-black dark:text-white"
              >
                Typescript
              </a>
            </div>
            <p className="text-gray-800 py-5">
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?1"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <a href="#" className="block mt-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    In usu laoreet repudiare legendos
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">
                      Apr 11, 2021
                    </span>
                    <p className="px-2 py-1 text-xs font-semi-bold rounded bg-yellow-600 dark:text-white">
                      Typescript
                    </p>
                  </div>
                  <p className="mt-3 text-base text-gray-500">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?1"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <a href="#" className="block mt-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    In usu laoreet repudiare legendos
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">
                      Apr 11, 2021
                    </span>
                    <p className="px-2 py-1 text-xs font-semi-bold rounded bg-yellow-600 dark:text-white">
                      Typescript
                    </p>
                  </div>
                  <p className="mt-3 text-base text-gray-500">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?1"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <a href="#" className="block mt-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    In usu laoreet repudiare legendos
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">
                      Apr 11, 2021
                    </span>
                    <p className="px-2 py-1 text-xs font-semi-bold rounded bg-yellow-600 dark:text-white">
                      Typescript
                    </p>
                  </div>
                  <p className="mt-3 text-base text-gray-500">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

const SubPage = ({ posts }: { posts: StrapiPost[] }) => {};

const Home = ({ strapiData }: { strapiData: StrapiPostWithMeta }) => {
  const posts = strapiData.data;
  const meta = strapiData.meta.pagination;
  console.log(meta);
  console.log(posts);
  return (
    <>
      <Navbar />
      <section className="bg-zinc-900" aria-labelledby="blog-heading">
        <h2 id="blog-heading" className="sr-only">
          The Blog
        </h2>
        <div className="max-w-7xl mx-auto md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:border-t md:border-b md:border-gray-700 py-8 text-center">
            <h2 className="text-5xl md:text-8xl capitalize text-white font-bold">
              THE BLOG
            </h2>
          </div>
        </div>
      </section>
      <main>
        <section className="bg-zinc-900 text-gray-100">
          <div className="container max-w-7xl p-6 mx-auto md:space-y-6 space-y-12">
            <div className="grid grid-cols-12 gap-x-8">
              <div className="pb-5 md:pb-0 border-b border-zinc-700 md:border-0 mb-5 md:mb-0 lg:col-span-6 col-span-12">
                <div className="row">
                  <div className="col-span-6 lg:col-span-12 pb-4 overflow-hidden">
                    <img
                      className="w-full h-38 md:h-72 object-cover overflow-hidden scale-100 hover:scale-110 ease-in duration-1000"
                      src={
                        posts[0] &&
                        posts[0].attributes.featuredImage.data.attributes.url
                      }
                      alt=""
                    />
                  </div>
                  <div className="col-span-12 block">
                    <div className="text-base md:text-lg font-semibold text-yellow-600">
                      {posts[0] && getPostCategories(posts[0])}
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white uppercase pt-2 pb-3">
                      <h2>{posts[0]?.attributes.title}</h2>
                    </div>
                    <div className="text-base md:text-lg text-gray-400">
                      {posts[0]?.attributes.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12 block">
                <div className="grid row-3 gap-4">
                  {posts.slice(1, 4).map((post, index) => {
                    return (
                      <div
                        key={post.id}
                        className={
                          index !== 2
                            ? "grid grid-cols-12 gap-4 pb-4 border-b border-zinc-700 scale-100 hover:scale-105 ease-in duration-300"
                            : "grid grid-cols-12 gap-4 md:pb-4 scale-100 hover:scale-105 ease-in duration-300"
                        }
                      >
                        <div className="col-span-5 overflow-hidden">
                          <img
                            className="w-full h-24 md:h-40 object-fill scale-100 hover:scale-125 ease-in duration-1000"
                            src={
                              post.attributes.featuredImage.data.attributes.url
                            }
                          />
                        </div>
                        <div className="col-span-7 block">
                          <div className="text-sm md:text-base font-semibold text-yellow-600">
                            {getPostCategories(post)}
                          </div>
                          <div className="text-base md:text-lg font-bold text-white uppercase py-2">
                            <h2>{post.attributes.title}</h2>
                          </div>
                          <div className="hidden md:block text-base text-gray-400">
                            {post.attributes.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 text-neutral-900">
          <div className="container max-w-7xl px-3 py-5 md:px-6 md:py-10 mx-auto space-y-3 md:space-y-6">
            <div className="grid grid-cols-12 gap-x-8">
              <div className="md:col-span-9 col-span-12">
                <div className="grid grid-row-10 gap-3 md:gap-8">
                  {posts.slice(4, 14).map((post) => {
                    return <PostComponent key={post.id} post={post} />;
                  })}
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-5">
                  <div className="flex flex-1 justify-between sm:hidden">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing{" "}
                        <span className="font-medium">{1 * meta.page}</span> to{" "}
                        <span className="font-medium">{posts.length}</span> of{" "}
                        <span className="font-medium">{meta.total}</span>{" "}
                        results
                      </p>
                    </div>
                    <div>
                      <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                      >
                        <span className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20">
                          <span className="sr-only">Previous</span>
                          Previous
                        </span>
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        <a
                          href="#"
                          aria-current="page"
                          className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                        >
                          {meta.page}
                        </a>
                        {meta.page + 1 <= meta.pageCount && (
                          <Link href={`/blog/page/${meta.page + 1}`}>
                            <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                              {meta.page + 1}
                            </a>
                          </Link>
                        )}
                        {meta.page + 2 <= meta.pageCount && (
                          <Link href={`/blog/page/${meta.page + 2}`}>
                            <a className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">
                              {meta.page + 2}
                            </a>
                          </Link>
                        )}
                        {meta.page + 1 <= meta.pageCount ? (
                          <Link href={`/blog/page/${meta.page + 1}`}>
                            <a className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                              <span className="sr-only">Next</span>
                              Next
                            </a>
                          </Link>
                        ) : (
                          <span className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20">
                            <span className="sr-only">Next</span>
                            Next
                          </span>
                        )}
                      </nav>
                    </div>
                  </div>
                </div>
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

export default Home;

export async function getStaticProps() {
  const strapiData = await getPostsByPage(1);
  return {
    props: {
      strapiData,
    },
  };
}
