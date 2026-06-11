# American Pen House - Professional Publishing Website

A premium, professional publishing services website built with Next.js 14, React 18, and TypeScript. The site showcases American Pen House as a leading publishing company with a modern, responsive design inspired by professional publishing industry standards.

## Features

### ✨ Sections
- **Hero Section** - Eye-catching introduction with strong CTAs
- **Services Section** - Interactive showcase of publishing services
- **About Section** - Why choose American Pen House
- **Process Section** - 5-step publishing workflow
- **Testimonials Section** - Author success stories carousel
- **Pricing Section** - Three-tier publishing packages
- **Contact Section** - Working contact form with API integration
- **Responsive Navigation** - Desktop and mobile-friendly header
- **Footer** - Complete site footer with links and contact info

### 🎨 Design
- **USA-Themed Colors**: Navy Blue (#0A1F44), Red (#B22234), White (#FFFFFF), Light Gray (#F5F5F5)
- **Premium Typography** - Clean, professional fonts
- **Smooth Animations** - Framer Motion transitions
- **Fully Responsive** - Mobile, tablet, and desktop optimized

### 🔧 Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Lucide React icons
- **Backend**: Next.js API routes
- **Validation**: Zod schema validation

## Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
/app
  /api
    /contact
      route.ts           # Contact form API endpoint
  layout.tsx            # Root layout with metadata
  page.tsx              # Home page with all sections
  globals.css           # Global styles and Tailwind directives

/components
  Header.tsx            # Navigation header
  Footer.tsx            # Site footer
  /sections
    HeroSection.tsx
    ServicesSection.tsx
    AboutSection.tsx
    ProcessSection.tsx
    TestimonialsSection.tsx
    PricingSection.tsx
    ContactSection.tsx
    index.ts

/lib
  utils.ts              # Utility functions
  /validators
    contact.ts          # Zod schemas for contact form

/types
  index.ts              # TypeScript type definitions

/public                 # Static assets

tsconfig.json           # TypeScript configuration
tailwind.config.ts      # Tailwind CSS configuration
next.config.js          # Next.js configuration
```

## API Endpoints

### POST /api/contact
Submit a contact form with validation.

**Request Body:**
```json
{
  "name": "string (2-100 chars)",
  "email": "valid email",
  "message": "string (10-5000 chars)"
}
```

**Response:**
```json
{
  "success": true/false,
  "message": "Response message",
  "errors": { "field": ["error message"] } // Only if validation fails
}
```

## Customization

### Colors
Edit the color values in `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    navy: '#0A1F44',   // Change navy blue
    red: '#B22234',    // Change red
    white: '#FFFFFF',  // Change white
    light: '#F5F5F5',  // Change light gray
  },
}
```

### Content
All text content is original and can be customized in the respective section components:
- Hero: `components/sections/HeroSection.tsx`
- Services: `components/sections/ServicesSection.tsx`
- Testimonials: `components/sections/TestimonialsSection.tsx`
- etc.

### Contact Form Handler
Currently logs to console. To add email functionality, update `app/api/contact/route.ts` to integrate with:
- SendGrid
- Resend
- Mailgun
- Any other email service

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS and JS minification
- Automatic code splitting
- Optimized font loading
- Fast API routes using serverless functions

## Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Import repository in Vercel
3. Environment variables: None required for basic deployment
4. Click "Deploy"

For production email functionality, add environment variables for your email service.

### Other Platforms
The project is compatible with:
- Netlify
- AWS Amplify
- Railway
- Render

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file if needed for future integrations:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 American Pen House. All rights reserved.

## Support

For questions or issues:
- Email: info@americanpenhouse.com
- Phone: +1 (555) 123-4567
- Address: 123 Literary Lane, New York, NY 10001
