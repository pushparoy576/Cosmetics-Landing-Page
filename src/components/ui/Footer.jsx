const Footer = () => {
  return (
    <footer className="bg-rose-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Lumina.</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Redefining beauty with clean ingredients and sustainable practices. 
              Designed for the modern individual.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><a href="#" className="hover:text-accent">New Arrivals</a></li>
              <li><a href="#" className="hover:text-accent">Best Sellers</a></li>
              <li><a href="#" className="hover:text-accent">Sets & Bundles</a></li>
              <li><a href="#" className="hover:text-accent">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><a href="#" className="hover:text-accent">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent">FAQ</a></li>
              <li><a href="#" className="hover:text-accent">Store Locator</a></li>
            </ul>
          </div>

          {/* Newsletter (Mini) */}
          <div>
            <h4 className="font-semibold mb-4">Stay in the know</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 border border-rose-200 focus:outline-none focus:border-accent text-sm"
              />
              <button className="bg-primary text-white px-4 hover:bg-accent transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-rose-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary">
          <p>© 2024 Lumina Beauty. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;