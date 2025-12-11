import Hero from '../components/hero/Hero';
import CategoriesGrid from '../components/categories/CategoriesGrid';
import ProductGrid from '../components/products/ProductGrid';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import Newsletter from '../components/newsletter/Newsletter';

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <CategoriesGrid />
      
      {/* Why Choose Us Micro-section */}
      <section className="py-16 bg-rose-50 border-y border-rose-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="font-serif text-xl mb-2">Clean Ingredients</h3>
            <p className="text-secondary text-sm">100% Vegan, Cruelty-free and paraben-free formulations.</p>
          </div>
          <div className="p-4">
            <h3 className="font-serif text-xl mb-2">Sustainable</h3>
            <p className="text-secondary text-sm">Recyclable packaging and carbon-neutral shipping.</p>
          </div>
          <div className="p-4">
            <h3 className="font-serif text-xl mb-2">Expertly Crafted</h3>
            <p className="text-secondary text-sm">Developed by leading dermatologists and makeup artists.</p>
          </div>
        </div>
      </section>

      <ProductGrid />
      <TestimonialSlider />
      <Newsletter />
    </main>
  );
};

export default LandingPage;