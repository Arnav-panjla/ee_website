# EE Website - Next.js Application

A modern web application built with Next.js 16, demonstrating the power of App Router, TypeScript, and Tailwind CSS.

## Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Dynamic blog post pages
│   │   └── page.tsx          # Blog listing page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
└── ...
```

## Getting Started

Dep install

```bash
npm install
```

Run development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Routes

- `/` - Home page with navigation links
- `/about` - About page
- `/contact` - Contact page with sample contact information
- `/blog` - Blog listing page
- `/blog/first-post` - Example blog post (dynamic route)
- `/blog/second-post` - Example blog post (dynamic route)
- `/blog/third-post` - Example blog post (dynamic route)

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
