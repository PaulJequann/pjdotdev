import Link from "next/link";
import PostComponent from "../../../components/blog/post-component";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { socials } from "../../../components/socials";
import {
  getAllCategories,
  getAllPosts,
  getPostCategories,
  getPostsByCategory,
  getPostsByPage,
} from "../../../utils/get-post-utils";
import { StrapiPostWithMeta } from "../../../utils/validators/strapi-post-validator";

const CategoryPage = ({ strapiData }: { strapiData: StrapiPostWithMeta }) => {
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
        <section className="bg-gray-100 text-neutral-900">
          <div className="container max-w-7xl px-3 py-5 md:px-6 md:py-10 mx-auto space-y-3 md:space-y-6">
            <div className="grid grid-cols-12 gap-x-8">
              <div className="md:col-span-9 col-span-12">
                <div className="grid grid-row-10 gap-3 md:gap-8">
                  {posts.map((post) => {
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
                        <span className="font-medium">
                          {10 * meta.page + 1}
                        </span>{" "}
                        to{" "}
                        <span className="font-medium">{10 * posts.length}</span>{" "}
                        of <span className="font-medium">{meta.total}</span>{" "}
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
                        {meta.page > 1 && (
                          <Link href={`/blog/page/${meta.page - 1}`}>
                            <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                              {meta.page - 1}
                            </a>
                          </Link>
                        )}
                        <a
                          href="#"
                          aria-current="page"
                          className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                        >
                          {meta.page}
                        </a>

                        {meta.page + 1 <= meta.pageCount && (
                          <Link href={`/blog/page/${meta.page + 1}`}>
                            <a className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">
                              {meta.page + 1}
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

export default CategoryPage;

export async function getStaticPaths() {
  let paths = [];
  const categoryData = await getAllCategories();
  categoryData.forEach((category) => {
    paths.push({
      params: { category: category.attributes.name.toLowerCase() },
    });
  });
  console.log("categoryPaths: ", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const strapiData = await getPostsByCategory(context.params.category);
  return {
    props: {
      strapiData,
    },
  };
}
