const CategoryCard = ({ category }) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer h-80 rounded-sm">
      <img 
        src={category.image} 
        alt={category.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-serif font-medium transform translate-y-0 transition-transform">
          {category.name}
        </h3>
        <p className="text-rose-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {category.description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;