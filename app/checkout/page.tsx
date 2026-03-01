'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process payment
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className="py-12 max-w-2xl mx-auto px-4">
        <div className="card text-center">
          <div className="text-5xl mb-4">✓</div>
          <h1 className="text-3xl font-bold mb-4 text-green-600">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-8">Thank you for your purchase. You will receive a confirmation email shortly.</p>
          <div className="bg-gray-100 p-4 rounded mb-8">
            <p className="font-bold mb-2">Order Number: #PYR{Math.floor(Math.random() * 1000000)}</p>
            <p className="text-gray-600">An email has been sent to {formData.email}</p>
          </div>
          <Link href="/" className="button-primary inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
        {/* Billing Information */}
        <div className="col-span-2 lg:col-span-1">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="col-span-2 lg:col-span-1">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
                maxLength={16}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  maxLength={5}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  maxLength={4}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary and Submit */}
        <div className="col-span-2">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$449.97</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$45.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-pyrros-gold">$494.97</span>
              </div>
            </div>
            <button type="submit" className="button-primary w-full">
              Place Order
            </button>
            <Link href="/cart" className="button-secondary block text-center mt-2">
              Back to Cart
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
