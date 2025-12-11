import { products } from '../../data/products';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Trending Now</h2>
            <p className="text-secondary">Our most loved formulations.</p>
          </div>
          <a href="#" className="hidden md:block text-accent border-b border-accent pb-1 hover:text-primary hover:border-primary transition-all">
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="border border-primary px-8 py-3 text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;