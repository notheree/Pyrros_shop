'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

// Load cart from localStorage for persistence
function getInitialCart(): CartItem[] {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : []
  }
  return []
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCart())

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12 card">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
          <Link href="/products" className="button-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="card bg-gradient-to-br from-white via-blue-50 to-pyrros-blue/10">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center py-4 border-b last:border-b-0">
                  <div className="flex-1">
                    <h3 className="font-bold text-pyrros-blue">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border rounded bg-gray-100"
                    />
                    <p className="w-20 text-right font-bold text-pyrros-gold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="card h-fit bg-gradient-to-br from-white via-blue-50 to-pyrros-blue/10">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-pyrros-gold">${total.toFixed(2)}</span>
              </div>
            </div>
            <Link href="/checkout" className="button-primary block text-center">
              Proceed to Checkout
            </Link>
            <Link href="/products" className="button-secondary block text-center mt-2">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
