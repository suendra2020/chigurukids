# Chiguru KIDS Preschool - Modern Website

A stunning, responsive preschool website built with React 19, Tailwind CSS 4, and Vite. Designed to showcase programs, activities, and facilitate enrollment inquiries.

## 🎨 Design Features

- **Modern Green Theme**: Child-friendly color palette with primary green (#2E7D32)
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Fade-in, slide-up, and carousel animations
- **Professional Typography**: Poppins (headings) and Nunito (body text)
- **High-Quality Images**: Professional photography of preschool activities
- **Interactive Components**: Carousel, forms, lightbox gallery, and more

## 📋 Pages Included

1. **Home** - Hero carousel, programs overview, testimonials, and CTA
2. **About Us** - Mission, vision, teaching methods, safety standards, and team
3. **Programs** - Detailed information about Playgroup, Nursery, LKG, UKG, and Daycare
4. **Activities** - Art & Craft, Dance & Music, Storytelling, Outdoor Play, Yoga, and Celebrations
5. **Gallery** - Photo gallery with lightbox, video gallery, and events showcase
6. **Contact** - Enrollment form, contact information, hours, and FAQ

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Basic knowledge of React and Tailwind CSS

### Installation

```bash
# Clone or extract the project
cd chiguru-kids-preschool

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

## 📦 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components (Header, Footer)
│   ├── pages/          # Page components (Home, About, Programs, etc.)
│   ├── contexts/       # React contexts (ThemeContext)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # React entry point
│   └── index.css       # Global styles and theme
├── index.html          # HTML template
└── package.json        # Dependencies and scripts

server/
├── index.ts            # Express server (for production)
```

## 🎯 Key Components

### Header Component
- Sticky navigation with logo
- Mobile-responsive hamburger menu
- Links to all pages and "Enroll Now" CTA

### Footer Component
- About section
- Quick links
- Contact information
- Social media links (Facebook, Instagram, WhatsApp)

### Home Page
- **Hero Carousel**: Auto-rotating image carousel with manual controls
- **About Section**: Brief introduction to the school
- **Programs Overview**: Cards for each program type
- **Why Choose Us**: Key features and benefits
- **Activities Highlight**: Grid of activity types
- **Testimonials**: Parent reviews with star ratings
- **CTA Section**: Call-to-action for enrollment

### Contact Page
- **Enrollment Form**: Collects parent and child information
- **Contact Information**: Address, phone, email, hours
- **FAQ Section**: Common questions and answers
- **Location Map**: Placeholder for Google Maps integration

## 🎨 Customization

### Colors
Edit the color variables in `client/src/index.css`:

```css
:root {
  --primary: #2E7D32;        /* Main green */
  --secondary: #66BB6A;      /* Light green */
  --accent: #A5D6A7;         /* Accent green */
  --background: #FFFFFF;
  --foreground: #1B5E20;
  /* ... more colors */
}
```

### Fonts
Google Fonts are loaded in `client/index.html`:
- **Poppins**: Bold, modern headings
- **Nunito**: Clean, readable body text

### Images
Replace image URLs in components with your own:
- Hero carousel images in `Home.tsx`
- Program images in `Programs.tsx`
- Activity images in `Activities.tsx`
- Gallery images in `Gallery.tsx`

### Content
Update school information:
- School name: "Chiguru KIDS" (throughout)
- Address: "Bangalore, India" (in Footer, Contact)
- Phone: "+91-9999999999" (in Footer, Contact)
- Email: "info@chigurukids.com" (in Footer, Contact)

## 📧 EmailJS Integration (Optional)

To enable email notifications for form submissions:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Update `Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

// In handleSubmit function:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

5. Install EmailJS package:
```bash
pnpm add @emailjs/browser
```

## 🔧 Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Format code
pnpm format
```

## 📱 Responsive Design

The website is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

All components use Tailwind's responsive utilities (`md:`, `lg:`, etc.)

## 🎬 Animations

- **Fade In**: Elements fade in on page load
- **Slide Up**: Sections slide up from bottom
- **Carousel**: Auto-rotating hero carousel
- **Hover Effects**: Cards scale and shadows enhance on hover
- **Float Animation**: Subtle floating motion on icons

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast meets WCAG standards

## 🚀 Deployment

### Option 1: Manus Platform
The site is built to deploy on Manus:
1. Save a checkpoint in the Manus UI
2. Click "Publish" button
3. Configure custom domain if needed

### Option 2: Traditional Hosting
```bash
# Build the project
pnpm build

# Deploy the dist/ folder to your hosting service
# (Vercel, Netlify, GitHub Pages, etc.)
```

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## 📊 SEO

The site includes:
- Meta tags for description and keywords
- Semantic HTML structure
- Open Graph tags ready (add in `index.html`)
- Sitemap ready (generate with tools like `sitemap-generator`)

## 🐛 Troubleshooting

### Dev server not starting
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Images not loading
- Check image URLs are correct
- Ensure images are accessible
- Use absolute URLs for external images

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind CSS is properly imported
- Verify CSS variables in `index.css`

## 📝 License

This project is created for Chiguru KIDS Preschool. All rights reserved.

## 🤝 Support

For questions or customizations:
- Email: info@chigurukids.com
- Phone: +91-9999999999

---

**Built with ❤️ for early childhood education**
