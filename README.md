# Pyrros Digital - E-Commerce Website

A modern, fast, and responsive e-commerce website for Pyrros Digital built with Next.js, React, and Tailwind CSS.

## Features

- 🏠 **Home Page** - Beautiful landing page with featured products
- 📦 **Product Catalog** - Browse and filter products by category
- 🛒 **Shopping Cart** - Add and manage items in cart
- 💳 **Checkout Process** - Secure checkout flow with payment information
- 👤 **User Accounts** - Sign in, order history, and account settings
- 🎨 **Modern Design** - Tailwind CSS styling with custom Pyrros Digital brand colors
- 📱 **Responsive** - Mobile-friendly design that works on all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal performance

## Project Structure

```
pyrros-shop/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation and footer
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── products/
│   │   │   └── page.tsx        # Products listing page
│   │   ├── cart/
│   │   │   └── page.tsx        # Shopping cart page
│   │   ├── checkout/
│   │   │   └── page.tsx        # Checkout page
│   │   └── account/
│   │       └── page.tsx        # User account page
│   └── components/             # Reusable components
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── next.config.js              # Next.js configuration
└── .eslintrc.json             # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Technology Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Linting**: ESLint

## Customization

### Brand Colors

Edit `tailwind.config.js` to customize the Pyrros Digital brand colors:

```javascript
colors: {
  'pyrros-blue': '#1e3a8a',
  'pyrros-gold': '#fbbf24',
}
```

### Adding Products

Modify the `products` array in `src/app/products/page.tsx` to add more products:

```typescript
const products = [
  {
    id: 1,
    name: 'Product Name',
    price: 99.99,
    description: 'Product description',
    category: 'Category'
  }
]
```

## Pages

- **Home** (`/`) - Welcome page with featured products
- **Products** (`/products`) - Complete product catalog with filtering
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Order completion with payment
- **Account** (`/account`) - User login, profile, and order history

## Features to Implement

- [ ] Backend API for product and order management
- [ ] Database integration (PostgreSQL, MongoDB, etc.)
- [ ] Real payment processing (Stripe, PayPal)
- [ ] User authentication (NextAuth.js)
- [ ] Order management system
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Search functionality
- [ ] Product recommendations
- [ ] Review and rating system

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect it's a Next.js project
4. Deploy with a single click

Alternatively, you can deploy to any Node.js hosting provider.

## Support

For more information about Next.js, check out:
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)

## License

This project is private and owned by Pyrros Digital.

## Author

Created with ❤️ for Pyrros Digital
