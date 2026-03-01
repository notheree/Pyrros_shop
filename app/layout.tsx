import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pyrros Digital - Premium Digital Products',
  description: 'Shop premium digital products and services from Pyrros Digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="bg-[#fffbe6] shadow-lg border-b border-[#fbbf24]">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-4xl font-extrabold text-[#fbbf24] drop-shadow font-bebas">
                Pyrros
              </div>
              <div className="text-lg text-[#232946] font-bold tracking-wide">Digital</div>
            </div>
            <ul className="flex space-x-8">
              <li><a href="/" className="hover:text-[#fbbf24] transition-colors font-semibold">Home</a></li>
              <li><a href="/products" className="hover:text-[#fbbf24] transition-colors font-semibold">Products</a></li>
              <li><a href="/cart" className="hover:text-[#fbbf24] transition-colors font-semibold">Cart</a></li>
              <li><a href="/account" className="hover:text-[#fbbf24] transition-colors font-semibold">Account</a></li>
            </ul>
          </nav>
        </header>

        <main className="min-h-screen bg-[#fdf6e3]">
          {children}
        </main>

        <footer className="bg-[#fffbe6] border-t border-[#fbbf24] text-[#fbbf24] mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#fbbf24] font-bebas">Pyrros Digital</h3>
                <p className="text-[#232946]">Premium digital products and services</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-[#fbbf24] font-bebas">Quick Links</h4>
                <ul className="space-y-2 text-[#232946]">
                  <li><a href="/products" className="hover:text-[#fbbf24]">Products</a></li>
                  <li><a href="/about" className="hover:text-[#fbbf24]">About Us</a></li>
                  <li><a href="/contact" className="hover:text-[#fbbf24]">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-[#fbbf24] font-bebas">Support</h4>
                <ul className="space-y-2 text-[#232946]">
                  <li><a href="/faq" className="hover:text-[#fbbf24]">FAQ</a></li>
                  <li><a href="/shipping" className="hover:text-[#fbbf24]">Shipping Info</a></li>
                  <li><a href="/privacy" className="hover:text-[#fbbf24]">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#fbbf24] mt-8 pt-8 text-center text-[#232946]">
              <p>&copy; 2026 Pyrros Digital. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
