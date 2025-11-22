# E-Commerce Dashboard Application

A modern, fully responsive e-commerce admin dashboard built with React, Redux, and TypeScript. This comprehensive application provides complete product, order, and customer management capabilities with a beautiful, mobile-first interface.

## Features

- 📊 **Dashboard Overview**: Real-time business metrics, revenue charts, and recent orders
- 🛍️ **Product Management**: Complete product catalog with search, filtering, and CRUD operations
- 📦 **Order Management**: Track and manage customer orders with detailed status tracking
- 👥 **Customer Management**: Comprehensive customer profiles with order history and spending analytics
- 🔐 **Authentication**: Secure login and signup with protected routes
- 📈 **Revenue Analytics**: Interactive area charts with responsive design
- 🔍 **Search & Filter**: Real-time search across products, orders, and customers
- 📱 **Fully Responsive**: Optimized for all devices from mobile (320px) to desktop (4K)
- 🎨 **Modern UI**: Clean, professional interface with Lucide icons and smooth animations
- ⚡ **Fast Performance**: Optimized with Vite build tool and code splitting
- 🧪 **Tested**: Unit tests with Vitest and React Testing Library
- 🔄 **State Management**: Redux Toolkit with separate slices for products, orders, and customers

## Tech Stack

- **Frontend Framework**: React 19
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Icons**: Lucide React
- **Charts**: Recharts (for revenue analytics)
- **Utilities**: clsx (for conditional classes)

## Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dashboard
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

## Running the Application

