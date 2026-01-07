# Shyara Digital

Beautiful digital invitation cards and videos for weddings, celebrations, and moments that matter.

## Project Overview

Shyara Digital is a modern web application for creating and sharing beautiful digital invitations. Built with React, TypeScript, and Vite, it provides an elegant platform for crafting personalized invitation cards and videos.

## Technologies

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn-ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shyarademo/shyara-digital-demo.git
cd shyara-digital-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080` (or the port specified in `vite.config.ts`).

### Alternative: Using PowerShell Script

On Windows, you can use the provided PowerShell script:

```powershell
.\run-local.ps1
```

This script will automatically check for Node.js/npm, install dependencies if needed, and start the development server.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions
│   └── main.tsx     # Application entry point
├── index.html       # HTML template
└── vite.config.ts   # Vite configuration
```

## Features

- Beautiful, responsive design
- Smooth page transitions
- SEO optimized
- Social media sharing support
- WhatsApp integration
- YouTube carousel integration
- Contact form
- FAQ section
- Sample gallery

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.

## License

Copyright © Shyara Digital. All rights reserved.
