import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pyrros-blue to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Pyrros Digital</h1>
          <p className="text-xl mb-8">Discover premium digital products crafted with excellence</p>
          <Link href="/products" className="button-primary inline-block">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Product Card */}
          <div className="card">
            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Digital Package</h3>
            <p className="text-gray-600 mb-4">High-quality digital assets and tools designed for professionals</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pyrros-gold">$99.99</span>
              <button className="button-primary text-sm">Add to Cart</button>
            </div>
          </div>

          {/* Example Product Card */}
          <div className="card">
            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Web Development Bundle</h3>
            <p className="text-gray-600 mb-4">Complete toolkit for modern web development needs</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pyrros-gold">$149.99</span>
              <button className="button-primary text-sm">Add to Cart</button>
            </div>
          </div>

          {/* Example Product Card */}
          <div className="card">
            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Design System Pro</h3>
            <p className="text-gray-600 mb-4">Professional design system components and guidelines</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pyrros-gold">$199.99</span>
              <button className="button-primary text-sm">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Pyrros Digital?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">Carefully curated digital products built to the highest standards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Your data and transactions are protected with modern encryption</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
              <p className="text-gray-600">Get access to your digital products immediately after purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pyrros-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Browse our collection of premium digital products today</p>
          <Link href="/products" className="button-secondary inline-block">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  )
}
