# Daniele Dan - Personal Website

A modern, minimalist personal website built with Astro and Tailwind CSS, inspired by Karpathy's design aesthetic.

## Features

- 🚀 Built with [Astro](https://astro.build/) for fast performance
- 🎨 Styled with [Tailwind CSS](https://tailwindcss.com/) for clean, responsive design
- 📱 Fully responsive layout that works on all devices
- 📝 Content-driven approach with structured data
- 🔍 SEO-friendly with proper meta tags
- 🏗️ Component-based architecture for easy maintenance

## Project Structure

```
personal-website-astro/
├── public/              # Static assets
│   └── assets/          # Images, icons, etc.
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content as data
│   │   ├── history/     # Work & education history
│   │   ├── projects/    # Project information
│   │   └── articles/    # Articles and other content
│   ├── layouts/         # Page templates
│   ├── pages/           # Routing structure
│   └── styles/          # Global styles
└── astro.config.mjs     # Astro configuration
```

## Getting Started

### Prerequisites

- Node.js ≥ 20.x
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danieled3/personal-website-astro.git
   cd personal-website-astro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## Deployment

This site is configured for GitHub Pages deployment:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed.

## Customization

To customize the content:

1. Edit the JSON files in the `src/content/` directory
2. Update images in the `public/assets/` directory
3. Modify component styles in their respective `.astro` files or in `src/styles/global.css`

## License

MIT
