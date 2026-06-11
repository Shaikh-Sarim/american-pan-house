# American Pen House - Project Instructions

## Project Overview
Professional publishing website for American Pen House using Next.js 14 with a premium USA-themed design. Fully functional, production-ready, and deployable on Vercel.

## Key Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Zod validation

## Color System
- Navy Blue: #0A1F44
- Red: #B22234
- White: #FFFFFF
- Light Gray: #F5F5F5

## Project Status
- [x] Setup copilot-instructions.md
- [x] Scaffold Next.js 14 project
- [x] Create project components
- [x] Build sections (7 sections with animations)
- [x] Create API endpoint with validation
- [x] Configure Tailwind theme
- [x] Add Framer Motion animations
- [x] Build and test successfully
- [x] Create comprehensive documentation

## Website Sections
1. **Hero Section** - Headline, CTA buttons, social proof
2. **Services Section** - 4 interactive service cards
3. **About Section** - 6 benefit cards
4. **Process Section** - 5-step publishing workflow
5. **Testimonials Section** - Author success stories carousel
6. **Pricing Section** - 3-tier pricing packages
7. **Contact Section** - Working contact form with API
8. **Header & Footer** - Navigation and site footer

## Key Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations (Framer Motion)
- ✅ Interactive components
- ✅ Contact form with Zod validation
- ✅ POST API endpoint (/api/contact)
- ✅ TypeScript strict mode
- ✅ Production-ready
- ✅ Vercel-optimized
- ✅ Fast load times
- ✅ Accessible markup

## Getting Started

### Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Deployment
See DEPLOYMENT.md for complete deployment instructions.

## Project Structure
```
/app                 # Next.js app directory
  /api/contact      # Contact form API endpoint
  layout.tsx        # Root layout
  page.tsx          # Home page
  globals.css       # Global styles
/components         # React components
  /sections         # Page sections
  Header.tsx
  Footer.tsx
/lib               # Utilities & validators
  /validators
  utils.ts
/types             # TypeScript types
/public            # Static assets
```

## Contact Form API
- **Endpoint:** POST /api/contact
- **Validation:** Zod schema validation
- **Fields:** name, email, message
- **Response:** JSON with success status and message

## Customization Guide

### Change Colors
Edit `tailwind.config.ts` colors in the theme.extend section

### Update Content
All text is in component files. Update directly in:
- components/sections/*.tsx for section content
- components/Header.tsx for navigation
- components/Footer.tsx for footer content

### Add Email Service
Update `app/api/contact/route.ts` to integrate:
- Resend
- SendGrid
- Mailgun
- Or any other email provider

## Documentation
- README.md - Complete project overview
- DEPLOYMENT.md - Deployment instructions
- This file - Project setup and configuration

## Next Steps
1. Customize content with your branding
2. Add email service to contact form
3. Deploy to Vercel using DEPLOYMENT.md guide
4. Monitor and optimize performance
