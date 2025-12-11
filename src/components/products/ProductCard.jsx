const ProductCard = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4 bg-gray-100 rounded-sm aspect-3/4">
        {/* New Badge */}
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-white text-xs px-2 py-1 uppercase tracking-widest z-10">
            New
          </span>
        )}
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Quick Add Button */}
        <button className="absolute bottom-0 left-0 right-0 bg-white/90 text-primary py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-medium text-sm hover:bg-accent hover:text-white">
          Add to Cart
        </button>
      </div>
      
      <div>
        <p className="text-xs text-secondary uppercase tracking-wide mb-1">{product.category}</p>
        <h3 className="font-serif text-lg font-medium mb-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-secondary">${product.price.toFixed(2)}</span>
          <div className="flex text-yellow-500 text-xs">
            {'★'.repeat(Math.floor(product.rating))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;