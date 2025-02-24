import HeroSection from "./Hero";
import ProductsSection from "./ProductsSection";
import FeaturedProducts from "./FeaturedProducts";
import OurOffer from "./OurOffer";
import TestimonialSection from "./TestimonialSection";
import FAQ from "./FAQ";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductsSection />

      <FeaturedProducts />
      <OurOffer />
      <TestimonialSection />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
