import Categories from "@/components/categories/Categories";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import PromoBanner from "@/components/promo/PromoBanner";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/why-choose/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <PromoBanner/>
      <Testimonials/>
      <Footer/>
    </main>
    
  );
}