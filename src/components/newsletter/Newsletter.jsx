const Newsletter = () => {
  return (
    <section className="py-24 bg-rose-900 text-white text-center relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif mb-6">Join the Lumina Club</h2>
        <p className="text-rose-100 mb-8 max-w-lg mx-auto">
          Sign up to receive 15% off your first order, exclusive access to new launches, and beauty tips.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-6 py-3 rounded-sm text-primary w-full focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <button className="bg-white text-rose-900 px-8 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-rose-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;