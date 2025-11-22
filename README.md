# Dashboard Application

A modern, responsive dashboard application built with React, Redux, and TypeScript. This project demonstrates best practices in state management, API integration, and component architecture.

## Features

- 📊 **Dashboard Overview**: Real-time statistics and metrics display
- 📋 **Data Management**: Interactive table with search and pagination
- 🔍 **Search & Filter**: Real-time data filtering capabilities
- 📱 **Responsive Design**: Mobile-first design using TailwindCSS
- 🎨 **Modern UI**: Clean, professional interface with smooth animations
- ⚡ **Fast Performance**: Optimized with Vite build tool
- 🧪 **Tested**: Unit tests with Vitest and React Testing Library
- 🔄 **State Management**: Redux Toolkit for predictable state updates

## Tech Stack

- **Frontend Framework**: React 19
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Icons**: Lucide React

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
│   ├── app/              # Redux store configuration
│   │   ├── store.ts      # Store setup
│   │   └── hooks.ts      # Typed Redux hooks
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   │   ├── Layout.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui/           # UI components
│   ├── features/         # Feature-based modules
│   │   └── data/         # Data management feature
│   │       ├── dataSlice.ts
│   │       └── dataSlice.test.ts
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Home.test.tsx
│   │   └── DataPage.tsx
│   ├── test/             # Test configuration
│   │   └── setup.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

## Features in Detail

### Dashboard Overview (Home Page)
- Displays key metrics with visual cards
- Shows statistics like Total Users, Posts, Revenue, and Active Sessions
- Includes placeholder areas for charts and graphs

### Data Management Page
- Fetches data from JSONPlaceholder API
- Interactive table with sortable columns
- Real-time search functionality
- Pagination with customizable items per page
- Error handling with retry capability
- Loading states with spinners

### Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile devices
- Touch-friendly navigation
- Optimized for all screen sizes

## API Integration

The application uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch sample post data. The API integration includes:

- Async thunks for data fetching
- Loading and error states
- Proper error handling with user-friendly messages
- Retry mechanism on failure

## State Management

Redux Toolkit is used for state management with the following features:

- **Slices**: Modular state management
- **Async Thunks**: For API calls
- **Typed Hooks**: Type-safe useSelector and useDispatch
- **Immutable Updates**: Using Immer under the hood

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Code splitting with React Router
- Lazy loading of components
- Memoization where appropriate
- Optimized bundle size with Vite

## Future Enhancements

- [ ] Add data visualization charts
- [ ] Implement user authentication
- [ ] Add dark mode toggle
- [ ] Export data functionality
- [ ] Advanced filtering options
- [ ] Real-time data updates with WebSockets
- [ ] End-to-end tests with Cypress

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please open an issue in the repository.

---

Built with ❤️ using React and Redux
