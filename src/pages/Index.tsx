import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
