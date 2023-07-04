import Layout from "@/components/layout";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import BlogSection from "@/components/blog-section";
import ContactsSection from "@/components/contacts-section";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <BlogSection />
      <ContactsSection />
    </Layout>
  );
};

export default Home;
