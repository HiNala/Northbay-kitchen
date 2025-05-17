import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and About */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-serif mb-4">Northbay Kitchen & Bath</h2>
            <p className="text-zinc-400 mb-6">
              Crafting exquisite kitchen and bath spaces in Sonoma County for over 30 years.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-zinc-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://pinterest.com" className="text-zinc-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <line x1="12" x2="12" y1="17" y2="22"></line>
                  <path d="M8 17a5 5 0 0 1-3-9c1.635-2.87 6.941-1.039 7.12 3.035"></path>
                  <circle cx="14.5" cy="9.5" r="1.5"></circle>
                  <circle cx="11.5" cy="5.5" r="1.5"></circle>
                  <circle cx="17.5" cy="13.5" r="1.5"></circle>
                  <path d="M12.602 17.494c.105.886.745 1.912 1.743 2.057 1.633.236 2.363-1.074 2.5-2.606.181-2.017-.092-4.005-.56-5.947-.27-1.118.845-1.311 1.57-.985.63.283 1.594 1.113 1.44 3.209-.02.14-.082.391.09.456.222.084.444-.366.487-.436.144-.247.15-.504.241-.767.226-.666.5-1.32.705-1.993"></path>
                </svg>
              </a>
              <a href="https://houzz.com" className="text-zinc-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M13 3H8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-7.5L13 3Z"></path>
                  <path d="M13 3v7.5h6"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-zinc-400 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/products" className="text-zinc-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-zinc-400 hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/kitchen-design" className="text-zinc-400 hover:text-white transition-colors">Kitchen Design</Link>
              </li>
              <li>
                <Link href="/services/bathroom-design" className="text-zinc-400 hover:text-white transition-colors">Bath Design</Link>
              </li>
              <li>
                <Link href="/services/custom-cabinetry" className="text-zinc-400 hover:text-white transition-colors">Custom Cabinetry</Link>
              </li>
              <li>
                <Link href="/services/renovations" className="text-zinc-400 hover:text-white transition-colors">Renovations</Link>
              </li>
              <li>
                <Link href="/services/consultations" className="text-zinc-400 hover:text-white transition-colors">Consultations</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-400 mr-3 mt-0.5">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
                <div>
                  <p className="text-zinc-400">123 Main Street</p>
                  <p className="text-zinc-400">Santa Rosa, CA 95401</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-400 mr-3 mt-0.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="text-zinc-400">(707) 555-1234</p>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-400 mr-3 mt-0.5">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <p className="text-zinc-400">info@northbaykitchenbath.com</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-zinc-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Northbay Kitchen & Bath. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-zinc-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-zinc-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 