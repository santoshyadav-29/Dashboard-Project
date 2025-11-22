# Contributing to Dashboard Application

Thank you for considering contributing to this project! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/dashboard-app.git
cd dashboard-app
```

3. Install dependencies:
```bash
pnpm install
```

4. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

## Development Workflow

### Running the Development Server

```bash
pnpm dev
```

### Running Tests

```bash
# Run tests once
pnpm test run

# Run tests in watch mode
pnpm test

# Run tests with coverage
pnpm test -- --coverage
```

### Linting

```bash
pnpm lint
```

### Building

```bash
pnpm build
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools

### Examples

```bash
feat: Add user authentication
fix: Resolve pagination bug on data page
docs: Update README with deployment instructions
test: Add unit tests for dataSlice
refactor: Simplify search logic in DataPage
```

## Pull Request Process

1. **Update your branch** with the latest main:
```bash
git checkout main
git pull origin main
git checkout feature/your-feature-name
git rebase main
```

2. **Ensure all tests pass**:
```bash
pnpm test run
pnpm lint
pnpm build
```

3. **Push your changes**:
```bash
git push origin feature/your-feature-name
```

4. **Create a Pull Request** on GitHub with:
   - Clear title following commit message guidelines
   - Detailed description of changes
   - Screenshots (if UI changes)
   - Link to related issues

5. **Address review feedback** promptly

6. **Squash commits** if requested before merging

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use type inference where possible

### React

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Implement error boundaries where appropriate

### Redux

- Use Redux Toolkit
- Keep slices focused on a single feature
- Use async thunks for API calls
- Normalize state shape when needed

### CSS/Styling

- Use TailwindCSS utility classes
- Keep custom CSS minimal
- Follow mobile-first approach
- Ensure responsive design

### File Organization

```
src/
├── app/           # Redux store setup
├── components/    # Reusable components
│   ├── layout/    # Layout components
│   └── ui/        # UI components
├── features/      # Feature-based modules
├── pages/         # Page components
├── lib/           # Utility functions
└── test/          # Test configuration
```

## Testing Guidelines

### Unit Tests

- Test individual functions and components
- Mock external dependencies
- Aim for high coverage on critical paths
- Use descriptive test names

### Component Tests

- Test user interactions
- Test different states (loading, error, success)
- Test accessibility
- Use React Testing Library best practices

### Example Test

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
```

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for complex functions
- Update DEPLOYMENT.md for deployment changes
- Include inline comments for complex logic

## Performance Considerations

- Avoid unnecessary re-renders
- Use React.memo for expensive components
- Implement code splitting where appropriate
- Optimize images and assets
- Monitor bundle size

## Accessibility

- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper color contrast

## Questions?

If you have questions, please:
1. Check existing issues and discussions
2. Review the documentation
3. Open a new issue with the "question" label

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
