import Fourth from "@/components/Design/Fourth";
import Hero from "@/components/Design/Hero";
import Navbar from "@/components/Design/Navbar";
import Newsletter from "@/components/Design/Newsletter";
import Pricing from "@/components/Design/Pricing";
import Second from "@/components/Design/Second";
import Third from "@/components/Design/Third";
import Footer from "@/components/Design/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Second />
        <Third />
        <Fourth />
        <Pricing />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
