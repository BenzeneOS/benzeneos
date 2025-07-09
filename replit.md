# BenzeneOS - Security & Privacy First Linux Distribution

## Overview

This is a full-stack web application for BenzeneOS, a security and privacy-focused Linux distribution. The project serves as the official website showcasing the distribution's features, download options, and community resources. It's built as a single-page application with a modern, responsive design that emphasizes the security and privacy-first philosophy of the operating system.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React-based SPA using Vite for build tooling
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal schema)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Replit-optimized with autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom BenzeneOS theme
- **Icons**: Lucide React and React Icons

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database ORM**: Drizzle with PostgreSQL
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Component Structure
The frontend is organized into distinct sections:
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Main landing with call-to-action
- **Features Section**: Highlighting security and privacy features
- **Download Section**: Download links and system requirements
- **About Section**: Mission statement and statistics
- **Community Section**: Newsletter signup and social links
- **Footer**: Additional links and branding

## Data Flow

### Client-Side Data Management
- Uses TanStack Query for API state management
- Implements custom query functions with error handling
- Supports both authenticated and unauthenticated requests
- Toast notifications for user feedback

### Server-Side Data Management
- Memory-based storage implementation (MemStorage)
- Prepared for database integration with Drizzle schema
- User management with basic CRUD operations
- Middleware for request logging and error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connectivity
- **drizzle-orm & drizzle-kit**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing
- **date-fns**: Date manipulation utilities

### UI/UX Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets
- **class-variance-authority**: Component variant management

### Development Tools
- **typescript**: Type safety
- **vite**: Build tooling and dev server
- **esbuild**: Production bundling
- **tsx**: TypeScript execution

## Deployment Strategy

### Replit Integration
- Configured for Replit's autoscale deployment
- Uses Node.js 20, Web, and PostgreSQL 16 modules
- Port configuration: internal 5000, external 80
- Build command: `npm run build`
- Start command: `npm run start`

### Development Workflow
- Development server: `npm run dev` (uses tsx)
- Type checking: `npm run check`
- Database migrations: `npm run db:push`
- Production build: Vite + esbuild bundling

### Environment Configuration
- Development: Vite dev server with HMR
- Production: Static file serving with Express
- Database: PostgreSQL with connection pooling
- Error handling: Runtime error overlay in development

## Changelog

Changelog:
- June 21, 2025: Initial setup
- June 21, 2025: Updated to black and white color scheme with benzene ring logo
  - Replaced all colorful gradients with black/white/gray palette
  - Created custom benzene ring SVG logo component
  - Updated all sections to use monochrome styling
  - Applied grayscale filter to images for consistency

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Black and white color scheme, benzene ring logo for branding.