
export default function Contact() {
  return (
    <footer className="w-full h-1/2 bg-gray-900 text-gray-300 flex flex-col justify-between px-12 py-10">
      
      {/* Top Section */}
      <div className="flex flex-row justify-around gap-10">
        
        {/* Brand / About */}
        <div className="flex flex-col gap-3 w-1/3">
          <h1 className="text-3xl font-bold text-white">MegaMOG</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            A digital marketing agency focused on creating impactful solutions
            for brands worldwide. We help you grow with SEO, design, and
            strategy.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 w-1/3">
          <h2 className="text-xl font-semibold text-white mb-2">Quick Links</h2>
          <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">About Us</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Projects</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 w-1/3">
          <h2 className="text-xl font-semibold text-white mb-2">Get in Touch</h2>
          <p>Email: <span className="text-gray-400">hello@megacorp.com</span></p>
          <p>Phone: <span className="text-gray-400">+1 (234) 567-890</span></p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} MegaMOG. All rights reserved.
      </div>
    </footer>
  );
}
