import Navbar from "../components/Navbar";
import HeroSection from "../components/homepage/HeroComponent";
import ProjectsSection from "../components/homepage/ProjectsSection";
import Footer from "../components/Footer";
import BlogSection from "../components/homepage/BlogSection";
import { getPostCategories, getPostsByPage } from "../utils/get-post-utils";
import { StrapiPost } from "../utils/validators/strapi-post-validator";

const Home = ({ posts }: { posts: StrapiPost[] }) => {
  console.log(posts);
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />

        <BlogSection posts={posts} />
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
      posts: strapiData.data,
    },
  };
}
