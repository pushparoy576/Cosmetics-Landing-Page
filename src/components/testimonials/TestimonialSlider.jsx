const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-8">Love Notes</h2>
        <blockquote className="text-2xl md:text-3xl font-serif italic text-primary mb-8">
          "I've never felt more confident in my skin. The Lumina Glow Serum is literally magic in a bottle. My texture is gone and I'm beaming!"
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" alt="User" />
          </div>
          <cite className="not-italic font-bold text-primary">Sarah Mitchell</cite>
          <span className="text-sm text-secondary">Verified Buyer</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;