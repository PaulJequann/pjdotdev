import {
  StrapiPost,
  StrapiPostWithMeta,
} from "./validators/strapi-post-validator";

export const getAllPosts = async (): Promise<StrapiPostWithMeta[]> => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/posts?sort=createdAt%3Adesc&pagination[pageSize]=10`
  );
  const data = await response.json();
  return data;
};

export const getPostsByPage = async (
  page: number
): Promise<StrapiPostWithMeta[]> => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/posts?populate[featuredImage][fields][0]=url&populate[featuredImage][fields][1]=alternativeText&populate[categories][fields][0]=name&sort=createdAt%3Adesc&pagination[page]=${page}&pagination[pageSize]=10`
  );
  const data = await response.json();
  return data;
};

export const getPostsByCategory = async (
  category: string
): Promise<StrapiPostWithMeta[]> => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/posts?filters\[categories\][name][$eqi]=${category}&populate[featuredImage][fields][0]=url&populate[featuredImage][fields][1]=alternativeText&populate[categories][fields][0]=name&sort=createdAt%3Adesc&pagination[pageSize]=10`
  );
  const data = await response.json();
  // console.log("getPostsByCategory", data);
  return data;
};

export const getPostBySlug = async (slug: string): Promise<StrapiPost> => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/posts?filters[slug]=${slug}&populate[featuredImage][fields][0]=url&populate[featuredImage][fields][1]=alternativeText&populate[categories][fields][0]=name`
  );
  const data = await response.json();
  return data.data[0];
};

export const getAllCategories = async () => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/categories?fields=name`
  );
  const data = await response.json();
  return data.data;
};

export const getPostCategories = (post: StrapiPost): String[] => {
  const categories = post.attributes.categories.data.map((category) => {
    return category.attributes.name;
  });
  // console.log(categories);
  return categories;
  //  return categories.join(", ");
};