### Development Mode

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
pnpm build
# or
npm run build
```

Preview the production build:

```bash
pnpm preview
# or
npm run preview
```

## Testing

Run unit tests:

```bash
pnpm test
# or
npm test
```

Run tests in watch mode:

```bash
pnpm test -- --watch
```

## Project Structure

```
dashboard/
├── src/
│   ├── app/                    # Redux store configuration
│   │   ├── store.ts            # Store setup with all slices
│   │   └── hooks.ts            # Typed Redux hooks
│   ├── components/             # Reusable components
│   │   ├── charts/             # Chart components
│   │   │   └── RevenueChart.tsx # Responsive revenue chart
│   │   ├── layout/             # Layout components
│   │   │   ├── Layout.tsx      # Main layout with sidebar
│   │   │   └── Sidebar.tsx     # Navigation sidebar
│   │   └── ProtectedRoute.tsx  # Route protection HOC
│   ├── features/               # Feature-based modules (Redux slices)
│   │   ├── products/           # Product management
│   │   │   └── productsSlice.ts
│   │   ├── orders/             # Order management
│   │   │   └── ordersSlice.ts
│   │   ├── customers/          # Customer management
│   │   │   └── customersSlice.ts
│   │   └── data/               # API data management
│   │       ├── dataSlice.ts
│   │       └── dataSlice.test.ts
│   ├── pages/                  # Page components
│   │   ├── Home.tsx            # Dashboard overview
│   │   ├── Home.test.tsx       # Dashboard tests
│   │   ├── Products.tsx        # Product management page
│   │   ├── Orders.tsx          # Order management page
│   │   ├── Customers.tsx       # Customer management page
│   │   ├── DataPage.tsx        # API data page
│   │   ├── Login.tsx           # Login page
│   │   ├── Signup.tsx          # Signup page
│   │   └── Settings.tsx        # Settings page
│   ├── lib/                    # Utility functions
│   │   └── utils.ts
│   ├── test/                   # Test configuration
│   │   └── setup.ts
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── PROJECT_SUMMARY.md          # Detailed project documentation
├── SUBMISSION_CHECKLIST.md     # Assignment checklist
├── GITHUB_SETUP.md             # Git setup guide
└── README.md
```

## Features in Detail

### 🏠 Dashboard Overview (Home Page)

- **Key Metrics Cards**: Total Revenue, Orders, Products, and Customers with trend indicators
- **Revenue Chart**: Interactive area chart with responsive design (250px-384px height scaling)
- **Recent Orders**: Quick view of latest customer orders with status badges
- **Quick Actions**: Fast navigation to add products, orders, and customers
- **Responsive Stats**: Cards adapt from mobile (compact) to desktop (spacious)

### 🛍️ Product Management

- **Product Grid**: Responsive grid layout (1-4 columns based on screen size)
- **Product Cards**: Visual product display with image, price, stock, and status
- **Search Functionality**: Real-time product search by name or category
- **CRUD Operations**: Add, edit, view, and delete products
- **Status Indicators**: Color-coded badges (In Stock, Low Stock, Out of Stock)
- **Mobile Optimization**: Compact cards with hidden labels on small screens

### 📦 Order Management

- **Order Table**: Comprehensive table with horizontal scroll on mobile
- **Order Details**: ID, customer, date, items, total, and status
- **Status Tracking**: Multi-state order status (Pending, Processing, Shipped, Delivered, Cancelled)
- **Search**: Find orders by ID or customer name
- **Pagination**: Navigate through large order lists
- **Responsive Design**: Table scales from mobile (min 640px width) to desktop

### 👥 Customer Management

- **Customer Cards**: Profile cards with contact information
- **Customer Metrics**: Total orders and spending per customer
- **Contact Details**: Email, phone, and location with icons
- **Status Badges**: Active/Inactive customer indicators
- **Search**: Real-time customer search by name or email
- **Responsive Grid**: 1-3 columns based on screen size

### 🔐 Authentication

- **Protected Routes**: Secure access to dashboard pages
- **Login/Signup**: User authentication forms
- **Session Management**: LocalStorage-based authentication
- **User Profile**: Display logged-in user information in sidebar

### 📈 Data Management Page

- **API Integration**: Fetches data from JSONPlaceholder API
- **Interactive Table**: Sortable columns with search
- **Pagination**: Customizable items per page
- **Error Handling**: User-friendly error messages with retry
- **Loading States**: Elegant loading spinners

### 📱 Responsive Design

- **Mobile-First**: Optimized for screens from 320px to 4K
- **Adaptive Layouts**: Components adjust spacing, fonts, and layout
- **Collapsible Sidebar**: Mobile menu with hamburger icon
- **Touch-Friendly**: Properly sized buttons and interactive elements
- **Text Truncation**: Prevents overflow with ellipsis
- **Flexible Grids**: Responsive grid systems throughout

## API Integration

The Data Management page uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to demonstrate async data fetching:

- **Async Thunks**: Redux Toolkit async thunks for API calls
- **Loading States**: Visual feedback during data fetching
- **Error Handling**: User-friendly error messages with retry capability
- **Search & Pagination**: Client-side data filtering and pagination
- **Type Safety**: Full TypeScript support for API responses

## State Management

Redux Toolkit powers the entire application with four main slices:

### Redux Slices

- **productsSlice**: Manages product inventory, search, and CRUD operations
- **ordersSlice**: Handles order data, filtering, and status updates
- **customersSlice**: Manages customer profiles and metrics
- **dataSlice**: Handles JSONPlaceholder API data fetching

### Features

- **Type-Safe Hooks**: Custom `useAppDispatch` and `useAppSelector` hooks
- **Async Thunks**: For API calls with loading and error states
- **Immutable Updates**: Using Immer under the hood
- **Modular Architecture**: Feature-based slice organization
- **Centralized Store**: Single source of truth for all application state

## Git Workflow

This project follows Git best practices:

1. **Feature Branch**: Development on `feature/dashboard-setup`
2. **Meaningful Commits**: Clear, descriptive commit messages
3. **Clean History**: Logical, atomic commits
4. **Pull Requests**: Ready for code review

### Commit Message Convention

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

**Built with ❤️ using React, Redux Toolkit, TypeScript, and TailwindCSS**

_A fully responsive, production-ready e-commerce admin dashboard_
