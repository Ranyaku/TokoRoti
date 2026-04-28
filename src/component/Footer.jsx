export default function Footer () {
  return (
    <footer className="w-full border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="font-bold text-lg">MyStore</h2>
            <p className="text-sm mt-2">
              Toko online terpercaya dengan berbagai produk berkualitas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-2">Menu</h3>
            <ul className="text-sm space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm">Email: support@mystore.com</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-4 border-t text-sm text-center">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </div>

      </div>
    </footer>
  );
};