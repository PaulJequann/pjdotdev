import { getPostCategories } from "../../utils/get-post-utils";
import { StrapiPost } from "../../utils/validators/strapi-post-validator";

const BlogSection = ({ posts }: { posts: StrapiPost[] }) => {
  return (
    // <div className="relative bg-zinc-900 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    //   <div className="absolute inset-0">
    //     <div className="bg-zinc-900 h-1/3 sm:h-2/3" />
    //   </div>
    //   <div className="relative max-w-7xl mx-auto">
    //     <div className="text-center">
    //       <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
    //         From the blog
    //       </h2>
    //       <p className="mt-3 max-w-2xl mx-auto text-xl text-white sm:mt-4">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
    //         libero labore natus atque, ducimus sed.
    //       </p>
    //     </div>
    //     <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    //       {posts.map((post) => (
    //         <div
    //           key={post.id}
    //           className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    //         >
    //           <div className="flex-shrink-0">
    //             <img
    //               className="h-48 w-full object-cover"
    //               src={post.attributes.featuredImage.data.attributes.url}
    //               alt=""
    //             />
    //           </div>
    //           <div className="flex-1 bg-white p-6 flex flex-col justify-between">
    //             <div className="flex-1">
    //               <p className="text-sm font-medium text-yellow-600">
    //                 <a href="#" className="hover:underline">
    //                   Category
    //                 </a>
    //               </p>
    //               <a href="#" className="block mt-2">
    //                 <p className="text-xl font-semibold text-gray-900">
    //                   {post.attributes.title}
    //                 </p>
    //                 <p className="mt-3 text-base text-gray-500">
    //                   {post.attributes.description}
    //                 </p>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <section className="bg-zinc-900 text-gray-100">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
          From the blog
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-white sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
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
                        src={post.attributes.featuredImage.data.attributes.url}
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
  );
};

export default BlogSection;
