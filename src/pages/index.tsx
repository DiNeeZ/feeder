import Layout from "@/components/layout";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto">
        <AboutSection />
      </div>
    </Layout>
  );
};

export default Home;
