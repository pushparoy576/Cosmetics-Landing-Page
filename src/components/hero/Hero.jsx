const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=2000')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div> {/* Dark Overlay */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="uppercase tracking-widest text-sm mb-4 block text-rose-200">New Collection</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Reveal Your <br/> Inner Radiance
          </h1>
          <p className="text-lg md:text-xl mb-8 text-rose-50 max-w-lg">
            Discover our plant-based formulations designed to nourish, protect, and enhance your natural beauty.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-primary px-8 py-3 font-medium hover:bg-rose-50 transition-colors">
              Shop Skincare
            </button>
            <button className="border border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;