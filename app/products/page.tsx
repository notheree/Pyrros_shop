'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Premium Digital Package',
    price: 99.99,
    description: 'High-quality digital assets and tools',
    category: 'Tools'
  },
  {
    id: 2,
    name: 'Web Development Bundle',
    price: 149.99,
    description: 'Complete toolkit for web development',
    category: 'Development'
  },
  {
    id: 3,
    name: 'Design System Pro',
    price: 199.99,
    description: 'Professional design system components',
    category: 'Design'
  },
  {
    id: 4,
    name: 'API Integration Kit',
    price: 79.99,
    description: 'Ready-to-use API integration templates',
    category: 'Integrations'
  },
  {
    id: 5,
    name: 'Marketing Automation Suite',
    price: 249.99,
    description: 'Complete marketing automation tools',
    category: 'Marketing'
  },
  {
    id: 6,
    name: 'Analytics Dashboard',
    price: 129.99,
    description: 'Advanced analytics and reporting',
    category: 'Analytics'
  }
]

function getInitialCart() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : []
  }
  return []
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>(getInitialCart())

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  const categories = [...new Set(products.map(p => p.category))]

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      {/* Cart Preview */}
      {cart.length > 0 && (
        <div className="fixed top-6 right-6 z-50 bg-white shadow-2xl rounded-xl p-4 border border-gray-200 w-80">
          <h2 className="text-lg font-bold mb-2 text-pyrros-blue">Cart</h2>
          <ul className="mb-2 max-h-40 overflow-y-auto">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center py-1">
                <span>{item.name} <span className="text-xs text-gray-500">x{item.quantity}</span></span>
                <span className="font-bold text-pyrros-gold">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">Total:</span>
            <span className="font-bold text-pyrros-gold">
              ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </span>
          </div>
          <Link href="/cart" className="button-primary w-full text-center">Go to Cart</Link>
        </div>
      )}

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === null
                ? 'bg-pyrros-blue text-white shadow'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-pyrros-blue text-white shadow'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="card hover:shadow-2xl transition-shadow duration-200 bg-gradient-to-br from-white via-blue-50 to-pyrros-blue/10">
            <div className="bg-gradient-to-tr from-pyrros-blue/20 to-pyrros-gold/20 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-pyrros-blue">{product.name}</h3>
            <p className="text-sm text-pyrros-gold mb-2">{product.category}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pyrros-gold">${product.price}</span>
              <button
                className="button-primary text-sm shadow-md hover:scale-105 transition-transform"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products found in this category</p>
        </div>
      )}
    </div>
  )
}
