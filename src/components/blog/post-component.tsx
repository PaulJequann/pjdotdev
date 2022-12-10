import Link from "next/link";
import { getPostCategories } from "../../utils/get-post-utils";
import { StrapiPost } from "../../utils/validators/strapi-post-validator";

const PostComponent = ({ post }: { post: StrapiPost }) => {
  return (
    <article
      key={post.id}
      className="grid grid-cols-12 gap-2 md:gap-4 bg-white max-h-48 scale-100 hover:scale-105 ease-in duration-300"
    >
      <div className="col-span-5 md:col-span-4 overflow-hidden">
        <Link href={`/blog/${post?.attributes.slug}`}>
          <img
            className="w-full h-32 md:h-48 object-fill overflow-hidden scale-100 hover:scale-125 ease-in duration-1000"
            src={post.attributes.featuredImage.data.attributes.url}
          />
        </Link>
      </div>
      <div className="col-span-7 md:col-span-8 p-1 md:p-3">
        <div className="col-span-6 lg:col-span-12 block">
          <div className="text-xs md:text-lg font-semibold text-yellow-600">
            {getPostCategories(post).map((category, index) => {
              return (
                <Link
                  key={index}
                  href={`/blog/category/${category.toLowerCase()}`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
          <div className="text-base md:text-xl font-semibold text-stone-800 md:uppercase py-1 md:py-2">
            <Link href={`/blog/${post?.attributes.slug}`}>
              <h3>{post.attributes.title}</h3>
            </Link>
          </div>
          <div className="hidden md:block text-base text-gray-500">
            {post.attributes.description}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostComponent;
